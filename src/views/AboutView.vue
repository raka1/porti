<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface ISkill {
  icon?: string
  name: string
  level: 'Beginner' | 'Intermediate' | 'Proficient' | 'Expert'
  category: 'Technical Skill' | 'Tool & Technology' | 'Other Development' | 'Legacy Tool'
  description: string
}

const skills = ref<ISkill[]>([])
const selectedSkill = ref<ISkill>({
  name: '',
  level: 'Beginner',
  category: 'Technical Skill',
  description: '',
})

async function getData() {
  try {
    const response = await fetch('/api/skills/get')
    const res = await response.json()
    skills.value = res.skills
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
    <h2 class="section-header mb-4">About Me</h2>
    <section class="about-me">
      <div class="text-center">
        <img src="/monitor.png" alt="Monitor" style="max-height: 10rem" />
      </div>
      <p>
        I’m a <b>Full Stack Developer</b> who enjoys turning complex problems into clean,
        user-friendly web applications. My primary tools are <b>Vue.js</b> and <b>Node.js</b>, but
        I’m always open to exploring new technologies that make development faster and more elegant.
        I love creating scalable, maintainable systems that deliver both great performance and
        smooth user experience.
      </p>
      <h3 class="section-subheader my-4">Soft Skills</h3>
      <ul class="list-group">
        <li class="list-group-item box-shadow">
          🗣️ <b>Communication</b>
          <ul>
            <li>Effectively convey ideas and information to team members and stakeholders.</li>
            <li>Active listening to understand and address concerns.</li>
          </ul>
        </li>
        <li class="list-group-item box-shadow">
          🧩 <b>Problem-Solving</b>
          <ul>
            <li>Analyze complex issues and develop effective solutions.</li>
            <li>Think critically and creatively to overcome challenges.</li>
          </ul>
        </li>
        <li class="list-group-item box-shadow">
          🌲 <b>Adaptability</b>
          <ul>
            <li>Adjust to changing priorities and work environments.</li>
            <li>Embrace new technologies and methodologies.</li>
          </ul>
        </li>
        <li class="list-group-item box-shadow">
          🎨 <b>Creativity</b>
          <ul>
            <li>Generate innovative ideas and solutions.</li>
            <li>Think outside the box to enhance project outcomes.</li>
          </ul>
        </li>
        <li class="list-group-item box-shadow">
          ⌛ <b>Time Management</b>
          <ul>
            <li>Prioritize tasks effectively to meet deadlines.</li>
            <li>Utilize tools and techniques to enhance productivity.</li>
          </ul>
        </li>
      </ul>
      <h3 class="section-subheader my-4">Technical Skills</h3>
      <div class="grids">
        <template v-for="skill in skills" :key="skill.name">
          <div
            v-if="skill.category === 'Technical Skill'"
            class="card box-shadow"
            data-bs-toggle="modal"
            data-bs-target="#skillModal"
            @click="selectedSkill = skill"
          >
            <h4>{{ skill.name }}</h4>
            <div>{{ skill.level }}</div>
          </div>
        </template>
      </div>
      <h3 class="section-subheader my-4">Tools & Technologies</h3>
      <div class="grids">
        <template v-for="skill in skills" :key="skill.name">
          <div
            v-if="skill.category === 'Tool & Technology'"
            class="card box-shadow"
            data-bs-toggle="modal"
            data-bs-target="#skillModal"
            @click="selectedSkill = skill"
          >
            <h4><i :class="skill.icon"></i></h4>
            <h4>{{ skill.name }}</h4>
            <div>{{ skill.level }}</div>
          </div>
        </template>
      </div>
      <h3 class="section-subheader my-4">Other Developments</h3>
      <div class="grids">
        <template v-for="skill in skills" :key="skill.name">
          <div
            v-if="skill.category === 'Other Development'"
            class="card box-shadow"
            data-bs-toggle="modal"
            data-bs-target="#skillModal"
            @click="selectedSkill = skill"
          >
            <h4><i :class="skill.icon"></i></h4>
            <h4>{{ skill.name }}</h4>
            <div>{{ skill.level }}</div>
          </div>
        </template>
      </div>
      <h3 class="section-subheader my-4">Legacy Tools</h3>
      <div class="grids">
        <template v-for="skill in skills" :key="skill.name">
          <div
            v-if="skill.category === 'Legacy Tool'"
            class="card box-shadow"
            data-bs-toggle="modal"
            data-bs-target="#skillModal"
            @click="selectedSkill = skill"
          >
            <h4><i :class="skill.icon"></i></h4>
            <h4>{{ skill.name }}</h4>
            <div>{{ skill.level }}</div>
          </div>
        </template>
      </div>
    </section>
  </div>

  <!-- Bootstrap Modal -->
  <div
    class="modal fade"
    id="skillModal"
    tabindex="-1"
    aria-labelledby="skillModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="skillModalLabel">{{ selectedSkill.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="pi pi-times"></i>
          </button>
        </div>
        <div class="modal-body">
          {{ selectedSkill.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-secondary);
}

.grids {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--color-background);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  text-align: center;
  cursor: pointer;
}

.card h4 {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: var(--color-text);
  font-weight: bold;
}

.card div {
  font-size: 1rem;
  color: var(--color-text);
  font-weight: 500;
}
</style>
