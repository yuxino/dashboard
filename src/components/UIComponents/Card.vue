<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <hr />
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  
};
</script>

<style lang="scss">
  .card {
    margin-bottom: 30px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-header {
    padding: 10px 15px 0 15px;
  }

  .card-number {
    text-align: right;
  }

  .card-category {
    margin: 0 0 5px 0;
    font-size: 14px;
    font-weight: 400;
    color: #9A9A9A;
  }

  .card-title {
    margin: 0px;
    font-size: 21px;
    line-height: 30px;
    color:#636363;
  }

  .card-body {
    padding: 15px 15px 10px 15px;
  }

  .card-footer {
    padding: 0px 15px 10px 15px;
    color: #a9a9a9;
    font-size: 14px;
    line-height: 1.5;
    hr {
      margin-top: 5px;
      margin-bottom: 10px;
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
</style>
