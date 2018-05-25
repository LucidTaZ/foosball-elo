<template>
  <ul class="collapsible">
    <slot></slot>
  </ul>
</template>

<script>
export default {
    name: 'CollapsibleList',
    mounted() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
        });
    }
}
</script>

<style scoped lang="scss">

</style>
