<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { Tooltip } from 'bootstrap'

const currentTheme = ref(document.documentElement.getAttribute('data-theme'))
const isMenuOpen = ref(false)
const toggleTheme = ref<HTMLElement | null>(null)

function theme() {
  const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  currentTheme.value = newTheme

  // Hide tooltip after click
  if (toggleTheme.value) {
    const tooltipInstance = Tooltip.getInstance(toggleTheme.value)
    if (tooltipInstance) tooltipInstance.dispose()

    // Reinitialize tooltip for updated title
    nextTick(() => {
      if (toggleTheme.value) {
        new Tooltip(toggleTheme.value)

        const tooltipInstance = Tooltip.getInstance(toggleTheme.value)
        if (tooltipInstance) tooltipInstance.show()
      }
    })
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.navbar')) {
      isMenuOpen.value = false
    }
  })

  // Initialize Bootstrap tooltip on theme toggle button
  if (toggleTheme.value) {
    new Tooltip(toggleTheme.value)
  }
})
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-links" :class="{ open: isMenuOpen }">
      <li><a href="#about" class="link" @click="isMenuOpen = false">About</a></li>
      <li><a href="#projects" class="link" @click="isMenuOpen = false">Projects</a></li>
      <li><a href="#background" class="link" @click="isMenuOpen = false">Background</a></li>
      <li><a href="#contact" class="link" @click="isMenuOpen = false">Contact</a></li>
    </ul>
    <button
      class="btn btn-icon"
      @click="theme"
      aria-label="Toggle theme"
      ref="toggleTheme"
      data-bs-toggle="tooltip"
      :data-bs-title="`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`"
    >
      <i :class="currentTheme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"></i>
    </button>
    <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
      <i class="pi pi-bars"></i>
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links .link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s;
}

.navbar-links .link:hover {
  color: var(--color-primary);
}

.btn.btn-icon {
  color: var(--color-text);
  margin-left: 2rem;
  margin-right: 1.25rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text);
  margin-right: 1.25rem;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--color-background);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .navbar-links.open {
    display: flex;
  }

  .btn.btn-icon {
    margin-left: 0;
  }
}
</style>
