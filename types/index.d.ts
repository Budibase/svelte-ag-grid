import { SvelteComponentTyped } from "svelte";
import { ColDef, GridOptions } from "ag-grid-community"

interface AgGridProps {
  columnDefs: ColDef;
  data: any;
  theme?: string;
  options?: GridOptions;
  loading?: boolean;
}

declare class AgGridComponent extends SvelteComponentTyped<AgGridProps> { }


export default AgGridComponent;

