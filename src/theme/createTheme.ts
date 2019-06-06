import { IThemeMediaQueries } from "@alethio/ui/lib/theme/ITheme";
import { createTheme as createBaseTheme } from "@alethio/ui/lib/theme/createTheme";
import { ITheme, IThemeColors, IThemeSpacing } from "./ITheme";
import { IPalette } from "@alethio/ui/lib/theme/IPalette";

/*
 * We don't export a theme object directly to avoid importing it by accident without dependency injection
 */
export const createTheme: (palette: IPalette) => ITheme = (palette) => {
    let baseTheme = createBaseTheme(palette);

    let {
        BLUE, DARK_GREY, EXTRA_LIGHT_GREY, GREEN, GREY, LIGHT_GREY,
        MEDIUM_LIGHT_GREY, ORANGE, WHITE
    } = palette;

    let colors: IThemeColors = {
        ...baseTheme.colors,
        toolbarBetaSign: LIGHT_GREY,
        blockLogoBackground: BLUE,
        blockLogoText: WHITE,
        txLogoBackground: DARK_GREY,
        txLogoText: WHITE,

        blockColorCode: BLUE,
        txColorCode: DARK_GREY,
        contractColorCode: ORANGE,

        blockListItem: LIGHT_GREY,
        blockBoxText: WHITE,
        addressHashBoxBg: LIGHT_GREY,
        parentHashBoxBg: GREY,
        parentHashBoxText: WHITE,
        unclesBoxBg: WHITE,
        unclesBoxBorder: BLUE,
        unclesBoxText: BLUE,
        txBoxText: WHITE,
        cmBoxText: WHITE,
        txViewSelector: LIGHT_GREY,
        txViewSelectorActive: DARK_GREY,
        minerLabelBg: WHITE,
        minerLabelText: BLUE,
        link: BLUE,
        tooltipTxCountText: GREY,

        txTypeValue: GREEN,
        txTypeCreate: ORANGE,
        txTypeCall: DARK_GREY,
        txTypeBoxText: DARK_GREY,
        txTypeBoxBackground: WHITE,

        txSidebarItem: LIGHT_GREY,
        txSidebarItemActive: DARK_GREY,
        identiconBorder: LIGHT_GREY,
        accountTypeBoxText: DARK_GREY,
        accountTypeBoxBackground: WHITE,
        accountAliasBg: DARK_GREY,
        accountAliasText: WHITE,
        accountEthBalance: DARK_GREY,
        accountBalanceChartStroke: BLUE,
        accountBalanceChartRefStroke: LIGHT_GREY,
        accountBalanceChartDisabledStroke: GREY,
        accountBalanceChartFill: EXTRA_LIGHT_GREY,
        accountBalanceChartOverlayBg: WHITE,
        accountBalanceChartOverlayBorder: LIGHT_GREY,
        accountBalanceChartSmallStroke: BLUE,
        accountBalanceChartSmallFill: LIGHT_GREY,
        accountPieChartFill: BLUE,
        accountPieChartBg: WHITE,
        accountSymbolGrid: GREY,
        qrCodeIcon: GREY,
        qrCodeIconActive: DARK_GREY,
        logEventsBorder: LIGHT_GREY,
        logEventsSectionBg: WHITE,
        searchNoResultsText: BLUE,
        readContractBorder: LIGHT_GREY,
        readContractSectionBg: WHITE,
        readContractLabelBg: DARK_GREY,
        readInputBoxBg: WHITE,
        readInputBoxBorder: MEDIUM_LIGHT_GREY,
        readInputBoxText: DARK_GREY,
        payloadBoxBg: WHITE,
        payloadBoxBorder: LIGHT_GREY,
        payloadDataName: BLUE,
        payloadDataType: GREY,
        payloadDataValue: DARK_GREY,
        sidebarPageTitle: LIGHT_GREY,
        privacyPolicyTableBorder: LIGHT_GREY,
        cookieBannerBg: GREY,
        privacyNameBg: DARK_GREY,
        privacyNameText: WHITE
    };

    let spacing: IThemeSpacing = {
        ...baseTheme.spacing,
        bubbleWrapperSize: 24,
        identiconSize: 74
    };

    let mediaQueries: IThemeMediaQueries = baseTheme.mediaQueries;

    return {
        colors,
        spacing,
        mediaQueries
    };
};
