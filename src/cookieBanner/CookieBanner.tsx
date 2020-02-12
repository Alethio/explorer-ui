import * as React from "react";
import styled from "../styled-components";
import { Label } from "@alethio/ui/lib/data/Label";
import { Button } from "@alethio/ui/lib/control/Button";
import { StatusOkIcon } from "@alethio/ui/lib/icon/StatusOkIcon";
import { observer } from "mobx-react";
import { MoreInfoIcon } from "@alethio/ui/lib/icon/MoreInfoIcon";
import { CookieBannerState } from "./CookieBannerState";
import { IInternalNav, withInternalNav } from "plugin-api/withInternalNav";
import { Link } from "plugin-api/component/Link";

const CookieBannerRoot = styled<ICookieBannerProps, "div">("div")`
    background-color: ${({theme}) => theme.colors.cookieBannerBg};
    padding: 6px 24px 6px 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #FFFFFF;

    @media ${(props) => props.theme.media.sAndBelow} {
        padding-left: 8px;
        padding-right: 8px;
    }
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`;
const CookieLabel = styled(Label)`
    color: #FFFFFF;
`;
const CookieText = styled.div`
    padding: 0 16px 0 16px;
`;
const ButtonsContainer = styled.div`
    display: flex;
    padding: 8px 0;
`;
const FixedSizeFlex = styled.div`
    flex: 0 0 auto;
`;
const ExpanderFlex = styled.div`
    flex: 1 1 auto;
`;

export interface ICookieBannerProps {
    translations: {
        /** Text containing a link to privacy-policy page; link is enclosed in %s-es */
        text: string;
        /** Label/title */
        title: string;
        /** Accept button label */
        accept: string;
        /** More info button label */
        moreInfo: string;
    };
    state: CookieBannerState;
}

@observer
class $CookieBanner extends React.Component<ICookieBannerProps & { internalNav: IInternalNav; }> {
    render() {
        let tr = this.props.translations;
        let cookieTexts = tr.text.split("%s");

        let privacyPolicyUri = "page://aleth.io/privacy-policy";

        if (!this.props.internalNav.resolve(privacyPolicyUri)) {
            return null;
        }

        return this.props.state.cookiesAccepted ? null : (
            <CookieBannerRoot {...this.props}>
                <FixedSizeFlex>
                    <CookieLabel>{ tr.title }</CookieLabel>
                </FixedSizeFlex>
                <ExpanderFlex>
                    <CookieText>
                        { cookieTexts[0] }
                        <Link to={privacyPolicyUri}>
                            { cookieTexts[1] }
                        </Link>
                        { cookieTexts[2] }
                    </CookieText>
                </ExpanderFlex>
                <FixedSizeFlex>
                    <ButtonsContainer>
                        <Button
                            colors="primary"
                            Icon={StatusOkIcon}
                            onClick={this.acceptCookies}
                        >
                            { tr.accept }
                        </Button>
                        <div style={{width: 24}}></div>
                        <Link to={`${privacyPolicyUri}#cookies`}>
                            <Button
                                colors="primary"
                                Icon={MoreInfoIcon}
                            >
                                { tr.moreInfo }
                            </Button>
                        </Link>
                    </ButtonsContainer>
                </FixedSizeFlex>
            </CookieBannerRoot>
        );
    }

    private acceptCookies = () => {
        this.props.state.cookiesAccepted = true;
    }
}

export const CookieBanner = withInternalNav($CookieBanner);
