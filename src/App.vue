<template>
  <div id="app">
    <header>
      <img src="./assets/prioritizely-logo.png">
    </header>
    <div class="wrapper">
      <div v-if="step === 0 && sideProjects.length > 0">
        <SideProjectList />
      </div>
      <div v-else-if="step === 0">
        <Home />
      </div>
      <div class="headline-steps" v-else-if="step === 1">
        <DescribeIdea />
      </div>
      <div class="headline-steps" v-else-if="step === 2">
        <FamiliarMarket />
      </div>
      <div class="headline-steps" v-else-if="step === 3">
        <PassionTopic />
      </div>
      <div class="headline-steps" v-else-if="step === 4">
        <CompetitionIdea />
      </div>
      <div class="headline-steps" v-else-if="step === 5">
        <SolveYourProblem />
      </div>
      <div class="headline-steps" v-else-if="step === 6">
        <TalkToUsers />
      </div>
      <div class="headline-steps" v-else-if="step === 7">
        <ValidateWithoutCode />
      </div>
    </div>
  </div>
</template>

<script>
  import SideProjectList from './components/side-projects/SideProjectsList.vue';
  import Home from './components/Home.vue';
  import DescribeIdea from './components/steps/DescribeIdea.vue';
  import FamiliarMarket from './components/steps/FamiliarMarket.vue';
  import PassionTopic from './components/steps/PassionTopic.vue';
  import CompetitionIdea from './components/steps/CompetitionIdea.vue';
  import SolveYourProblem from './components/steps/SolveYourProblem.vue';
  import TalkToUsers from './components/steps/TalkToUsers.vue';
  import ValidateWithoutCode from './components/steps/ValidateWithoutCode.vue';

  export default {
    components: {
      SideProjectList,
      Home,
      DescribeIdea,
      FamiliarMarket,
      PassionTopic,
      CompetitionIdea,
      SolveYourProblem,
      TalkToUsers,
      ValidateWithoutCode
    }
  }
</script>

<style>
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #F6F9FC;
    color: #32325D;
    margin: 0;
  }

  header {
    padding: 16px 10px;
  }

  .wrapper {
    max-width: 700px;
    margin: auto;
    text-align: center;
    padding: 0 10px;
  }

  button {
    color: #fff;
    background-color: #6772E5;
    font-size: 16px;
    padding: 12px 18px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }

  button:hover {
    cursor: pointer;
    background-color: #4e5be4;
  }

  button:disabled, button[disabled] {
    opacity: 0.50;
    cursor: not-allowed;
  }

  .yes-button {
    background-color: #6772E5;
    margin-right: 12px;
  }

  .no-button {
    width: 65.3px;
    background-color: #fff;
    color: #7162e8;
  }

  .no-button:hover {
    background-color: rgba(255, 255, 255, 0.45);
  }

  .show-next-button {
    padding-top: 30px;
  }

  .input {
    margin-top: 40px;
  }

  ::-webkit-input-placeholder {
    color: #32325d94;
  }

  .headline-steps {
    padding: 0 10px;
  }

  .headline-steps h2 {
    margin-top: 40px;
    font-size: 30px;
  }

  .headline-steps p {
    max-width: 700px;
    margin: auto;
    padding-bottom: 30px;
    font-size: 20px;
  }

  footer {
    margin-top: 80px;
  }

  footer p {
    font-size: 16px;
  }

  footer a {
    text-decoration: none;
    color: #6671e6;
  }

  @media (max-width: 420px) {
    .wrapper {
      text-align: left;
    }

    .headline-steps {
      padding: 0;
    }

    footer {
      text-align: center;
    }
  }
</style>
