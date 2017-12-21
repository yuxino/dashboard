<template>
  <div class="overview">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6" v-for="i in 4">
          <card>
            <div slot="body" class="row">
              <div class="col-5 overview-icon-container">
                <i class="nc-icon nc-chart warn overview-icon"></i>
              </div>
              <div class="col-7">
                <div class="card-number">
                  <p class="card-category">
                    Capacity
                  </p>
                  <p class="card-title">
                    105GB
                  </p>
                </div>
              </div>
            </div>
            <div slot="footer">
              Updated now
            </div>
          </card>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-md-8">
          8
        </div>
        <div class="col-md-2">
          2
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          6
        </div>
        <div class="col-md-6">
          6
        </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Overview extends Vue {
  
}
</script>


<style lang="scss">
  .overview {
    
    .overview-icon-container {
      text-align: center;
    }
    
    .overview-icon {
      font-size: 47px;
      line-height: 60px;
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
      font-size: 22px;
      color: #545454;
    }
  }
</style>
