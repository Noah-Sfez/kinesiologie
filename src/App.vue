<script setup>
import { useRouter } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

const router = useRouter()
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>



</style>