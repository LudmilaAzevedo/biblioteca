import { useEffect, useState } from 'react';
import {Column} from 'primereact/Column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import EmprestimoRequests from '../../fetch/EmprestimoRequests';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimo] = useState();

    const paginatorLeft = <Button type = "button" icon="pi pi-refresh" text/> 
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimo();
                setEmprestimo(listaDeEmprestimos);
                console.table(emprestimos);
            } catch (error) {
                console.error('Erro ao buscar emprestimos: ', error);
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);

    return(
        <>
        <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
    <Column field="nome" header="Nome do aluno"  body={(rowData) => rowData.aluno.nome} style={{ width: '25%' }}></Column>
    <Column field="titulo" header="Nome do livro" body={(rowData) => rowData.livro.titulo} style={{ width: '25%' }}></Column>
    <Column field="dataEmprestimo" header="Data emprestimo" style={{ width: '25%' }} body={(rowData) => new Date(rowData.dataNascimento).toLocaleDateString('pt-BR')} />
    <Column field="dataDevolucao" header="Data de devoulução" style={{ width: '25%' }} body={(rowData) => new Date(rowData.dataNascimento).toLocaleDateString('pt-BR')} />
    <Column field="statusEmprestimo" header="Status de emprestimo" style={{ width: '25%' }}></Column>
</DataTable>
        </>
    );

}

export default TabelaEmprestimo