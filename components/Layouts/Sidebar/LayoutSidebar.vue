
<script lang="ts" setup>
import PerfectScrollbar from "perfect-scrollbar"
import SidebarItem from "./SidebarItem.vue";
import { useStore } from '~/store';

const store = useStore()

const isSidebarActive = computed(() => store.isSidebarActive)
console.log(isSidebarActive.value)
store.toggleSidebar()


const sidebarWrapper = ref<HTMLElement>()


const onresize = () => {
    // Hide sidebar if screen size is below 1200
    const screenWidth = window.innerWidth;
    if (screenWidth < 1200) {
        store.toggleSidebar()
    }
}

onMounted(() => {
    window.addEventListener('resize', onresize);

    // Perfect Scrollbar Init
    const ps = new PerfectScrollbar(sidebarWrapper.value!, {
        wheelPropagation: false
    });

    // Scroll into active sidebar
    // document.querySelector('.sidebar-item.active').scrollIntoView(false)
})
</script>
<template>
    <div id="sidebar" :class="{ 'active': isSidebarActive }">
        <div class="sidebar-wrapper active" ref="sidebarWrapper">
            <div class="sidebar-header">
                <div class="d-flex justify-content-between">
                    <div class="logo">
                        <nuxt-link to="/"><img src="~/assets/images/logo/logo.png"  alt="Logo" ></nuxt-link>
                    </div>
                    <div class="toggler">
                        <a href="#" class="sidebar-hide d-xl-none d-block" @click="store.toggleSidebar">
                            <i class="bi bi-x bi-middle"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <template v-for="item in store.sidebarItems">
                        <li v-if="item.isTitle" class="sidebar-title" :key="item.key">
                            {{ item.name }}
                        </li>
                        <sidebar-item v-else :item="item"></sidebar-item>
                    </template>
                </ul>
            </div>
            <button class="sidebar-toggler btn x" @click="store.toggleSidebar"><i data-feather="x"></i></button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
[class^="bi-"]::before, [class*=" bi-"]::before {
    vertical-align: text-top;
}
</style>