<template>
  <li>
    <div class="collapsible-header"><slot name="header"></slot></div>
    <div class="collapsible-body"><slot name="body"></slot></div>
  </li>
</template>

<script>
export default {
  name: 'CollapsibleElement'
}
</script>

<style scoped lang="scss">

</style>
