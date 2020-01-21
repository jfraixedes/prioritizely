<template>
  <div>
    <ul>
      <li v-for="(side, index) in sideProjectSorting">
        <h2>
          <div class="sp-icon-prioritization">
            <div class="sp-icon-high" v-if="side.score === 6 || side.score === 5 || side.score === 4">
              <img src="../../assets/high.svg">
            </div>
            <div class="sp-icon-medium" v-if="side.score === 3 || side.score === 2">
              <img src="../../assets/medium.svg">
            </div>
            <div class="sp-icon-low" v-if="side.score === 1 || side.score <= 0">
              <img src="../../assets/low.svg">
            </div>
          </div>
          <!-- <i class="fas fa-angle-double-up" style="font-size: 18px"></i> -->
          <!-- <span class="sp-bullet-point">{{ index + 1 }}</span> -->
         {{ side.name | capitalize }}
          <p class="sp-delete-project" @click="removeSideProject(index + 1)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 220.176 220.176" style="enable-background:new 0 0 220.176 220.176;" xml:space="preserve" width="16px" height="16px">
            <g>
            	<g>
            		<g>
            			<path d="M131.577,110.084l84.176-84.146c5.897-5.928,5.897-15.565,0-21.492     c-5.928-5.928-15.595-5.928-21.492,0l-84.176,84.146L25.938,4.446c-5.928-5.928-15.565-5.928-21.492,0s-5.928,15.565,0,21.492     l84.146,84.146L4.446,194.26c-5.928,5.897-5.928,15.565,0,21.492c5.928,5.897,15.565,5.897,21.492,0l84.146-84.176l84.176,84.176     c5.897,5.897,15.565,5.897,21.492,0c5.897-5.928,5.897-15.595,0-21.492L131.577,110.084z" fill="#6e7185"/>
            		</g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            	<g>
            	</g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
          </p>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['sideProjectSorting'],
    methods: {
      removeSideProject(sideProject) {
        this.$store.commit('removeSideProject', sideProject);
        console.log(sideProject)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    max-width: 750px;
    margin: auto;
    padding-left: 0;
  }

  li {
    text-align: left;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
  }

  h2 {
    font-size: 20px;
    vertical-align: middle;
    margin: 0;
    font-weight: 400;
    padding: 17.5px 14px;
    line-height: 1.5;
    display: flex;
  }

  .sp-icon-prioritization {
    padding-right: 6px;
  }

  .sp-icon-medium {
    margin-top: -3px;
  }

  .sp-bullet-point {
    border-radius: 50%;
    background-color: #6772E5;
    padding: 5px 14px;
    color: #fff;
    margin-right: 10px;
    font-weight: 400;
  }

  .sp-delete-project {
    display: none;
    margin: 0;
    padding-left: 10px;
    cursor: pointer;
    margin-left: auto;
  }

  h2:hover > p {
    display: block;
  }

  svg:hover path {
    fill: #32325d;
  }

  @media (max-width: 600px) and (min-width: 300px) {
    ul {
      width: 100%;
      padding-left: 0;
    }

    .sp-delete-project {
      display: block;
    }

    svg path {
      fill: #acacb3;
    }
  }

</style>
