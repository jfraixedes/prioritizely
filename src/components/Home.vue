<template>
  <div>
    <h1>Prioritize your side project ideas easily</h1>
    <div class="headline-description">
      <p>Simply answer yes or no to a bunch of questions and you'll quickly know which are the projects you should focus on.</p>
    </div>
    <button @click="firstStep">START PRIORITIZING</button>
    <div class="bullet-points-wrapper">
      <h2>How ir works</h2>
      <span class="bullet-number">1</span>
      <p>We ask you a bunch of yes or no questions.</p>
      <span class="bullet-number">2</span>
      <p>We collect all of your answers and prioritize them based on a simple binary score.</p>
      <span class="bullet-number">3</span>
      <p>You'll end up with your side project ideas prioritized and saved in your local storage.</p>
    </div>
    <footer>
      <p>Made by <a href="https://twitter.com/jfraixedes">@jfraixedes</a></p>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  h1 {
    font-size: 36px;
    margin-top: 80px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 30px;
  }

  .headline-description {
    max-width: 681px;
    margin: auto;
    padding-bottom: 20px;
  }

  .headline-description p {
    font-size: 22px;
    line-height: 1.5;
  }

  .bullet-points-wrapper h2 {
    margin-top: 80px;
    margin-bottom: 40px;
  }

  .bullet-points-wrapper p {
    max-width: 450px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    line-height: 1.5;
    font-size: 20px;
  }

  .bullet-number {
    font-size: 24px;
    font-weight: 400;
    background-color: #fff;
    padding: 6px 16px;
    border-radius: 50%;
    color: #6772E5;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }

  footer p {
    font-size: 16px;
  }

  @media (max-width: 600px) and (min-width: 200px) {
    h1 {
      margin-top: 60px;
      font-size: 32px;
    }
  }
</style>
