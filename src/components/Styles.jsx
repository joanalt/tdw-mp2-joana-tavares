import styled from "styled-components";
import fundo from "../images/detalhes.png"

//Header
export const Nav = styled.nav`
  background-color: #202329;
  display: flex;
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
  width: 550px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
border-radius: 40px;
padding: 7.5px;
font-size: medium;
width: 300px;
}
`;

export const Search = styled.button`
  background-color: #202329;
  color: #ffffff;
  border: none;
  border-radius: 40px;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #97ce4c;
  }
`;

export const Background = styled.div`
  background-color: #202329;
  color: #ffffff;
  margin: 15px;
  border-radius: 0.5rem;
  width: 300px;
`;

export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

export const Botao = styled.button`
  background-color: #ffffff;
  color: #202329;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  font-size: medium;
  cursor: pointer;
  &:hover {
    color: #97ce4c;
  }
`;

export const Error404 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

//Conteudo + Detalhes
export const Personagens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Alive = styled.p`
  height: 0.5rem;
  width: 0.5rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Dead = styled.p`
  height: 0.5rem;
  width: 0.5rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Unknown = styled.p`
  height: 0.5rem;
  width: 0.5rem;
  background: #878787;
  border-radius: 50%;
  margin-right: 10px;
`;

//Detalhes
export const BgDetalhes = styled.div`
  background-color: #202329;
  color: #ffffff;
  margin: 15px;
  border-radius: 0.5rem;
  margin-top: 60px;
  width: 30%;
`;

export const Fundo = styled.div`
background:url(${fundo});

`;

//Sobre
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
