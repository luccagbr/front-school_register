import styled from "styled-components";
import { InfoCompany } from "./components/InfoCompany";
import { InfoLogin } from "./components/InfoLogin";

const LoginStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 60%;
    }
`;

export default function Login() {
    return (
        <LoginStyle>
            <InfoLogin />
            <InfoCompany />
        </LoginStyle>
    );
}
