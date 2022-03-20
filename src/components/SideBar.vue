<template>
<div class="sticky-media-bar">
  <div class="social-container">
    <div class="icons github">
      <a
        class="gh"
        href="https://github.com/makkegit"
        aria-label="Github - Markus Hakala"
      >
        <i class="fa fa-github"></i>
      </a>
    </div>
    <div class="icons linkedin">
      <a
        class="li"
        href="https://www.linkedin.com/in/makkein"
        aria-label="Linkedin - Markus Hakala"
      >
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
  </div>
</div>
</template>

<style scoped>
.sticky-media-bar {
  position: fixed;
  top: 20%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.social-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.icons {
  margin: 0.5rem;
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 10%;
}

.linkedin {
  background-color: #007bb6;
}

.github {
  background-color: black;
}

i {
  color: white;
}

</style>