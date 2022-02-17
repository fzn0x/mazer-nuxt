<template>
  <div id="app">
      <div id="sidebar" class="active">
          <Sidebar></Sidebar>
      </div>
      <div id="main">
          <Header></Header>
          <Nuxt/>
          <Footer></Footer>
      </div>
  </div>
</template>
<script>
import Header from '../components/Layouts/Header.vue'
import Sidebar from '../components/Layouts/Sidebar.vue'
import Footer from '../components/Layouts/Footer.vue'
export default {
  components:{
    Header:Header,
    Sidebar:Sidebar,
    Footer:Footer,
  }
}
</script>
