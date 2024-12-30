import styled from "styled-components";
import bannerCompany from "../../../assets/banner-school-register.jpg";

const HeaderCompany = styled.header`
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    background-image: url(${bannerCompany});
    background-clip: content-box;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const DivCompany = styled.div``;

export function InfoCompany() {
    return <HeaderCompany>InfoCompany</HeaderCompany>;
}
