<template>
  <Card class="match" title="Match">
    <template slot="content">
      Played on {{ moment }}
      <div v-if="!isTwoVersusTwo">
        <PlayerMatchOutcome :name=players.winner_one.name :outcome=outcome.winner_one />
        vs
        <PlayerMatchOutcome :name=players.loser_one.name :outcome=outcome.loser_one />
      </div>
      <div v-if="isTwoVersusTwo">
        <PlayerMatchOutcome :name=players.winner_one.name :outcome=outcome.winner_one />
        and
        <PlayerMatchOutcome :name=players.winner_two.name :outcome=outcome.winner_two />
        vs
        <PlayerMatchOutcome :name=players.loser_one.name :outcome=outcome.loser_one />
        and
        <PlayerMatchOutcome :name=players.loser_two.name :outcome=outcome.loser_two />
      </div>
    </template>
  </Card>
</template>

<script>
import Card from './Materialize/Card.vue'
import PlayerMatchOutcome from '../components/PlayerMatchOutcome.vue'

export default {
  name: 'Match',
  components: {
    Card,
    PlayerMatchOutcome
  },
  props: {
    moment: String,
    players: Object,
    outcome: Object
  },
  computed: {
    isTwoVersusTwo() {
      return this.players.winner_two && this.players.loser_two
    }
  }
}
</script>

<style scoped lang="scss">

</style>
