<template>
  <nav class="w-full bg-green-600 text-white px-4 py-3 text-lg">
    <router-link class="md:hidden" to="/">Home</router-link>
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2 hidden md:inline-block"
      :to="item.to"
    >
    {{ item.title }}
    </router-link>
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="openLogin">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from '../utils/firebase'

export default {
  data () {
    return {
      list: [
        { title: 'Home', to: '/' },
        { title: 'Heroes', to: '/heroes' },
        { title: 'Calendar', to: '/calendar' },
        { title: 'Markdown', to: '/markdown' },
        { title: 'Slider Carousel', to: '/slider-carousel' },
        { title: 'Calculator', to: '/calculator' },
        { title: 'Reusable Modal', to: '/reusable-modal' },
        { title: 'Real Time Chat', to: '/chat' }
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
      // .then((res) => {})
      // .catch((e) => {});
    },
    openLogin () {
      this.$store.commit('setLoginModal', true)
    }
  }
}
</script>

<style></style>
