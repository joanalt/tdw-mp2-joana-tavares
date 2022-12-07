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
