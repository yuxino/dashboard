<template>
  <div class="dashboard-table">
    <table class="table-container" :class="{color: color}">
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