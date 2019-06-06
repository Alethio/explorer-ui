import { Link } from "plugin-api/component/Link";
import styled from "@alethio/ui/lib/styled-components";

export const GridLink = styled(Link)`
    color: ${({theme}) => theme.colors.link};
`;
