import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "../styled-components";
import { IThemeColors } from "./ITheme";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ThemeColor = styled<{ small?: boolean; colorThunk(themeColors: IThemeColors): string; }, "div">("div")`
    border: 1px grey solid;
    width: ${props => props.small ? "100px" : "200px"};
    height: 100px;
    background-color: ${props => props.colorThunk(props.theme.colors)};
    margin-right: 8px;
`;

storiesOf("theme", module)
    .addParameters({
        info: {
            disable: true
        }
    })
    .add("colors", () => <div>
        <h1>Base colors</h1>
        <h2>Entities</h2>
        <Container>
            <div>
                <ThemeColor colorThunk={colors => colors.blockColorCode} />
                blockColorCode
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.txColorCode} />
                txColorCode
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.contractColorCode} />
                contractColorCode
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.addressHashBoxBg} />
                addressHashBoxBg
            </div>
        </Container>
    </div>);
