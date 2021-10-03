import { SvelteComponent } from "svelte";

/* TODO: Use when updated to Svelte ^3.31.0 with SvelteComponentTyped */
/**
 * import { ColDef, GridOptions } from "ag-grid-community"
 *
 * interface AgGridProps {
 *  columnDefs: ColDef;
 *  data: any;
 *  theme?: string;
 *  options?: GridOptions;
 *  loading?: boolean;
 * }
 *
 * declare class AgGridComponent extends SvelteComponentTyped<AgGridProps> {}
*/

declare class AgGridComponent extends SvelteComponent { }

export default AgGridComponent;

