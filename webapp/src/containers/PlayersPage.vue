<template>
  <div class="players">
    <h2>Players</h2>
    <Player v-for="player in players" :key="player.id" :name="player.name" :rating="player.rating" :matchesPlayed="player.matchesPlayed"></Player>

    <FloatingAddButton v-on:click="showNewPlayerForm" />
    <AddPlayerModal ref="addPlayerModal" :server="server" v-on:playerCreated="refresh()" />
  </div>
</template>

<script>
import axios from 'axios'

import FloatingAddButton from '../components/Materialize/FloatingAddButton.vue'
import Modal from '../components/Materialize/Modal.vue'

import AddPlayerModal from '../containers/AddPlayerModal.vue'

import Player from '../components/Player.vue'

export default {
    name: 'PlayersPage',
    components: {
        FloatingAddButton,
        Modal,
        AddPlayerModal,
        Player
    },
    props: {
        server: String
    },
    methods: {
        showNewPlayerForm: function () {
            this.$refs.addPlayerModal.show()
        },
        refresh: function () {
            // https://alligator.io/vuejs/rest-api-axios/
            axios.get(this.server + '/players')
                .then(response => {
                    this.players = response.data
                })
        }
    },
    data() {
        return {
            players: []
        }
    },
    created() {
        this.refresh()
    }
}
</script>

<style scoped lang="scss">

</style>
