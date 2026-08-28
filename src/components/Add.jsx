import { useState } from "react";

function Add({ onCadastrar, onVoltar }) {

    const [titulo, setTitulo] = useState("");
    const [diretor, setDiretor] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [capa, setCapa] = useState("");

    function cadastrar(e) {
        e.preventDefault();

        if (!titulo || !diretor || !genero || !ano || !duracao || !capa) {
            alert("Preencha todos os campos!");
            return;
        }

        const filme = {
            titulo,
            diretor,
            genero,
            ano,
            duracao,
            capa
        };

        onCadastrar(filme);

        setTitulo("");
        setDiretor("");
        setGenero("");
        setAno("");
        setDuracao("");
        setCapa("");
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

                <h2>Cadastrar filme</h2>
            </div>

            <form onSubmit={cadastrar}>

                <label>Título do filme</label>

                <input
                    type="text"
                    placeholder="Ex: Homem-Aranha"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <label>Diretor</label>

                <input
                    type="text"
                    placeholder="Nome do diretor"
                    value={diretor}
                    onChange={(e) => setDiretor(e.target.value)}
                />

                <label>Gênero</label>

                <input
                    type="text"
                    placeholder="Ex: Ação"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                />

                <label>Ano de lançamento</label>

                <input
                    type="number"
                    placeholder="Ex: 2025"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />

                <label>Duração</label>

                <input
                    type="number"
                    placeholder="Ex: 120"
                    value={duracao}
                    onChange={(e) => setDuracao(e.target.value)}
                />

                <label>URL da capa</label>

                <input
                    type="url"
                    placeholder="https://exemplo.com/capa.jpg"
                    value={capa}
                    onChange={(e) => setCapa(e.target.value)}
                />

                {capa && (
                    <div className="previewCapa">
                        <p>Prévia da capa:</p>

                        <img
                            src={capa}
                            alt="Prévia da capa"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="botaoCadastrar"
                >
                    Cadastrar filme
                </button>

            </form>

        </main>
    );
}

export default Add;