<template>
  <CollapsibleList>
    <CollapsibleElement v-for="player in players" :key="player.id">
      <template slot="header">{{ player.name }} ({{ player.rating }})</template>
      <template slot="body">Matches played: {{ player.matchesPlayed }}</template>
    </CollapsibleElement>
  </CollapsibleList>
</template>

<script>
import CollapsibleList from './Materialize/CollapsibleList.vue'
import CollapsibleElement from './Materialize/CollapsibleElement.vue'

export default {
    name: 'PlayersList',
    components: {
        CollapsibleList,
        CollapsibleElement
    },
    props: {
        players: Array[Object]
    }
}
</script>

<style scoped lang="scss">

</style>
