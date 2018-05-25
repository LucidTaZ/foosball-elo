<template>
  <Modal ref="modal">
    <div class="modal-content">
      <h4>Add player</h4>
      <input type="text" v-model="name" placeholder="Name" />
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" v-on:click="submitPlayer">Add</a>
    </div>
  </Modal>
</template>

<script>
import axios from 'axios'

import Modal from '../components/Materialize/Modal.vue'

export default {
    name: 'AddPlayerModal',
    components: {
        Modal
    },
    props: {
        server: String
    },
    data () {
        return {
            name: ''
        }
    },
    methods: {
        show: function () {
            this.$refs.modal.show()
        },
        submitPlayer: function () {
            // https://alligator.io/vuejs/rest-api-axios/
            console.log(this.name)
            axios.post(this.server + '/players', {
                  name: this.name
            }).then(response => {
                console.log(response)
                this.$emit('playerCreated')
            })
            // TODO: Proper error handling, currently you can post without a name, the modal will close without showing errors
            // The API misbehaves as well: a 200 is returned even though there is an error, and a player is created without a name...
        }
    }
}
</script>

<style scoped lang="scss">

</style>
