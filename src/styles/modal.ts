import styled from "styled-components";

type ModalProps = {};

export const Modal = styled.dialog.attrs<ModalProps>({})`
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid blue;
    width: 80%;

    @media (min-width: 768px) {
        width: auto;
        min-width: 500px;
    }
`;
