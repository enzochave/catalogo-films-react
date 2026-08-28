import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Add from "./components/Add";

function App() {

    const [telaCadastro, setTelaCadastro] = useState(false);

    const [pessoas, setPessoas] = useState([]);

    function abrirCadastro() {
        setTelaCadastro(true);
    }

    function voltarLista() {
        setTelaCadastro(false);
    }

    function cadastrarPessoa(pessoa) {
        setPessoas([...pessoas, pessoa]);

        setTelaCadastro(false);
    }

    return (
        <div className="app">

            {telaCadastro ? (
                <Add
                    onCadastrar={cadastrarPessoa}
                    onVoltar={voltarLista}
                />
            ) : (
                <>
                    <Header
                        onAdicionar={abrirCadastro}
                    />

                    <List
                        pessoas={pessoas}
                    />
                </>
            )}

        </div>
    );
}

export default App;