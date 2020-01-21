<template>
  <div class="side-projects-array-component">
    <SideProjectName :sideProjectSorting="sortProjects"></SideProjectName>
    <div class="sp-add-more-button">
      <button @click="firstStep">ADD MORE</button>
    </div>
    <div class="side-projects-array-footer">
      <footer>
        <p>Made by <a href="https://twitter.com/jfraixedes">@jfraixedes</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
  import SideProjectName from './SideProjectName.vue';

  export default {
    computed: {
      sortProjects() {
        return this.$store.state.sideProjects.sort((a, b) => {
          return b.score - a.score;
        })
      }
    },
    components: {
      SideProjectName
    }
  }
</script>

<style scoped>
  .test {
    padding-top: 50px;
  }

  .side-projects-array-component {
    padding-top: 50px;
  }

  .side-projects-array-component button {
    margin-top: 20px;
  }

  @media (max-width: 420px) {
    .sp-add-more-button {
      text-align: center;
    }
  }
</style>
