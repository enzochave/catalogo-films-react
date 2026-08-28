function List({ filmes }) {
    return (
        <main className="lista">

            <h2>Filmes cadastrados</h2>

            {filmes.length === 0 ? (
                <p className="vazio">
                    Nenhum filme cadastrado.
                </p>
            ) : (

                <div className="filmes">

                    {filmes.map((filme, index) => (

                        <div className="card" key={index}>

                            <img
                                className="capaFilme"
                                src={filme.capa}
                                alt={`Capa do filme ${filme.titulo}`}
                            />

                            <div className="informacoesFilme">

                                <h3>🎬 {filme.titulo}</h3>

                                <p>
                                    <strong>Diretor:</strong>{" "}
                                    {filme.diretor}
                                </p>

                                <p>
                                    <strong>Gênero:</strong>{" "}
                                    {filme.genero}
                                </p>

                                <p>
                                    <strong>Ano:</strong>{" "}
                                    {filme.ano}
                                </p>

                                <p>
                                    <strong>Duração:</strong>{" "}
                                    {filme.duracao} minutos
                                </p>

                            </div>

                        </div>

                    ))}

                </div>
            )}

        </main>
    );
}

export default List;