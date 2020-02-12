import {
    ITheme as IThemeBase, IThemeColors as IThemeBaseColors, IThemeSpacing as IThemeBaseSpacing
} from "@alethio/ui/lib/theme/ITheme";

export interface ITheme extends IThemeBase {
    colors: IThemeColors;
    spacing: IThemeSpacing;
}
export interface IThemeColors extends IThemeBaseColors {
    toolbarBetaSign: string;
    cookieBannerBg: string;
    privacyPolicyTableBorder: string;
    privacyNameBg: string;
    privacyNameText: string;
    blockColorCode: string;
    blockLogoBackground: string;
    blockLogoText: string;
    blockBoxText: string;
    parentHashBoxBg: string;
    parentHashBoxText: string;
    blockListItem: string;
    tooltipTxCountText: string;
    txColorCode: string;
    txHighlightColorCode: string;
    txLogoBackground: string;
    txLogoText: string;
    txBoxText: string;
    txViewSelector: string;
    txViewSelectorActive: string;
    txTypeValue: string;
    txTypeCreate: string;
    txTypeCall: string;
    txTypeBoxText: string;
    txTypeBoxBackground: string;
    txSidebarItem: string;
    txSidebarItemActive: string;
    cmBoxText: string;
    contractColorCode: string;
    unclesBoxBg: string;
    unclesBoxBorder: string;
    unclesBoxText: string;
    minerLabelBg: string;
    minerLabelText: string;
    identiconBorder: string;
    addressHashBoxBg: string;
    accountTypeBoxText: string;
    accountTypeBoxBackground: string;
    accountAliasBg: string;
    accountAliasText: string;
    accountEthBalance: string;
    accountBalanceChartStroke: string;
    accountBalanceChartRefStroke: string;
    accountBalanceChartDisabledStroke: string;
    accountBalanceChartFill: string;
    accountBalanceChartOverlayBg: string;
    accountBalanceChartOverlayBorder: string;
    accountBalanceChartSmallStroke: string;
    accountBalanceChartSmallFill: string;
    accountPieChartFill: string;
    accountPieChartBg: string;
    accountSymbolGrid: string;
    qrCodeIcon: string;
    qrCodeIconActive: string;
    logEventsBorder: string;
    logEventsSectionBg: string;
    searchNoResultsText: string;
    readContractBorder: string;
    readContractSectionBg: string;
    readContractLabelBg: string;
    readInputBoxBg: string;
    readInputBoxBorder: string;
    readInputBoxText: string;
    payloadBoxBg: string;
    payloadBoxBorder: string;
    payloadDataName: string;
    payloadDataType: string;
    payloadDataValue: string;
    sidebarPageTitle: string;
}
export interface IThemeSpacing extends IThemeBaseSpacing {
    bubbleWrapperSize: number;
    identiconSize: number;
    sidebarWidth: number;
}
