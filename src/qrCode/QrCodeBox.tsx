import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { QrCodeIcon } from "@alethio/ui/lib/icon/QrCodeIcon";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import styled from "@alethio/ui/lib/styled-components";
import { Popover } from "@alethio/ui/lib/overlay/Popover";
import { QrCodeLayer } from "./QrCodeLayer";
import { contains } from "@puzzl/browser/lib/dom";
import * as ReactDOM from "react-dom";
import { ILogger } from "plugin-api/ILogger";
import { ITheme } from "../theme/ITheme";

const QrCodeBoxRoot = styled.div`
    cursor: pointer;
`;

export interface IQrCodeBoxProps {
    value: string;
    logger: ILogger;
}

@observer
export class QrCodeBox extends React.Component<IQrCodeBoxProps> {
    @observable
    private isHovered = false;
    @observable
    private layerVisible = false;
    private layerEl: HTMLElement;
    private targetEl: HTMLElement;

    componentDidMount() {
        document.addEventListener("click", this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleDocumentClick);
    }

    render() {
        let hover = this.isHovered;

        return (
            <>
                <Popover
                    placement="right-start"
                    offset={8}
                    visible={this.layerVisible}
                    content={<QrCodeLayer
                        value={this.props.value} logger={this.props.logger} ref={this.handleLayerRef} />}
                >
                    <QrCodeBoxRoot
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onClick={this.toggleLayer}
                        innerRef={this.handleTargetRef}
                    >
                        <ValueBox
                            Icon={QrCodeIcon}
                            colors={(theme: ITheme) => ({
                                background: theme.colors.valueBox.primary.background,
                                text: hover ? theme.colors.qrCodeIconActive : theme.colors.qrCodeIcon
                            })}
                        />
                    </QrCodeBoxRoot>
                </Popover>
            </>
        );
    }

    private handleLayerRef = (ref: QrCodeLayer) => {
        this.layerEl = ref ? ReactDOM.findDOMNode(ref) as HTMLElement : (void 0)!;
    }

    private handleTargetRef = (ref: HTMLDivElement) => {
        this.targetEl = ref!;
    }

    private handleMouseEnter = () => {
        this.isHovered = true;
    }

    private handleMouseLeave = () =>  {
        this.isHovered = false;
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (!contains(this.layerEl, e.target as HTMLElement) &&
            !contains(this.targetEl, e.target as HTMLElement)) {
            this.layerVisible = false;
        }
    }

    private toggleLayer = () => {
        this.layerVisible = !this.layerVisible;
    }
}
