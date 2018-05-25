<template>
  <Card class="player" :title="name">
    <template slot="content">
      <ul>
        <li>Rating: {{ rating }}</li>
        <li>Matches played: {{ matchesPlayed }}</li>
      </ul>
    </template>
  </Card>
</template>

<script>
import Card from '../Materialize/Card.vue'

export default {
  name: 'Player',
  components: {
    Card
  },
  props: {
    name: String,
    rating: Number,
    matchesPlayed: Number
  }
}
</script>

<style scoped lang="scss">

</style>
