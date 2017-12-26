<template>
  <div class="table-container">
    <table class="dashboard-table" :class="{color: color}">
      <thead>
        <th :key="index" v-for="(title,index) in titles">{{ title }}</th>
      </thead>
      <tbody>
        <tr :key="index" v-for="(col,index) in data">
          <td :key="index" v-for="(row, index) in col">
              {{ row }}
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Table',
  props: {
    color: { type: Boolean, default: false },
    titles: { type: Array, default: [] },
    data: { type: Array, default: [[]] }
  }
}
</script>

<style lang="scss">
  .table-container {
    overflow-y: hidden;
    overflow-x: auto;
     .dashboard-table {
      border-collapse: collapse;
      width: 100%;
      border-spacing: 2px;
      border-color: grey;

      thead {
        text-align: left;
        border-top: 1px solid #e9ecef;
      }

      tr {
        border-top: 1px solid #e9ecef;
        &:hover{
          background-color: rgba(0, 0, 0, 0.075);
        }
      }

      &.color {
        tr {
          &:nth-child(even){
          background-color: rgba(0, 0, 0, 0.05);
          }
          &:nth-child(even){
            background-color: rgba(0, 0, 0, 0.05);
          }
        }
      }

      th, td {
        padding: 0.75rem;
      }
    }
  }
 
</style>
