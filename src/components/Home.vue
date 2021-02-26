<template>
  <router-link to="/login"><img class="user_icon" src="../assets/user_icon.png"></router-link>
  <div class="spacer"></div>

  <div class="container">
    <div class="row">
      <div class="col-3" v-for="(c, index) in choices" :key="c.choice.id">
        <div class="card" :class="getRandomColor(index)" style="min-width: 10rem;">
          <h2>{{ c.choice.wording }}</h2>
          <span class="mb-2">{{ c.nb_vote }} vote(s)</span>
        </div>        
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data: function() {
    return {
      choices: [],
      colors: ['danger', 'warning', 'info', 'success', 'light', 'primary']
    }
  },

  methods: {
    async fetchVote() {
      await axios.get(`${process.env.VUE_APP_API_URL}/choices`).then(({ data }) => this.choices = data)
    },

    getRandomColor(index) {
      const color = this.colors[index]
     
      return `bg-${color}`
    }
  },

  created() {
    this.fetchVote()
  }
}
</script>
