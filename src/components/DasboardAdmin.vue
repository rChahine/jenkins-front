<template>
  <router-link to="/login"><img class="user_icon" src="../assets/user_icon.png"></router-link>
  <div class="spacer"></div>
  <div class="container">
      <div class="row">
          <div class="col-6">
                <h2> Ajouter un utilisateur </h2>

                <form @submit.prevent="createUser()">
                    <div class="mb-3">
                        <label for="role" class="form-label">Rôle (A pour administrateur, U pour user)</label>
                        <input type="text" id="role" class="form-control" v-model="newUser.role" required>
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">login</label>
                        <input type="text" id="username" class="form-control" v-model="newUser.username" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" id="password" class="form-control" v-model="newUser.password" required>
                    </div>
                    <button type="submit"> Créer l'utilisateur </button>
                </form>
          </div>
          <div class="col-6">
              <h2> Ajouter un choix </h2>

                <form @submit.prevent="createChoice()">
                    <div class="mb-3">
                        <label for="newChoice" class="form-label">libelle</label>
                        <input type="text" id="newChoice" class="form-control" v-model="newChoice" required>
                    </div>
                    
                    <button type="submit"> Ajouter le choix </button>
                </form>
            <br />  
                <h2 v-if="choices">Supprimer un choix</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <td>Libelle</td>
                            <td>Nombre de votes</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>                    
                        <tr v-for="(c, index) in choices" :key="c.choice.id">
                            <td>{{ c.choice.wording }}</td>
                            <td>{{ c.nb_vote }}</td>
                            <td @click="deleteChoice(c.choice.id, index)" style="color: red; cursor: pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Supprimer</td>
                        </tr>
                    </tbody>
                </table>
          </div>
      </div>

      <div class="row">
          <div class="col">
              <div class="alert alert-danger" v-if="error !== ''">{{ error }}</div>
              <div class="alert alert-success" v-if="success !== ''">{{ success }}</div>
          </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'DashboardAdmin',
  data: function() {
    return {
        choices: [],
        newUser: {},
        newChoice: "",
        success: "",
        error: ""
    }
  },
  methods: {
    /**
     * Create a user in database
     */
    async createUser() {

        await axios.post(`${process.env.VUE_APP_API_URL}/user`, {
                role: this.newUser.role,
                username: this.newUser.username,
                password: this.newUser.password
            }, 
            { headers: { Authorization: localStorage.getItem("token") }}
        )
            .then(({data}) => {
                if(data.detail === "User added") {
                    this.success = "Utilisateur ajouté"
                } else {
                    this.error = "Une erreur s'est produite"
                }
            })
            .catch(() => this.error = "Une erreur s'est produite")
    },

    /**
     * Create a new choice in database
     */
    async createChoice() {
        await axios.post(`${process.env.VUE_APP_API_URL}/choices`, 
            { wording: this.newChoice },
            { headers: { Authorization: localStorage.getItem("token") }}
        )
            .then(({data}) => {
                if(data.detail === "Choice added") {
                    this.success = "Choix ajouté"
                    const min = Math.ceil(100);
                    const max = Math.floor(1000);
                    const id = Math.floor(Math.random() * (max - min +1)) + min;

                    this.choices.push({choice: {wording: this.newChoice, id: id}, nb_vote: 0})
                } else {
                    this.error = "Une erreur s'est produite"
                }
            })
            .catch(() => this.error = "Une erreur s'est produite")
    },

    async deleteChoice(id, index) {
        await axios.delete(`${process.env.VUE_APP_API_URL}/choices/${id}`, { headers: { Authorization: localStorage.getItem("token") }})
            .then(({data}) => {
                if(data.detail === "Choice deleted") {
                    this.success = "Choix supprimé"
                    this.choices.splice(index, 1)
                } else {
                    this.error = "Une erreur s'est produite"
                }
            })
            .catch()
    },

    /**
     * Fetch existing choices
     */
    async fetchVote() {
      await axios.get(`${process.env.VUE_APP_API_URL}/choices`).then(({data}) => this.choices = data)
    }
  },

  created() {
      this.fetchVote()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
