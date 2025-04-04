import { SERVER_CFG } from '../appConfig';

class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastraLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros'; // Rota configurada na API
        this.routeCadastraLivro = '/novo/livros'; // Rota configurada na API
        this.routeAtualizaLivro = '/atualiza/livros'; // Rota configurada na API
        this.routeRemoveLivro = '/remove/livros'; // Rota configurada na API
    }

    /**
     * Função que busca a lista de alunos na API
     * @returns Lista com os alunos cadastrados no sistema
     */
    async listarLivros() {
        try {
            // faz a requisição no servidor
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            // verifica se a resposta é bem sucedida
            if(respostaAPI.ok) {
                // converte a reposta para um JSON
                const listaDeLivros = await respostaAPI.json();
                // retorna a resposta
                return listaDeLivros;
            }
        } catch (error) {
            // exibe detalhes do erro no console
            console.error(`Erro ao fazer a consulta: ${error}`);
            // retorna um valor nulo
            return null;
        }
    }
}

export default new LivroRequests();