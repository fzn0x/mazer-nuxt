
<script lang="ts" setup>
import PerfectScrollbar from "perfect-scrollbar"
import { useStore } from '~/store';

const store = useStore()
const route = useRoute()

const isSidebarActive = computed(() => store.isSidebarActive)
store.toggleSidebar()


const sidebarItemsEl = ref<HTMLElement[]>([])
const sidebarWrapper = ref<HTMLElement>()

function slideToggle(t: HTMLElement, e?: number, o?: number) { 0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o) } function slideUp(t, e, o) { j(t, e, o) } function slideDown(t, e, o) { j(t, e, o, !0) } function j(t: HTMLElement, e?: number, o?: number, i?: number) { void 0 === e && (e = 400), void 0 === i && (i = !1), t.style.overflow = "hidden", i && (t.style.display = "block"); var p, l = window.getComputedStyle(t), n = parseFloat(l.getPropertyValue("height")), a = parseFloat(l.getPropertyValue("padding-top")), s = parseFloat(l.getPropertyValue("padding-bottom")), r = parseFloat(l.getPropertyValue("margin-top")), d = parseFloat(l.getPropertyValue("margin-bottom")), g = n / e, y = a / e, m = s / e, u = r / e, h = d / e; window.requestAnimationFrame(function l(x) { void 0 === p && (p = x); var f = x - p; i ? (t.style.height = g * f + "px", t.style.paddingTop = y * f + "px", t.style.paddingBottom = m * f + "px", t.style.marginTop = u * f + "px", t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px", t.style.paddingTop = a - y * f + "px", t.style.paddingBottom = s - m * f + "px", t.style.marginTop = r - u * f + "px", t.style.marginBottom = d - h * f + "px"), f >= e ? (t.style.height = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.marginTop = "", t.style.marginBottom = "", t.style.overflow = "", i || (t.style.display = "none"), "function" == typeof o && o()) : window.requestAnimationFrame(l) }) }

const onresize = () => {
    // Hide sidebar if screen size is below 1200
    const screenWidth = window.innerWidth;
    if (screenWidth < 1200) {
        store.toggleSidebar()
    }
}

onMounted(() => {
    onresize()
    window.addEventListener('resize', onresize);


    for(var i = 0; i < sidebarItemsEl.value.length; i++) {
        let sidebarItem = sidebarItemsEl.value[i];
        sidebarItem.querySelector('.sidebar-link')?.addEventListener('click', function(e) {
            e.preventDefault();
            
            let submenu = sidebarItem.querySelector<HTMLElement>('.submenu') 

            if (submenu) {
                if( submenu.classList.contains('active') ) submenu.style.display = "block"
    
                if( submenu.style.display == "none" ) submenu?.classList.add('active')
                else submenu.classList.remove('active')
                slideToggle(submenu, 300)
            }
        })
    }


    // Perfect Scrollbar Init
    const ps = new PerfectScrollbar(sidebarWrapper.value!, {
        wheelPropagation: false
    });

    // Scroll into active sidebar
    // document.querySelector('.sidebar-item.active').scrollIntoView(false)
})
const subIsActive = (item)=>  {
    const paths = Array.isArray(item.submenu) ? item.submenu : [];
    return paths.some(path => {
        return route.path.indexOf(path.url) === 0;
    });
}

const isHasSub = (item)=>{ 
    if(item.hasOwnProperty("submenu")){
        if(item.submenu.length > 0){
            return true;
        }
    }

    return false;
}
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
                        <li  v-else class="sidebar-item" :class="{ 'active' : subIsActive(item), 'has-sub' : isHasSub(item) }" ref="sidebarItemsEl"  >
                            <template v-if="isHasSub(item)">
                                <a class="sidebar-link" href="#">
                                    <i :class="`bi bi-${item.icon}`"></i>
                                    <span>{{ item.name }}</span>
                                </a>
                                <ul class="submenu" :class="{ 'active' : subIsActive(item) } ">
                                    <template>
                                        <li v-for="(sub,i) in item.submenu" :key="i" class="submenu-item" >
                                            <nuxt-link :to="sub.url">{{ sub.name }}</nuxt-link>
                                        </li>
                                    </template>
                                </ul>                       
                            </template>
                            <template v-else>
                                <nuxt-link class="sidebar-link" :to="item.url">
                                    <i :class="`bi bi-${item.icon}`"></i>
                                    <span>{{ item.name }}</span>
                                </nuxt-link>                     
                            </template>
                        </li>
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