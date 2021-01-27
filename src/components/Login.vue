<template>
  <div class="spacer"></div>
  <label for="username">Nom de compte</label><br/>
  <input type="text" name="username" id="username" required><br/>
  <label for="password">Mot de passe</label><br/>
  <input type="text" name="password" id="password" required><br/>
  <router-link to="/">Valider</router-link>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
