<template>
  <span>
    {{ name }} (<span v-bind:class="{'positive': isPositive, 'negative': !isPositive}"><span v-if="isPositive">+</span>{{ outcome }}</span>)
  </span>
</template>

<script>
export default {
  name: 'PlayerMatchOutcome',
  props: {
    name: String,
    outcome: Number
  },
  computed: {
    isPositive() {
      return this.outcome >= 0
    }
  }
}
</script>

<style scoped lang="scss">
  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
</style>
