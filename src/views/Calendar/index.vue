<template>
  <div class="m-auto p-2">
    <h1 class="text-3xl my-5 text-center">Vue Calendar</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold capitalize">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="py-1 px-2 border rounded focus:outline-none" @click="prevMonth" @keyup.left="prevMonth">Anterior</button>
      <button class="py-1 px-2 border rounded focus:outline-none" @click="nextMonth" @keyup.right="nextMonth">Próximo</button>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    }
  },
  methods: {

    // Dias do mês
    daysInMonth () {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
    },

    // Dia que começa o mês
    startDay () {
      return new Date(this.currentYear, this.currentMonth).getDay()
    },

    nextMonth () {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },

    prevMonth () {
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },

    currentDateClass (num) {
      const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString()
      const currentFullDate = new Date().toDateString()
      return calendarFullDate === currentFullDate ? 'currentDateStyle' : ''
    }
  },
  computed: {
    currentMonthName () {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' })
    }
  }
}
</script>

<style>

.currentDateStyle {
  @apply bg-green-600 text-white
}

</style>
