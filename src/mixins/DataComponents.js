export const DataComponents = {
  methods: {
    firstStep() {
      this.$store.commit('firstStep');
      console.log(this.$store.state.stepBar);
    },
    yesButton() {
      this.$store.commit('yesButton');
      console.log(this.$store.state.stepBar);
    },
    noButton() {
      this.$store.commit('noButton');
    }
  },
  computed: {
    step() {
      return this.$store.state.step;
    },
    sideProjects() {
      return this.$store.state.sideProjects;
    }
  }
};
