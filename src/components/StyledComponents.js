import styled from "styled-components";

//Header
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

//Conteudo
export const Titulo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const Personagens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Background = styled.div`
  background-color: #202329;
  color: #ffffff;
  margin: 15px;
  border-radius: 0.5rem;
  width: 300px;
`;

export const Nome = styled.h2`
  margin-left: 15px;
`;

export const Circulo = styled.p`
  height: 0.5rem;
  width: 0.5rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

//Sobre
export const About = styled.div`
  display: flex;
`;

export const Oooweee = styled.img`
  width: 350px;
  margin-top: 30px;
  margin-left: 30px;
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
