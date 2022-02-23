<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { PROJECTS } from "../utils/Projects"
</script>

<template>
<div v-for="project in PROJECTS">
  <ProjectItem :project="project">
    <template #icon>
      <DocumentationIcon />
    </template>
  </ProjectItem>
  </div>
</template>
