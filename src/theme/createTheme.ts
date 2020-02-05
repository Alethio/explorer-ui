import { IThemeMediaQueries, IThemeFont } from "@alethio/ui/lib/theme/ITheme";
import { createTheme as createBaseTheme } from "@alethio/ui/lib/theme/createTheme";
import { ITheme, IThemeColors, IThemeSpacing } from "./ITheme";
import { IPalette } from "@alethio/ui/lib/theme/IPalette";

/*
 * We don't export a theme object directly to avoid importing it by accident without dependency injection
 */
export const createTheme: (palette: IPalette) => ITheme = (palette) => {
    let baseTheme = createBaseTheme(palette);

    let {
        BLUE, DARK, DAWN_L5, GREEN, DUSK, DAWN_D5,
        DAWN, ORANGE, WHITE
    } = palette;

    let colors: IThemeColors = {
        ...baseTheme.colors,
        toolbarBetaSign: DAWN_D5,
        blockLogoBackground: BLUE,
        blockLogoText: WHITE,
        txLogoBackground: DARK,
        txLogoText: WHITE,

        blockColorCode: BLUE,
        txColorCode: DARK,
        contractColorCode: ORANGE,

        blockListItem: DAWN_D5,
        blockBoxText: WHITE,
        addressHashBoxBg: DAWN_D5,
        parentHashBoxBg: DUSK,
        parentHashBoxText: WHITE,
        unclesBoxBg: WHITE,
        unclesBoxBorder: BLUE,
        unclesBoxText: BLUE,
        txBoxText: WHITE,
        cmBoxText: WHITE,
        txViewSelector: DAWN_D5,
        txViewSelectorActive: DARK,
        minerLabelBg: WHITE,
        minerLabelText: BLUE,
        link: BLUE,
        tooltipTxCountText: DUSK,

        txTypeValue: GREEN,
        txTypeCreate: ORANGE,
        txTypeCall: DARK,
        txTypeBoxText: DARK,
        txTypeBoxBackground: WHITE,

        txSidebarItem: DAWN_D5,
        txSidebarItemActive: DARK,
        identiconBorder: DAWN_D5,
        accountTypeBoxText: DARK,
        accountTypeBoxBackground: WHITE,
        accountAliasBg: DARK,
        accountAliasText: WHITE,
        accountEthBalance: DARK,
        accountBalanceChartStroke: BLUE,
        accountBalanceChartRefStroke: DAWN_D5,
        accountBalanceChartDisabledStroke: DUSK,
        accountBalanceChartFill: DAWN_L5,
        accountBalanceChartOverlayBg: WHITE,
        accountBalanceChartOverlayBorder: DAWN_D5,
        accountBalanceChartSmallStroke: BLUE,
        accountBalanceChartSmallFill: DAWN_D5,
        accountPieChartFill: BLUE,
        accountPieChartBg: WHITE,
        accountSymbolGrid: DUSK,
        qrCodeIcon: DUSK,
        qrCodeIconActive: DARK,
        logEventsBorder: DAWN_D5,
        logEventsSectionBg: WHITE,
        searchNoResultsText: BLUE,
        readContractBorder: DAWN_D5,
        readContractSectionBg: WHITE,
        readContractLabelBg: DARK,
        readInputBoxBg: WHITE,
        readInputBoxBorder: DAWN,
        readInputBoxText: DARK,
        payloadBoxBg: WHITE,
        payloadBoxBorder: DAWN_D5,
        payloadDataName: BLUE,
        payloadDataType: DUSK,
        payloadDataValue: DARK,
        sidebarPageTitle: DAWN_D5,
        privacyPolicyTableBorder: DAWN_D5,
        cookieBannerBg: DUSK,
        privacyNameBg: DARK,
        privacyNameText: WHITE
    };

    let spacing: IThemeSpacing = {
        ...baseTheme.spacing,
        bubbleWrapperSize: 24,
        identiconSize: 74
    };

    let media: IThemeMediaQueries = baseTheme.media;
    let font: IThemeFont = baseTheme.font;

    return {
        colors,
        spacing,
        media,
        font
    };
};
