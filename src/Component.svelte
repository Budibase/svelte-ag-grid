<script>
  import { Grid } from "@ag-grid-community/all-modules";
  import { onMount } from "svelte";

  export let columnDefs;
  export let data;
  export let options = {
    columnDefs,
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      filter: true,
    },
    rowData: data,
  };

  let ref;
  let grid;
  let api;

  const onCellValueChanged = (e) => {
    data[e.rowIndex] = e.data;
  };

  const onGridReady = () => {
    api = grid.gridOptions.api;
  };

  const updateData = (data) => {
    if (grid && api) {
      api.setRowData(data);
    }
  };

  onMount(() => {
    grid = new Grid(ref, { ...options, onGridReady, onCellValueChanged });
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
  <link
    rel="stylesheet"
    href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css" />
  <link
    rel="stylesheet"
    href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css" />
</svelte:head>
<div class="container">
  <div
    bind:this={ref}
    style="height: 100%; width:100%"
    class="ag-theme-alpine" />
</div>
