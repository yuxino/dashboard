<template>
  <card>
    <div slot="header" class="card-title">
      Edit Profile
    </div>
    <div slot="body" class="userCard">
      <form>
        <div class="row">
          <div class="col-md-5">
            <input-group type="text"
                          label="Company"
                          :disabled="true" 
                          v-model="company">
            </input-group>
          </div>
          <div class="col-md-4">
            <input-group type="text"
                        label="Username" 
                        placeholder="Username"
                        v-model="username">
            </input-group>
          </div>
          <div class="col-md-3">
            <input-group type="email"
                        label="Email" 
                        placeholder="Email"
                        v-model="email">
            </input-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <input-group type="text"
                        label="First Name" 
                        placeholder="First Name"
                        v-model="firstName">
            </input-group>
          </div>
          <div class="col-md-6">
            <input-group type="text"
                        label="Last Name" 
                        placeholder="Last Name"
                        v-model="lastName">
            </input-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <input-group type="text"
                        label="Address" 
                        placeholder="Home Address"
                        v-model="address">
            </input-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <input-group type="text"
                        label="City" 
                        placeholder="City"
                        v-model="city">
            </input-group>
          </div>
          <div class="col-md-4">
            <input-group type="text"
                        label="Country" 
                        placeholder="COUNTRY"
                        v-model="country">
            </input-group>
          </div>
          <div class="col-md-3">
            <input-group type="number"
                        label="Postal code" 
                        placeholder="ZIP Code"
                        v-model="zipCode">
            </input-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="input-group">
              <label>About Me</label>
              <textarea rows="5" placeholder="Here can be your description" v-model="about">
              </textarea>
            </div>
          </div>
        </div>
        <button class="userCard-btn"
                @click="updateProfile"
                type="submit">Update Profile
        </button>
      </form>
    </div>
  </card>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      company: 'Light Dashboard',
      username: 'Nbsaw',
      email: '',
      firstName: 'Garvin',
      lastName: 'Phang',
      address: 'Melbourne, Australia',
      city: 'melbourne',
      country: 'Australia',
      zipCode: '',
      about: 'Je le vois, mais je ne crois pas'
    }
  },
  methods: {
    updateProfile () {
      alert('Your data: ' + JSON.stringify(this.$data))
    }
  }
}
</script>