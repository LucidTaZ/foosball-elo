<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large blue" v-on:click="$emit('click')">
      <i class="large material-icons">add</i>
    </a>
  </div>
</template>

<script>
export default {
    name: 'FloatingAddButton',
    mounted() {
        // eslint-disable-next-line
        M.FloatingActionButton.init(this.$el)
    }
}
</script>

<style scoped lang="scss">

</style>
