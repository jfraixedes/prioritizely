<template>
  <div class="sp-step-bar">
    <p>Step {{ step }} of <span>7</span></p>
  </div>
</template>

<script>
export default {
  computed: {
    stepBar() {
      return this.$store.state.stepBar;
    }
  }
}
</script>

<style scoped>
  .sp-step-bar p {
    font-size: 18px;
    padding-bottom: 0;
    color: #5a646d;
    padding-top: 40px;
  }

  .sp-step-bar span {
    padding-left: 2px;
  }

  @media (max-width: 420px) {
    .sp-step-bar {
      text-align: center;
    }
  }
</style>
