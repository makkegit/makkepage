<script setup lang="ts">
import { LOCALES } from "../i18n/locales";
</script>
<template>
  <div class="sticky-language-bar">
    <div class="languages-container">
      <div
        v-bind:class="'languages ' + o.value"
        v-bind:key="i"
        v-for="(o, i) in LOCALES"
      >
        <i v-on:click="$i18n.locale = o.value">
          {{ o.value }}
        </i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky-language-bar {
  position: fixed;
  top: 2%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.languages-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.languages {
  flex: 1;
  margin: 0.5rem;
  font-size: 1.5rem;
  padding: 0.2rem;
  width: 1.5em;
  border-radius: 5%;
  cursor: pointer;
}

.fin {
  background-color: #002f6c;
  color: #ffffff;
}

.en {
  background-color: #002f6c;
  color: #ffffff;
}
</style>
