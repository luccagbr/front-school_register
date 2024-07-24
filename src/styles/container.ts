import styled from "styled-components";

type ContainerProps = {
    $width?: string;
    $height?: string;
};

export const Container = styled.div.attrs<ContainerProps>((props) => ({
    $width: props.$width || "100%",
    $height: props.$height || "100%",
}))`
    display: flex;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
`;
