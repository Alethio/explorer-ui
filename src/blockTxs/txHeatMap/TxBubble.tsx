import * as React from "react";
import { Bubble } from "@alethio/ui/lib/data/vis/Bubble";
import { ThemeContext } from "plugin-api/ThemeContext";
import { ITheme } from "../../theme/ITheme";

interface ITxBubbleProps {
    size: number;
    highlightThreshold: number;
}

export const TxBubble: React.StatelessComponent<ITxBubbleProps> = ({ size, highlightThreshold }) => (
    <ThemeContext.Consumer>
        {(theme: ITheme) =>
            <Bubble
                size={size}
                wrapperSize={theme.spacing.bubbleWrapperSize}
                highlightThreshold={highlightThreshold}
                backgroundColor={theme.colors.txColorCode} />
        }
    </ThemeContext.Consumer>
);
