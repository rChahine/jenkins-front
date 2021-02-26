<template>
  <router-link to="/login"><img class="user_icon" src="../assets/user_icon.png"></router-link>
  <div class="spacer"></div>

  <div class="container">
    <div class="row" id="row-votes">
      <div class="col-3" v-for="(c, index) in choices" :key="c.choice.id">
        <div class="card" :class="getRandomColor(index)" style="min-width: 10rem;" @click="vote(c.choice.id, c.choosen)">
          <h2>{{ c.choice.wording }}</h2>
          <span class="mb-2">{{ c.nb_vote }} vote(s)</span>
          <span v-if="c.choosen">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg>
          </span>
        </div>        
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'DashboardUser',
  data: function() {
    return {
      choices: [],
      colors: ['danger', 'warning', 'info', 'success', 'light', 'primary']
    }
  },

  methods: {
    async fetchVote() {
      await axios.get(`${process.env.VUE_APP_API_URL}/choices_connected`, { headers: { Authorization: localStorage.getItem("token") }}).then(({ data }) => this.choices = data)
    },

    getRandomColor(index) {
      const color = this.colors[index]
     
      return `bg-${color}`
    },

    async vote(id, clicked = false) {
      
      if(!clicked) {
        await axios.put(`${process.env.VUE_APP_API_URL}/vote/${id}`, {}, { headers: { Authorization: localStorage.getItem("token") }})
          .then(({data}) => {
              if(data.detail === "Vote added") {
                  this.choices.forEach((c) => {
                    if(c.choice.id === id) {
                      c.nb_vote += 1;
                      c.choosen = true
                    }
                  })
              } else {
                  this.error = "Une erreur s'est produite"
              }
          })
          .catch()
      } else {
        await axios.delete(`${process.env.VUE_APP_API_URL}/vote/${id}`, { headers: { Authorization: localStorage.getItem("token") }})
          .then(({data}) => {
              if(data.detail === "Vote deleted") {
                this.choices.forEach((c) => {
                  if(c.choice.id === id) {
                    c.choosen = false;
                    c.nb_vote -= 1;
                  }
                })
              }
              else {
                this.error = "Une erreur s'est produite"
              }
          })
          .catch()
      }
    }
  },

  created() {
    this.fetchVote()
  }
}
</script>
