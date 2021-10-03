import {SvelteComponentTyped} from "svelte";
// import {} from "ag-grid-community"

interface AgGridProps {
    columnDefs: any;
    data: any;
    theme?: string;
    options?: any;
    loading?: boolean;
}

export class AgGrid extends SvelteComponentTyped<AgGridProps>{};