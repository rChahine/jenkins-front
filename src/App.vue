<template>
  <img class="user_icon" src="./assets/user_icon.png">
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   .user_icon {
     width: 80px;
     height: 80px;
     position: absolute;
     right: 50px;
     top: 30px;
   }
}
</style>
