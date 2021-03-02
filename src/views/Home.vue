<template>
  <div class="home">
    <div>首页</div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
