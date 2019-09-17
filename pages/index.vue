<template>
  <div class="container">
    <div>
      <logo></logo>
      <h1 class="header">
        nuxt-express-now
      </h1>
      <p>Demo project for automated Nuxt.js + Express deployment to Now via Github actions</p>
      <h2>
        You are on this APP_ENV:  <b>{{ app_env }}</b>
      </h2>
      <p>NODE ENV: {{ node_env }}</p>
      <p>API URL: {{ apiURL }}</p>
      <p>APP Version: {{ appVersion }}</p>
      <p>See this URL to check Node response: <a href="/api/users">/api/users</a></p>
      <div class="links">
        <a
          href="https://github.com/msurguy/nuxt-express-now"
          target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      node_env: process.env.NODE_ENV,
      app_env: process.env.APP_ENV,
      apiURL: process.env.API_URL,
      appVersion: process.env.appVersion
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin-top: 20px;
    text-align: left;
  }

  p {
    margin-top: 10px;
    text-align: left;
  }

  a {
    color: $blue;
  }
}

.header {
  margin-top: 30px;
  margin-bottom: 30px;
}

.links {
  padding-top: 15px;
}
</style>
