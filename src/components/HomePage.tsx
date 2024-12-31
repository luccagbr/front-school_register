import styled from "styled-components";

type THomePage = {
    children: React.ReactNode;
};

export const HomePageStyle = styled.div`
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.color.primary.foreground};
    background: ${(props) => props.theme.color.primary.background};
`;

export const HomePage: React.FC<THomePage> = ({ children }) => {
    return <HomePageStyle>{children}</HomePageStyle>;
};
