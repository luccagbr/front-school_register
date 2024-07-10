import styled from "styled-components";

type ContainerProps = {
    $width?: string;
    $height?: string;
};

export const Container = styled.div.attrs<ContainerProps>((props) => ({
    $width: props.$width || "100%",
    $height: props.$height || "",
}))`
    display: flex;
    width: ${(props) => props.$width};
    ${(props) => props.$height && "height: " + props.$height + ";"}
`;
