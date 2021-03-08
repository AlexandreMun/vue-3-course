<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center my-4">Heroes {{ herosCount }}</h1>
      <ul class="border rounded p-2">
        <li
          class="flex justify-between"
          v-for="(hero, index) in heroes"
          :key="hero.name"
        >
        <!-- Adiciona o sai do for -->
        <div>
          {{ hero.name }}
        </div>
        <button @click="remove(index)">x</button>

        </li>
      </ul>
      <form class="mt-6" @submit.prevent="addHero">
        <input
          class="border rounded text-center"
          placeholder="Type your hero"
          v-model="newHero"
          ref="newHeroRef"
        >
        <button class="border rounded bg-green-600 text-white ml-4 px-2" type="submit">Add Hero</button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'

export default {
  setup () {
    const newHeroRef = ref('')
    const newHero = ref('')
    const heroes = ref([
      { name: 'Batman' },
      { name: 'Iron Man' },
      { name: 'Flash' },
      { name: 'Arrow' }
    ])

    onMounted(() => {
      newHeroRef.value.focus()
    })

    function addHero () {
      if (newHero.value !== '') {
        heroes.value.unshift({
          name: newHero.value
        })
        newHero.value = ''
      }
    }

    const herosCount = computed({
      get: () => heroes.value.length
    })

    function remove (index) {
      heroes.value = heroes.value.filter((h, i) => i !== index)
    }

    return {
      heroes,
      newHero,
      newHeroRef,
      addHero,
      remove,
      herosCount
    }
  }
}

</script>

<style>

</style>
