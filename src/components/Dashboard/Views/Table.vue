<template>
  <div>
    <card>
      <div slot="header" class="card-title">
        Striped Table with Hover
        <p class="card-category">Here is a subtitle for this table</p>
      </div>
      <d-table slot="body" :color="true" :titles="titles" :data="data"></d-table>
    </card>

    <card class="card-plain">
      <div slot="header" class="card-title">
        Striped Table with Hover
        <p class="card-category">Here is a subtitle for this table</p>
      </div>
      <d-table slot="body" :titles="titles" :data="data"></d-table>
    </card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Table extends Vue {
  titles = ['Id', 'Name', 'Salary	', 'Country', 'City'];
  data =  [
    [1, 'Dakota Rice', '$36.738', 'Niger', 'Oud-Turnhout'],
    [2, 'Minerva Hooper', '$23,789', 'Curaçao', '	Sinaai-Waas'],
    [3, 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
    [4, 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
    [5, 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'],
    [6, 'ALan fuck', '$45,123', 'Fuckkkk', 'Fuckkkkkk']
  ];
}
</script>
