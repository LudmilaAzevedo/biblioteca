import { useEffect, useState } from 'react';
import AlunoRequests from '../../fetch/alunoRequests';
import {Column} from 'primereact/Column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';

function TabelaAluno() {
    const [alunos, setAlunos] = useState();

    const paginatorLeft = <Button type = "button" icon="pi pi-refresh" text/> 
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos();
                setAlunos(listaDeAlunos);
                console.table(alunos);
            } catch (error) {
                console.error('Erro ao buscar alunos: ', error);
            }
        };
        fetchAlunos();
    }, [alunos]);

    return(
        <>
        <DataTable value={alunos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
    <Column field="nome" header="Nome" style={{ width: '25%' }}></Column>
    <Column field="sobrenome" header="Sobrenome" style={{ width: '25%' }}></Column>
    <Column field="endereco" header="Endereço" style={{ width: '25%' }}></Column>
    <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
    <Column field="dataNascimento" header="Data de nascimento" style={{ width: '25%' }} body={(rowData) => new Date(rowData.dataNascimento).toLocaleDateString('pt-BR')} />
    <Column field="celular" header="Celular" style={{ width: '25%' }}></Column>
</DataTable>
        </>
    );

}

export default TabelaAluno