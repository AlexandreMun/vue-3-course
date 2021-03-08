<template>
  <nav class="w-full bg-green-600 text-white px-4 py-3 text-lg">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-4"
      :to="item.to"
      >
      {{ item.title }}
      </router-link>
      <button v-if="isLoggedIn" class="mx-4" @click="logout">Logout</button>
      <button v-else class="mx-4" @click="$emit('open-login-modal')">Login</button>
  </nav>
</template>

<script>
import firebase from '../utils/firebase'

export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  setup () {
    function logout () {
      firebase
        .auth()
        .signOut()
        // .then(res => {})
        // .catch(e => {})
    }

    return {
      list: [
        { title: 'Home', to: '/' },
        { title: 'Heroes', to: '/heroes' },
        { title: 'Calendar', to: '/calendar' },
        { title: 'Markdown', to: '/markdown' },
        { title: 'Slider Carousel', to: '/slider' }
      ],
      logout
    }
  }
}
</script>

<style>

</style>
