import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #202329;
  display: flex;
`;

export const Logo = styled.img`
  width: 75px;
`;

export const Options = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  a {
    text-decoration: none;
    color: #ffffff;
  }
  a:hover {
    color: #97ce4c;
  }
`;

export const Titulo = styled.h1`
  text-align: center;
  color: #97ce4c;
`;

export const Oooweee = styled.img`
  width: 500px;
  margin-top: 30px;
  margin-left: 30px;
`;

export const About = styled.div`
  display: flex;
`;

export const Subtitulo = styled.h3`
  color: #97ce4c;
  margin-top: 50px;
  margin-left: 50px;
`;

export const Texto = styled.p`
  margin-left: 50px;
  margin-right: 50px;
`;
