<template>
  <div>
    <div v-if="me.role == 'A'">
      <DashboardAdmin />
    </div>
    <div v-if="me.role == 'U'">
      <DashboardUser />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DashboardAdmin from "./DasboardAdmin";
import DashboardUser from "./DasboardUser";

export default {
  name: "Dashboard",
  components: { DashboardAdmin, DashboardUser },
  data: function () {
    return {
      me: {},
      error: "",
    };
  },
  methods: {
    async getMe() {
      await axios
        .get(`${process.env.VUE_APP_API_URL}/user/me`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(({ data }) => {
          this.me = {
            id: data.id,
            role: data.role,
            username: data.username,
          };
        })
        .catch(() => this.$router.push("/"));
    },
  },
  created() {
    this.getMe();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
