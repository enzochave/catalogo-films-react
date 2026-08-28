function List({ pessoas }) {
    return (
        <main className="lista">
            <h2>Cadastros</h2>

            {pessoas.length === 0 ? (
                <p className="vazio">
                    Nenhum cadastro realizado.
                </p>
            ) : (
                pessoas.map((pessoa, index) => (
                    <div className="card" key={index}>
                        <h3>{pessoa.nome}</h3>

                        <p>
                            <strong>Email:</strong> {pessoa.email}
                        </p>

                        <p>
                            <strong>Curso:</strong> {pessoa.curso}
                        </p>

                        <p>
                            <strong>Idade:</strong> {pessoa.idade}
                        </p>

                        <p>
                            <strong>Cidade:</strong> {pessoa.cidade}
                        </p>
                    </div>
                ))
            )}
        </main>
    );
}

export default List;