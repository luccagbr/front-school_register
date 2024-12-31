import { useState } from "react";
import styled from "styled-components";

const SectionStyle = styled.section`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${(props) => props.theme.color.background};
`;

const HeaderStyle = styled.header`
    font-size: 34px;
`;

type TOnSubmitErrors = {
    name: string;
    password: string;
};

export function InfoLogin() {
    const [errors, setErrors] = useState<TOnSubmitErrors | undefined>(undefined);

    return (
        <SectionStyle>
            <HeaderStyle>Login</HeaderStyle>
        </SectionStyle>
    );
}
