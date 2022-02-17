<template>
    <div id="app">
        <div id="sidebar" class="active">
            <Sidebar></Sidebar>
        </div>
        <div id="main" class="layout-navbar">
            <VerticalHeader></VerticalHeader>
            <div id="main-content">
                <Nuxt/>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
import VerticalHeader from '../components/Layouts/VerticalHeader.vue'
import Sidebar from '../components/Layouts/Sidebar.vue'
import Footer from '../components/Layouts/Footer.vue'
export default {
  components:{
    VerticalHeader:VerticalHeader,
    Sidebar:Sidebar,
    Footer:Footer,
  }
}
</script>
