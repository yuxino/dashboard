<template>
  <footer class="content-footer">
    <div class="container-fluid">
      <router-link class="content-footer-link" to="/admin">Dashboard</router-link>
      <div class="copyright">
        © Coded with ❤ by <a href="https://github.com/Nbsaw">nbsaw</a>. 
        Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs">Creative Tim</a>.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContentFooter'
}
</script>

<style lang="scss">
  .content-footer {
    background: #ffffff;
    min-height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding: 0 15px;  

    .content-footer-link {
      color: #9A9A9A;
      text-decoration: none;
    }
    
    .copyright {
      float: right;
      color: #777777;
    }

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  @media only screen and (max-width: 768px){
    .content-footer {
      .copyright{
        float: none;
      }
    }
  }
</style>
