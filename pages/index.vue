<template>
  <div class="container">
    <div>
      <logo></logo>
      <h1>
        nuxt-express-now
      </h1>
      <h2>
        You are on {{ app_env }}
      </h2>
      <h3>NODE ENV: {{ node_env }}</h3>
      <h3>API URL: {{ apiURL }}</h3>
      <div class="links">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">
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
      apiURL: process.env.API_URL
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
