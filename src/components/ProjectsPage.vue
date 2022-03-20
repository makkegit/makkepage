<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
import DocumentationIcon from "./icons/IconGithub.vue";
import { PROJECTS } from "../utils/Projects";
</script>

<template>
  <div class="projects_container">
    <template v-for="project in PROJECTS" :key="project.name">
      <ProjectItem :project="project">
        <template #icon>
          <DocumentationIcon />
        </template>
      </ProjectItem>
    </template>
  </div>
</template>