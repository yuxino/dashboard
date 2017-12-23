<template>
  <div class="overview">
    <div class="container-fluid">
      <!--Top-->
      <div class="row">
        <div class="col-xl-3 col-md-6" :key="index" v-for="(icon,index) in icons">
          <card>
            <div slot="body" class="row">
              <div class="col-5 overview-icon-container">
                <i class="nc-icon overview-icon" :class="[icon.color, icon.icon]"></i>
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
      <!--Middle-->
       <div class="row">
        <div class="col-md-8">
          <card>
            <div slot="header" class="card-title">
              User Access
              <p class="card-category">
                24 Hours performance
              </p>
            </div>
            <div slot="body">
             <canvas id="Users-Behavior"></canvas>
            </div>
            <div slot="footer">
              Updated now
            </div>
          </card>
        </div>
        <div class="col-md-4">
          <card>
            <div slot="header" class="card-title">
              Mode of payment
              <p class="card-category">
                Customer payment method
              </p>
            </div>
            <div slot="body">
             <canvas id="Today-Revenue"></canvas>
            </div>
            <div slot="footer">
              Updated now
            </div>
          </card>
        </div>
      </div> 
      <!--Bottom-->
      <div class="row">
        <div class="col-md-6">
          <card>
            <div slot="header" class="card-title">
              2017 Sales
              <p class="card-category">
                All products including Taxes
              </p>
            </div>
            <div slot="body">
             <canvas id="Sales"></canvas>
            </div>
            <div slot="footer">
              Updated now
            </div>
          </card>
        </div>
        <div class="col-md-6">
          <card>
            <div slot="header">
              Todo items
              <p class="card-category" style="margin: 5px 0">
                Please finish that in this week
              </p>
            </div>
            <div slot="body">
              1. Fuck
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Chart } from 'chart.js';

@Component
export default class Overview extends Vue {
  icons = [
      {
        icon: 'nc-chart',
        color: 'warn '
      },
      {
        icon: 'nc-light-3',
        color: 'info'
      },
      {
        icon: 'nc-vector',
        color: 'error'
      },
      {
        icon: 'nc-favourite-28',
        color: 'primary'
      }
  ];
  mounted () {
    let height = 350;
    let ctx = document.getElementById('Users-Behavior') as HTMLCanvasElement;
    ctx.height = height;
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ['09:00 AM', '12:00 AM', '03:00 PM', '06:00 PM', '09:00 PM', '12:00PM', '03:00AM', '06:00 AM'],
            datasets: [{
              label: 'PC',
              backgroundColor: 'rgb(255, 99, 132)',
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              lineTension: 0,
              data: [60, 200, 50, 120, 150, 320, 415, 18],
            },
            {
              label: 'Mobile',
              backgroundColor: '#1DC7EA',
              fill: false,
              borderColor: '#1DC7EA',
              lineTension: 0,
              data: [160, 280, 90, 20, 362, 120, 315, 59],
            },
            {
              label: 'Tablet',
              backgroundColor: '#ffa534',
              fill: false,
              borderColor: '#ffa534',
              lineTension: 0,
              data: [310, 130, 45, 80, 110, 120, 315, 99],
            }]
        },
        // Configuration options go here
        options: {
           legend: {
            labels: {
              boxWidth: 30
            },
            position: 'bottom'
           }, 
          maintainAspectRatio: false
        }
    });

    let ct = document.getElementById('Today-Revenue') as HTMLCanvasElement;
    ct.height = height;
    new Chart(ct, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [15, 20, 30, 40],
            backgroundColor: ['rgb(0, 205, 12)', 'rgb(0, 158, 259)', 'rgb(241, 157, 23)', 'rgb(83, 192, 218)']
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'WeChat',
            'AliPay',
            'Visa',
            'PayPal'
          ]
        },
        options: {
          legend: {
            labels: {
              boxWidth: 25,
            },
            position: 'bottom'
           },
          maintainAspectRatio: false          
        }
    });

    let sales = document.getElementById('Sales') as HTMLCanvasElement;
    sales.height = height;
    new Chart(sales, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Armstrong artillery',
              data: [120, 50, 90, 300, 60, 90, 75, 421, 123, 512, 123, 120],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
          },
          {
              label: 'Just we',
              data: [561, 68, 456, 123, 412, 110, 62, 123, 484, 78, 325],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
        },
        options: {
          legend: {
            labels: {
              boxWidth: 25,
            },
            position: 'bottom'
           },
          maintainAspectRatio: false          
        }
    });
  }
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
  }
</style>
