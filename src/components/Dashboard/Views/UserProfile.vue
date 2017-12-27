<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <user-info></user-info>
        </div>
        <div class="col-md-4">
          <user-card></user-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from './UserProfile/Userinfo'
import UserCard from './UserProfile/UserCard'

export default {
  name: 'UserProfile',
  components: { UserInfo, UserCard }
}
</script>