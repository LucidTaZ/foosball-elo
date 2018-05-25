<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">{{ logo }}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down" v-if="hasSlot">
        <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    logo: String
  },
  computed: {
    hasSlot() {
      return this.$slots.default
    }
  }
}
</script>

<style scoped lang="scss">

</style>
