<template>
  <Header :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
  <router-view/>
  </div>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import firebase from './utils/firebase'

export default {
  components: { Header, LoginModal },

  data () {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    }
  },

  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true
        this.authUser = user
      } else {
        this.isLoggedIn = false
        this.authUser = {}
      }
    })
  }
}
</script>

<style>
</style>
