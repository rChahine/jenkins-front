<template>
  <div class="spacer"></div>
  <div class="row text-center">
    <div class="col-4 bg-primary card">
      <h2>Choix A</h2>
      <span>3 votes</span>
    </div>
    <div class="col-4 bg-success card">
      <h2>Choix B</h2>
      <span>5 votes</span>
    </div>
    <div class="col-4 bg-warning card">
      <h2>Choix C</h2>
      <span>2 votes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  padding: 10px;
  margin: 0 8vw;
  min-height: 14vh;
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

.bg-primary {
  background-color: skyblue;
}

.bg-success {
  background-color: green;
}

.bg-warning {
  background-color: yellow;
}

.mt-4 {
  margin-top: 20vh;
}
</style>
