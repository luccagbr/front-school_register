import styled from "styled-components";

type BoxProps = {
    $width?: string;
    $height?: string;
};

export const Box = styled.div.attrs<BoxProps>((props) => ({
    $width: props.$width || "100%",
    $height: props.$height,
}))`
    display: flex;
`;
