<template>
  <v-app id="app">
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <div id="nav">
          <router-link to="/login">Login</router-link> |
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <v-snackbar v-model="toast" :top="true">
          {{toastMessage}}
        </v-snackbar>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      toast: false,
      toastMessage: ''
    }),
    created() {
      this.$bus.$on('toast', this.onToast)
    },
    methods: {
      onToast(message) {
        this.toast = true;
        this.toastMessage = message;
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-active {
        color: #42b983;
      }
    }
  }
</style>
