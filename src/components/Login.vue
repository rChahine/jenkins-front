<template>
  <div class="spacer"></div>
  <label for="username">Nom de compte</label><br/>
  <input type="text" name="username" id="username" v-model="username" required><br/>
  <label for="password">Mot de passe</label><br/>
  <input type="password" name="password" id="password" v-model="password" required><br/>
  <button @click="send()"> Connexion </button>
  <br />
  <div class="alert alert-danger" v-if="error != ''">
    {{ error }}
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'Login',
  data: function() {
    return {
      username: "",
      password: "",
      error: ""
    }
  },
  methods: {
    async send() {
      await axios.post(`${process.env.VUE_APP_API_URL}/authentication/login`, {
        login: this.username,
        password: this.password
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.$router.push("/dashboard")
        })
        .catch(() => this.error = "Login ou mot de passe incorrect")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
