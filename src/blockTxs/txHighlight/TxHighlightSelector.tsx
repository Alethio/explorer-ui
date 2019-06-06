import * as React from "react";
import { observer, Observer } from "mobx-react";
import { SelectBox } from "@alethio/ui/lib/control/SelectBox";
import { Radio } from "@alethio/ui/lib/control/Radio";
import { HighlightSelectBox } from "../../box/HighlightSelectBox";
import { ITranslation } from "plugin-api/ITranslation";
import { HighlightFields } from "./HighlightFields";

interface ITxHighlightSelectorProps<TItem, THighlightFieldKey extends string> {
    fields: HighlightFields<TItem, THighlightFieldKey>;
    translation: ITranslation;
    disabled?: boolean;
}

@observer
export class TxHighlightSelector<TItem, THighlightFieldKey extends string>
extends React.Component<ITxHighlightSelectorProps<TItem, THighlightFieldKey>> {
    private requestClose: () => void;

    render() {
        let { translation: tr } = this.props;
        return (
            <SelectBox disabled={this.props.disabled} offset={{left: -20, top: -47}} render={({requestClose}) => {
                this.requestClose = requestClose;
                return (
                    <Observer>
                        {() => this.props.fields.getFields().map((f) => {
                            return (
                                <Radio
                                    id={"highlight_" + f.key}
                                    key={f.key}
                                    value={f.key}
                                    name="highlight"
                                    checked={this.props.fields.getSelectedField().key === f.key}
                                    onChange={this.onCheckboxChange}
                                >{f.getLabel(tr)}</Radio>
                            );
                        })}
                    </Observer>
                );
            }}>
                <HighlightSelectBox disabled={this.props.disabled}>
                    { this.props.fields.getSelectedField().getLabel(tr) }
                </HighlightSelectBox>
            </SelectBox>
        );
    }

    private onCheckboxChange = (
        _e: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
        _name: string,
        value: string
    ) => {
        if (checked) {
            this.props.fields.setSelectedField(value);
        }
        this.requestClose();
    }
}
