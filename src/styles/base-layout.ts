import styled from "styled-components";

export const BaseLayout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.primary.foreground};
`;
