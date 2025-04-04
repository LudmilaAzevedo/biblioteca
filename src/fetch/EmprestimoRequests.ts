import { SERVER_CFG } from '../appConfig';

class EmprestimoRequests {

    private serverURL;
    private routeListaEmprestimo;
    private routeCadastraEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimos'; // Rota configurada na API
        this.routeCadastraEmprestimo = '/novo/emprestimo'; // Rota configurada na API
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo'; // Rota configurada na API
        this.routeRemoveEmprestimo = '/remove/emprestimo'; // Rota configurada na API
    }

    /**
     * Função que busca a lista de alunos na API
     * @returns Lista com os alunos cadastrados no sistema
     */
    async listarEmprestimo() {
        try {
            // faz a requisição no servidor
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            // verifica se a resposta é bem sucedida
            if(respostaAPI.ok) {
                // converte a reposta para um JSON
                const listaDeEmprestimo = await respostaAPI.json();
                // retorna a resposta
                return listaDeEmprestimo;
            }
        } catch (error) {
            // exibe detalhes do erro no console
            console.error(`Erro ao fazer a consulta: ${error}`);
            // retorna um valor nulo
            return null;
        }
    }
}

export default new EmprestimoRequests();