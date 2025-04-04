import { useEffect, useState } from 'react';
import {Column} from 'primereact/Column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import LivroRequests from '../../fetch/LivroRequests';

function TabelaLivro() {
    const [livros, setLivro] = useState();

    const paginatorLeft = <Button type = "button" icon="pi pi-refresh" text/> 
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivros();
                setLivro(listaDeLivros);
                console.table(livros);
            } catch (error) {
                console.error('Erro ao buscar livros: ', error);
            }
        };
        fetchLivros();
    }, [livros]);

    return(
        <>
        <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
    <Column field="titulo" header="Titulo" style={{ width: '25%' }}></Column>
    <Column field="autor" header="Autor" style={{ width: '25%' }}></Column>
    <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
    <Column field="isbn" header="Isbn" style={{ width: '25%' }}></Column>
    <Column field="valorAquisicao" header="Valor aquisição" style={{ width: '25%' }}></Column>
</DataTable>
        </>
    );

}

export default TabelaLivro