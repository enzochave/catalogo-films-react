import { useState } from "react";

function Add({ onCadastrar, onVoltar }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState("");

    function cadastrar(e) {
        e.preventDefault();

        if (!nome || !email || !curso || !idade || !cidade) {
            alert("Preencha todos os campos!");
            return;
        }

        const pessoa = {
            nome,
            email,
            curso,
            idade,
            cidade
        };

        onCadastrar(pessoa);

        setNome("");
        setEmail("");
        setCurso("");
        setIdade("");
        setCidade("");
    }

    return (
        <main className="cadastro">

            <div className="cadastroHeader">
                <button
                    className="botaoVoltar"
                    onClick={onVoltar}
                >
                    ←
                </button>

                <h2>Cadastrar</h2>
            </div>

            <form onSubmit={cadastrar}>

                <label>Nome</label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Curso</label>
                <input
                    type="text"
                    placeholder="Digite seu curso"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                />

                <label>Idade</label>
                <input
                    type="number"
                    placeholder="Digite sua idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />

                <label>Cidade</label>
                <input
                    type="text"
                    placeholder="Digite sua cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />

                <button
                    type="submit"
                    className="botaoCadastrar"
                >
                    Cadastrar
                </button>

            </form>
        </main>
    );
}

export default Add;