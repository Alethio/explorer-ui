import * as React from "react";
import { BigNumber } from "@alethio/ui/lib/util/BigNumber";
import { ValueBox, IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { EthValue } from "@alethio/ui/lib/data/EthValue";
import { UsdValue } from "@alethio/ui/lib/data/UsdValue";

export interface IEthValueUsdBoxProps {
    /** Maximum number of decimals to show (minimum 2) */
    decimals?: number;
    variant?: IValueBoxProps["variant"];
    symbol?: string;
    locale: string;
    colors?: IValueBoxProps["colors"];
    /** Miner reward (in wei) - not present for Memento */
    wei: BigNumber;
    latestEthPrice: number | undefined;
}

export class EthUsdValueBox extends React.Component<IEthValueUsdBoxProps> {
    render() {
        let { locale, decimals, symbol, variant, colors, wei: beneficiaryReward, latestEthPrice } = this.props;

        return (
            <ValueBox
                colors={colors} variant={variant}>
                <EthValue wei={beneficiaryReward} locale={locale}
                    decimals={decimals} showSymbol={true} symbol={symbol} />
                { latestEthPrice ?
                <> =
                {" "}<UsdValue value={latestEthPrice} locale={locale} />
                </>
                : null }
            </ValueBox>
        );
    }
}
