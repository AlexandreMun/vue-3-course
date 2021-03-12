<template>
  <Header />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal />
  </teleport>
</template>

<script>
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import firebase from './utils/firebase'

export default {
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn', true)
        this.$store.commit('setLoginModal', false)
        this.$store.commit('setAuthUser', user)
      } else {
        this.$store.commit('setIsLoggedIn', false)
        this.$store.commit('setAuthUser', {})
      }
    })
  },
  components: { Header, LoginModal }
}
</script>

<style></style>
