import styled from "styled-components";

export const BaseLayout = styled.div.attrs<{ $width?: string; $height?: string }>((props) => ({
    $width: props.$width || "100vw",
    $height: props.$height || "100vh",
}))`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.primary.foreground};
    overflow: auto;
`;
