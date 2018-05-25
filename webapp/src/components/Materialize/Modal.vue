<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
      header: String
  },
  methods: {
      show: function () {
          // eslint-disable-next-line
          M.Modal.getInstance(this.$el).open()
      }
  },
  mounted() {
      // eslint-disable-next-line
      M.Modal.init(this.$el)
  }
}
</script>

<style scoped lang="scss">

</style>
