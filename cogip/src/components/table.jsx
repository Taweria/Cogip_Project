import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = () => {
    return (
        <DataTable tableStyle={{ maxWidth: '50%' }}>
            <Column field="" header="Invoice number"></Column>
            <Column field="" header="Dates due"></Column>
            <Column field="" header="Company"></Column>
            <Column field="" header="Created at"></Column>
        </DataTable>
    )
}

export default Table;