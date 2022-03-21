<script setup lang="ts">
let nbr = Math.floor(Math.random() * 4);
</script>
<template>
  <div class="itsme">
    <div class="quotes">"{{ $t("quotes[" + nbr + "]") }}"</div>
    <div class="rndName">- {{ $t("rndName[" + nbr + "]") }}</div>
    <div class="rndTitle">{{ $t("rndTitle[" + nbr + "]") }}</div>
  </div>
</template>

<style>
.quotes {
  text-align: center;
  font-style: italic;
  font-size: large;
}
.rndName {
  text-align: center;
  font-size: medium;
}
.rndTitle {
  text-align: center;
  font-style: italic;
  font-size: small;
}

@media (min-width: 1024px) {
  .itsme {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  .itsme {
    margin-top: 30%;
    display: block;
    align-items: center;
  }
}
</style>
