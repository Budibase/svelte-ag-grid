<script>
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { Grid } from "ag-grid-community";
  import "ag-grid-community/dist/styles/ag-grid.css";
  import "ag-grid-community/dist/styles/ag-theme-alpine.css";

  const dispatch = createEventDispatcher();

  export let columnDefs;
  export let data;
  export let theme = "alpine";
  export let options = {
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      filter: true,
    },
    suppressFieldDotNotation: true,
    rowSelection: "multiple",
  };
  export let loading = false;

  let themeUrl = `https://unpkg.com/ag-grid-community/dist/styles/ag-theme-${theme}.css`;
  let ref;
  let grid;
  let api;

  const onSelectionChanged = () => {
    const selectedRows = api.getSelectedRows();
    dispatch("select", selectedRows);
  };

  const onCellValueChanged = (e) => {
    data[e.rowIndex] = e.data;
    dispatch("update", { row: e.rowIndex, data: e.data });
  };

  const onGridReady = () => {
    api = grid.gridOptions.api;
    if (loading) api.showLoadingOverlay();
  };

  const updateData = (data) => {
    if (grid && api) {
      api.setRowData(data);
      api.setColumnDefs(columnDefs);
    }
  };

  onMount(() => {
    grid = new Grid(ref, {
      ...options,
      columnDefs,
      rowData: data,
      onGridReady,
      onCellValueChanged,
      onSelectionChanged,
    });
  });

  onDestroy(() => {
    if (grid) {
      grid.destroy();
    }
  });

  $: updateData(data);
</script>

<style>
  .container {
    width: 100%;
    height: var(--grid-height, 800px);
  }
</style>

<svelte:head>
  {#if theme !== "alpine" && !Object.values(document.styleSheets).some((styleSheet) => styleSheet.href === themeUrl)}
    <link
      rel="stylesheet"
      href={themeUrl} />
  {/if}
</svelte:head>
<div class="container">
  <div
    bind:this={ref}
    style="height: 100%; width:100%"
    class="ag-theme-{theme}" />
</div>
