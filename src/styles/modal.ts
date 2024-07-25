import styled from "styled-components";

type ModalProps = {};

export const Modal = styled.dialog.attrs<ModalProps>({})`
    position: absolute;
    border: 1px solid blue;
    width: 100%;
    height: 100%;

    /* @media (min-width: 768px) {
        width: auto;
        min-width: 500px;
    } */
`;
