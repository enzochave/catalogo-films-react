import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Add from "./components/Add";

function App() {
    const [telaCadastro, setTelaCadastro] = useState(false);
    const [filmes, setFilmes] = useState([]);

    function abrirCadastro() {
        setTelaCadastro(true);
    }

    function voltarLista() {
        setTelaCadastro(false);
    }

    function cadastrarFilme(filme) {
        setFilmes([...filmes, filme]);
        setTelaCadastro(false);
    }

    return (
        <div className="app">
            {telaCadastro ? (
                <Add
                    onCadastrar={cadastrarFilme}
                    onVoltar={voltarLista}
                />
            ) : (
                <>
                    <Header onAdicionar={abrirCadastro} />

                    <List filmes={filmes} />
                </>
            )}
        </div>
    );
}

export default App;