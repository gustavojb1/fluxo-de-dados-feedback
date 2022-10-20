import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";


const FormularioLogin = (props) => {


  const login = () => {
    

    props.setPageFlow(2);

    const objetoHeader={
      name:props.nome,
      imagem:props.imagem
    };

    props.setObjetoHeader(objetoHeader)
  };

  const onChangeImagem = (event) => {
    // console.log("onchange",event.target.value);
    props.setImagem(event.target.value);
  };
  const onChangeNome = (event) => {
    // console.log("descricao", event.target.value);
    props.setNome(event.target.value);
  };


  


  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} 
          onChange={onChangeNome} value={props.nome}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} 
          onChange={onChangeImagem} value={props.imagem}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
