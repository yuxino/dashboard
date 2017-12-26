<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <div slot="header" class="card-title">
              Edit Profile
            </div>
            <div slot="body">
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
                <div class="btn-container">
                  <button class="btn" @click="updateProfile" type="submit">Update Profile</button>
                </div>
              </form>
            </div>
          </card>
        </div>
        <div class="col-md-4">
          <card>
            <img slot="image" src="/static/img/bg.jpg" alt="wife">
            <div slot="body" class="author">
              <img src="/static/img/logo.png" alt="background">
              <h4>
                <a href="">Mike Andrew</a>
                <br />
                <small>nbsaw</small>
              </h4>
              <p class="description">
                "Lamborghini Mercy <br/>
                Your chick she so thirsty<br/>
                I'm in that two seat Lambo"<br/>
              </p>
            </div>
            <div slot="footer">
              Find me in this socical
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User-Profile',
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


<style lang="scss">
  .btn-container {
    &::after{
      content: "";
      clear: both;
      display: block;
    }
    .btn {
      padding: 10px;
      outline: none;
      color: #fff;
      background: #1dc7ea;
      border: 1px solid #1dc7ea;
      border-radius: 3px;
      font-size: 15px;
      line-height: 1.5;
      cursor: pointer;
      float: right;
      &:hover{
        background-color: #42d0ed;
      }
    }
  }

  .author {
    text-align: center;
    text-transform: none;
    margin-top: -70px;
    img {
      width: 124px;
      height: 124px;
      border: 5px solid #eee;
      border-radius: 50%;
    }
    .description{
      font-size: 14px;
      color: #333;
    }
  }

</style>
