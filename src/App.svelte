<script>
  const skills = [
    "javascript",
    "typescript",
    "vue",
    "react",
    "angular",
    "jest",
    "express",
    "TDD",
    "vuex",
    "redux",
    "mobex",
    "Nuxt",
    "Vuex",
    "Vuetify",
    "Bootstrap Vue",
    "react-native",
    "react-router",
    "svelte",
    "html5",
    "css3",
    "Sass",
    "css-modules",
    "vue-test-utils",
    "express",
    "selenium",
    "storybook",
    "C#",
    "git",
  ];

  let counts = [1, 2, 3, 4, 5, 6, 7, 8];

  function getDelay() {
    return getRandom(4) + 1;
  }

  function getSpeed() {
    const index = getRandom(3);
    return ["slow", "slower", "fast", "faster"][index];
  }

  function getSize() {
    const index = getRandom(2);
    return ["small", "medium", "large"][index];
  }

  function getAlignment() {
    const index = getRandom(2);
    return ["right", "left", "center"][index];
  }

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
</script>

<main>
  {#each counts as counts}
    {#each skills as skill, index}
      <div
        class="skill  speed-{getSpeed()} {getSize()} margin-x-{getSize()} margin-y-{getSize()} align-{getAlignment()} font-bold"
      >
        {skill}
      </div>
    {/each}
  {/each}
  <section class="introduction">
    <h1 class="">Hi! I'm Hanie. <br />A UI Engineer.</h1>
    <div>
      <a href="https://github.com/hanidelneri?tab=repositories" target="blank">
        <img src="/github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/hanie-gharedaghi-8b78bbb8/"
        target="blank"
      >
        <img src="/linkedin.svg" alt="linkedin" />
      </a>
      <a href="mailto:h7.gharedaghi@gmail.com" target="blank">
        <img src="/mail.svg" alt="mail" />
      </a>
      <a
        href="https://docs.google.com/document/d/1AcfM0PxyjHuvRBfpRKEW5LMbT2MLhmbfMds_wLdPxHc/edit?usp=sharing" target="blank">
        <img src="/cv.svg" alt="cv" />
      </a>
    </div>
  </section>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }

  .introduction {
    position: fixed;
    background-color: darkcyan;
    right: 0;
    left: 0;
    font-size: 2em;
    padding: 8px;
    color: white;
    top: 30%;
  }

  .skill {
    animation-name: flash;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }

  .speed-slow {
    animation-duration: 4s;
  }
  .speed-slower {
    animation-duration: 8s;
  }
  .speed-fast {
    animation-duration: 2;
  }
  .speed-faster {
    animation-duration: 1;
  }

  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  .introduction img {
    width: 30px;
  }

  .font-bold {
    font-weight: bold;
  }

  .large {
    font-size: 32px;
  }
  .medium {
    font-size: 16px;
    margin: 4px;
  }
  .small {
    font-size: 8px;
    margin: 2px;
  }

  .margin-y-large {
    margin: 8px;
  }

  .margin-y-medium {
    margin: 4px;
  }

  .margin-y-small {
    margin: 2px;
  }

  .margin-x-large {
    margin: 8px;
  }

  .margin-x-medium {
    margin: 4px;
  }

  .margin-x-small {
    margin: 2px;
  }

  .align-right {
    text-align: right;
  }

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    main {
      grid-template-columns: repeat(4, 1fr);
    }
    .introduction {
      font-size: 1.5em;
    }
    .introduction img {
      width: 24px;
    }
  }

  @media only screen and (min-width: 600px) {
    main {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media only screen and (min-width: 768px) {
    main {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media only screen and (min-width: 992px) {
    main {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  @media only screen and (min-width: 1200px) {
  }
</style>
