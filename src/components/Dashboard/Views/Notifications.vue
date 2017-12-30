<template>
  <!-- more infomation in http://vue-notification.yev.io/-->
  <div class="container-fluid dsb-notification">
    <div class="row">
      <div class="col-md-12">
        <card>
          <div slot="header" class="card-title">
            Notifications
            <p class='card-category'>
              🍦 Vue.js 2 library for showing notifications. Please checkout the full 
              <a href="https://github.com/euvl/vue-notification/blob/master/README.md">documentation</a>.
            </p>
          </div>
          <div slot="title">
            asd
          </div>
          <div slot="body">
            <div class="notification-container">
              <p>Default</p>
              <button class="success-btn" @click="success('default')">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                SUCCESS
              </button>
              <button class="warn-btn" @click="warn('default')">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                WARN
              </button>
              <button class="error-btn" @click="error('default')">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                ERROR
              </button>
            </div>

            <div class="notification-container">
              <p>Left Right</p>
              <button class="success-btn" @click="success('TR')">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                SUCCESS
              </button>
              <button class="warn-btn" @click="warn('TR')">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                WARN
              </button>
              <button class="error-btn" @click="error('TR')">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                ERROR
              </button>
            </div>

            <div class="notification-container">
              <p>Top Left</p>
              <button class="success-btn" @click="success('TL')">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                SUCCESS
              </button>
              <button class="warn-btn" @click="warn('TL')">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                WARN
              </button>
              <button class="error-btn" @click="error('TL')">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                ERROR
              </button>
            </div>

            <div class="notification-container">
              <p>Bottom Left</p>
              <button class="success-btn" @click="success('BR')">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                SUCCESS
              </button>
              <button class="warn-btn" @click="warn('BR')">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                WARN
              </button>
              <button class="error-btn" @click="error('BR')">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                ERROR
              </button>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
const notify = function (type, position) {
  this.$notify({
    // Name of the notification holder
    group: position,
    type: type,
    title: 'This is title',
    text: 'This is <b> content </b>',
    duration: 10000,
    speed: 1000
  })
}
export default {
  methods: {
    success (position) {
      notify.call(this, 'success', position)
    },
    warn (position) {
      notify.call(this, 'warn', position)
    },
    error (position) {
      notify.call(this, 'error', position)
    }
  }
}
</script>
