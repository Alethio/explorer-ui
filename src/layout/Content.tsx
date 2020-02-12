import styled from "../styled-components";

/** Page content area */
export const Content = styled.div`
    background-color: ${props => props.theme.colors.base.bg.main};
    flex: 1 1 auto;
    padding: 48px 0 72px 0;
    min-height: 100vh;
    width: 300px;
    box-sizing: border-box;
`;
