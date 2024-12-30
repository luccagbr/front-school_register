import styled from "styled-components";

type THomePage = {
    children: React.ReactNode;
};

export const HomePageStyle = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const HomePage: React.FC<THomePage> = ({ children }) => {
    return <HomePageStyle>{children}</HomePageStyle>;
};