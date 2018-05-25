<template>
  <ul class="collapsible">
    <slot></slot>
  </ul>
</template>

<script>
export default {
    name: 'CollapsibleList',
    mounted() {
        // eslint-disable-next-line
        M.Collapsible.init(this.$el)
    }
}
</script>

<style scoped lang="scss">

</style>
