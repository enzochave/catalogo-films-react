function Header({ onAdicionar }) {
    return (
        <header className="header">
            <h1>🎬 Cadastro de Filmes</h1>

            <button
                className="botaoAdicionar"
                onClick={onAdicionar}
            >
                +
            </button>
        </header>
    );
}

export default Header;