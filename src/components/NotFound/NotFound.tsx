import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
`;

export function NotFound() {
    return <Container>Rota não encontrada</Container>;
}
