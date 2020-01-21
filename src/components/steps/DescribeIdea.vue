<template>
  <div class="headline-steps">
    <ProgressBar />
    <h2>Briefly describe your idea</h2>
    <p>Example: "A job board for digital nomads".</p>
    <div class="input">
      <input type="text" placeholder="Type your idea here" v-model="name">
      <button @click="createSideProject" class="button-ok" :disabled="name.length <= 3">OK</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        score: 0
      }
    },
    methods: {
      createSideProject() {
        this.$store.commit('createSideProject', {name: this.name, score: this.score});
        this.name = '';
      }
    }
}
</script>

<style scoped>
  input {
    width: 500px;
    height: 28px;
    border: none;
    border-bottom: 3px solid grey;
    background-color: transparent;
    outline: none;
  }

  input[type="text"] {
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    color: #32325D;
  }

  .button-ok {
    margin-left: 14px;
  }

  @media (max-width: 600px) and (min-width: 200px) {
    input {
      width: 100%;
    }

    .button-ok {
      float: right;
      margin-top: 10px;
    }
  }
</style>
