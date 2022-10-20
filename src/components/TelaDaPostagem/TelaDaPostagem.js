import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.objetoPost.titulo}</TitleHeader>
      <Image src={props.objetoPost.imagem} />
      <Description>{props.objetoPost.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
