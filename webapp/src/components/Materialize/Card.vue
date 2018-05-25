<template>
  <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-content">
        <span class="card-title">{{ title }}</span>
        <slot name="content"></slot>
      </div>
      <div class="card-action" v-if="hasActionSlot">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
      title: String
  },
  computed: {
    hasActionSlot() {
      return this.$slots.action
    }
  }
}
</script>

<style scoped lang="scss">

</style>
