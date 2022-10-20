import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  

  const [pageFlow, setPageFlow] = useState(1);

  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");

  const [imagemPost, setImagemPost] = useState("");
  const [tituloPost, setTituloPost] = useState("");
  const [descPost, setDescPost] = useState("");

  const[objetoHeader, setObjetoHeader]=useState("")
  const[objetoPost, setObjetoPost]=useState("")


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
          imagem={imagem}
          nome={nome}

          objetoHeader={objetoHeader}

          
          />
          {pageFlow === 1 ? (
            <FormularioLogin 
            setPageFlow={setPageFlow} 

            imagem={imagem}
            setImagem={setImagem}
            nome={nome}
            setNome={setNome}

            setObjetoHeader={setObjetoHeader}
            />
          ) : (
            <FormularioPostagem 
            imagemPost={imagemPost}
            setImagemPost={setImagemPost}
            tituloPost={tituloPost}
            setTituloPost={setTituloPost}
            descPost={descPost}
            setDescPost={setDescPost}

            setObjetoPost={setObjetoPost}
            />
          )}
        </aside>
        <TelaDaPostagem 
        imagemPost={imagemPost}
        tituloPost={tituloPost}
        descPost={descPost}

        objetoPost={objetoPost}
        />
      </Container>
    </>
  );
}

export default App;
