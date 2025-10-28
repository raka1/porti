<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface IProject {
  _id: string
  name: string
  repo?: string
  demo?: string
  image: string
  description?: string
  completion: number
  timestamp: Date
}

const projects = ref<IProject[]>([])

async function getData() {
  try {
    const response = await fetch('/api/projects/get')
    const res = await response.json()
    projects.value = res.projects
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="container d-block py-4 px-3">
    <h2 class="section-header mb-4">Projects</h2>
    <div class="grids">
      <div v-for="project in projects" :key="project._id">
        <div class="card box-shadow">
          <img
            :src="`data:image/png;base64,${project.image}`"
            class="card-img-top"
            alt="Project Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a v-if="project.repo" :href="project.repo" class="btn btn-primary me-2">View Repo</a>
            <a v-if="project.demo" :href="project.demo" class="btn btn-primary">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grids {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
