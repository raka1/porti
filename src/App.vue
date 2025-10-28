<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import BackgroundView from './views/BackgroundView.vue'
import ContactView from './views/ContactView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <NavBar />
  <section id="home"><HomeView /></section>
  <section id="about"><AboutView /></section>
  <section id="projects"><ProjectsView /></section>
  <section id="background"><BackgroundView /></section>
  <section id="contact"><ContactView /></section>
  <FooterView />
</template>
