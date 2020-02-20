import styled from "../styled-components";
import * as React from "react";

const HEIGHT = 32;
const WIDTH = 40;
interface IViewSelectorButtonProps {
    active?: boolean;
    className?: string;
    borderRadiusPos?: "left" | "right";
    onClick?(): void;
}
const $ViewSelectorButton: React.StatelessComponent<IViewSelectorButtonProps> = ({ children, className, onClick }) => (
    <div className={className} onClick={onClick}>{children}</div>
);
export const ViewSelectorButton = styled($ViewSelectorButton)`
    height: ${HEIGHT}px;
    width: ${WIDTH}px;
    box-sizing: border-box;
    border-radius: ${({borderRadiusPos}) =>
        borderRadiusPos === "left" ?  "0px 4px 4px 0px" : borderRadiusPos === "right" ? "4px 0px 0px 4px" : ""};
    cursor: pointer;
    padding: 3px 0 0 7px;
    border: 1px solid ${({active, theme}) => active ? theme.colors.txViewSelector : theme.colors.txViewSelectorActive};
    background-color: ${({active, theme}) => active ? theme.colors.txViewSelector : theme.colors.txViewSelectorActive};
    color: ${({active, theme}) => active ? theme.colors.txViewSelectorActive : theme.colors.txViewSelector};
    &:hover {
        border: 1px solid ${({theme}) => theme.colors.txViewSelector};
        background-color: ${({theme}) => theme.colors.txViewSelector};
        color: ${({theme}) => theme.colors.txViewSelectorActive};
    }
`;
