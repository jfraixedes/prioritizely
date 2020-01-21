import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    step: 0,
    sideProjects: [],
    stepBar: 0
  },
  getters: {
    step: state => {
      return state.step;
    },
    sideProjects: state => {
      return state.sideProjects;
    }
  },
  mutations: {
    createSideProject: (state, sideProject) => {
      state.sideProjects.push(sideProject);
      state.step++;
      state.stepBar += 14.28;
    },
    removeSideProject: (state, sideProject) => {
      state.sideProjects.splice(sideProject - 1, 1);
    },
    firstStep: state => {
      state.step++;
      state.stepBar += 14.28;
    },
    yesButton: state => {
      state.show = true;
      const currentProject = state.sideProjects.length - 1;
      state.sideProjects[currentProject].score++;
      state.step++;
      state.stepBar += 14.28;
      if (state.step > 7) {
        state.step = 0;
        state.stepBar = 0;
      }
    },
    noButton: state => {
      state.show = true;
      const currentProject = state.sideProjects.length - 1;
      state.sideProjects[currentProject].score--;
      state.step++;
      state.stepBar += 14.28;
      if (state.step > 7) {
        state.step = 0;
        state.stepBar = 0;
      }
    }
  },
  plugins: [createPersistedState()]
})

// REMOVE_SET (state, set) {
//         state.sets.$remove(set)
//     }
