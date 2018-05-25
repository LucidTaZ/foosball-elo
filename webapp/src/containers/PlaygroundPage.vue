<template>
  <div id="playground">
    <Navbar logo="Navbar with buttons">
      <li><a href="#">Blop</a></li>
      <li><a href="#">Bla</a></li>
      <li><a href="#">Test</a></li>
    </Navbar>
    <Navbar logo="Navbar without buttons"></Navbar>
    <Card title="Sample card">
      <template slot="content">Card content</template>
      <template slot="action">Card actions</template>
    </Card>
    <CollapsibleList>
      <CollapsibleElement>
        <template slot="header">Sample collapsible one</template>
        <template slot="body">Sample collapsible body</template>
      </CollapsibleElement>
      <CollapsibleElement>
        <template slot="header">Sample collapsible two</template>
        <template slot="body">Another body!</template>
      </CollapsibleElement>
    </CollapsibleList>

    Sample player:<br />
    <Player name="Thijs" :rating=1337 :matchesPlayed=3 />

    Sample matches:<br />
    <Match moment="2018-03-30T12:51:35.111Z" :players="{winner_one: {name: 'Jack'}, loser_one: {name: 'Bob'}}" :outcome="{winner_one: 16, loser_one: -16}" />
    <Match moment="2018-03-31T13:52:36.123Z" :players="{winner_one: {name: 'Jack'}, winner_two: {name: 'John'}, loser_one: {name: 'Bob'}, loser_two: {name: 'Rob'}}" :outcome="{winner_one: 16, winner_two: 13, loser_one: -15, loser_two: -14}" />

    Sample player list:<br />
    <PlayersList :players="[{id: '123abc', name: 'Jack', rating: 1337, matchesPlayed: 3}]" />
  </div>
</template>

<script>
    import Navbar from '../components/Materialize/Navbar.vue'
    import Card from '../components/Materialize/Card.vue'
    import CollapsibleElement from '../components/Materialize/CollapsibleElement.vue'
    import CollapsibleList from '../components/Materialize/CollapsibleList.vue'
    import Player from '../components/Player.vue'
    import Match from '../components/Match.vue'
    import PlayersList from '../components/PlayersList.vue'

    export default {
        name: 'PlaygroundPage',
        components: {
            Navbar,
            Card,
            CollapsibleElement,
            CollapsibleList,
            Player,
            Match,
            PlayersList
        }
    }
</script>

<style scoped lang="scss">

</style>
