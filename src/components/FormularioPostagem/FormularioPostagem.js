import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const enviar = () => {

    const objetoPost={
      titulo:props.tituloPost,
      imagem:props.imagemPost,
      descricao:props.descPost
    };

    props.setObjetoPost(objetoPost)
  };


  const onChangeTituloPost = (event) => {
    props.setTituloPost(event.target.value);
  };


  const onChangeImagemPost = (event) => {
    props.setImagemPost(event.target.value);
  };

  const onChangeDescPost = (event) => {
    props.setDescPost(event.target.value);
  };


  

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" 
          onChange={onChangeTituloPost} value={props.tituloPost}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" 
          onChange={onChangeImagemPost} value={props.imagemPost}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" 
          onChange={onChangeDescPost} value={props.descPost}/>
        </StyledLabel>
        <SendButton onClick={enviar}/>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
