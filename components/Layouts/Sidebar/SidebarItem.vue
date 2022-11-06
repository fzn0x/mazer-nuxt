<script lang="ts" setup>
interface Menu {
	name: string
	key?: string
	icon?: string
	url?: string
	submenu: {
		name: string
		url: string
	}[]
}
const props = defineProps<{
  item: Menu
}>()
const route = useRoute()
const sidebarItem = ref<HTMLElement>()
function slideToggle(t: HTMLElement, e?: number, o?: number) { 0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o) } function slideUp(t, e, o) { j(t, e, o) } function slideDown(t, e, o) { j(t, e, o, !0) } function j(t: HTMLElement, e?: number, o?: number, i?: number) { void 0 === e && (e = 400), void 0 === i && (i = !1), t.style.overflow = "hidden", i && (t.style.display = "block"); var p, l = window.getComputedStyle(t), n = parseFloat(l.getPropertyValue("height")), a = parseFloat(l.getPropertyValue("padding-top")), s = parseFloat(l.getPropertyValue("padding-bottom")), r = parseFloat(l.getPropertyValue("margin-top")), d = parseFloat(l.getPropertyValue("margin-bottom")), g = n / e, y = a / e, m = s / e, u = r / e, h = d / e; window.requestAnimationFrame(function l(x) { void 0 === p && (p = x); var f = x - p; i ? (t.style.height = g * f + "px", t.style.paddingTop = y * f + "px", t.style.paddingBottom = m * f + "px", t.style.marginTop = u * f + "px", t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px", t.style.paddingTop = a - y * f + "px", t.style.paddingBottom = s - m * f + "px", t.style.marginTop = r - u * f + "px", t.style.marginBottom = d - h * f + "px"), f >= e ? (t.style.height = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.marginTop = "", t.style.marginBottom = "", t.style.overflow = "", i || (t.style.display = "none"), "function" == typeof o && o()) : window.requestAnimationFrame(l) }) }
onMounted(() => {
  sidebarItem.value?.querySelector('.sidebar-link')?.addEventListener('click', function(e) {
      e.preventDefault();
      
      let submenu = sidebarItem.value?.querySelector<HTMLElement>('.submenu') 

      if (submenu) {
          if( submenu.classList.contains('active') ) submenu.style.display = "block"

          if( submenu.style.display == "none" ) submenu?.classList.add('active')
          else submenu.classList.remove('active')
          slideToggle(submenu, 300)
      }
  })
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
<li class="sidebar-item" :class="{ 'active' : subIsActive(item), 'has-sub' : isHasSub(item) }" ref="sidebarItem"  >
    <template v-if="isHasSub(item)">
        <a class="sidebar-link" href="#">
            <i :class="`bi bi-${item.icon}`"></i>
            <span>{{ item.name }}</span>
        </a>
        <ul class="submenu" :class="{ 'active' : subIsActive(item) } ">
            <li v-for="(sub,i) in item.submenu" :key="i" class="submenu-item" >
                <nuxt-link :to="sub.url">{{ sub.name }}</nuxt-link>
            </li>
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