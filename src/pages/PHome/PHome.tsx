import Cabecalho from "../../components/Cabecalho/cabecalho";
import Rodape from "../../components/Rodape/Rodape";
import Welcome from "../../components/Welcome/Welcome";

import TabelaAluno from "../../components/tabelas/tabelaAluno";
import TabelaEmprestimo from "../../components/tabelas/tabelaEmprestimo";
import TabelaLivro from "../../components/tabelas/tabelaLivro";

function PHome() {
    return (
        <>
        <Cabecalho/>
        <TabelaAluno/>
        <Rodape/>
        </>
    );
}

export default PHome