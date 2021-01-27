<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text-center {
  text-align: center;
}

.spacer {
  margin: 30vh;
}

.row {
  display: flex;
  padding: 0 30px;
}

.col-4 {
  width: 33.33%;
}

.user_icon {
  height: 80px;
  width: 80px;
  position: absolute;
  top: 30px;
  right: 50px;
}
</style>
