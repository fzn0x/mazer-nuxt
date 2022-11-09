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
}>();

const route = useRoute();
const sidebarItem = ref<HTMLElement>();
const submenu = ref<HTMLElement>();
const submenuOriginalHeight = ref(0);
const submenuHeight = ref('auto');
const isSubActive = ref(true);
const isActive = computed(() => {
    return route.path == props.item.url || (props.item.submenu && props.item.submenu.some((sub) => sub.url == route.path));
});

onMounted(() => {
	if (submenu.value) {
		submenuOriginalHeight.value = submenu.value.offsetHeight

		isSubActive.value = isActive.value
		submenuHeight.value = (isSubActive.value ? submenuOriginalHeight.value : 0) + "px"
	}
})

const hasSub = computed(()=>{
	if(props.item.hasOwnProperty("submenu")){
		if(props.item.submenu.length > 0){
				return true;
		}
	}
	return false;
})

const menuClick = (event: MouseEvent) => {
	if(isSubActive.value)
		submenuHeight.value = "0";
	else submenuHeight.value = submenuOriginalHeight.value + "px"
	isSubActive.value = !isSubActive.value;
}

const isUrlActive = (url: string) => url == route.path;
</script>
<template>
<li class="sidebar-item" :class="{ 'active' : isActive, 'has-sub' : hasSub }" ref="sidebarItem"  >
    <template v-if="hasSub">
        <a class="sidebar-link" href="#" @click="menuClick">
            <i :class="`bi bi-${item.icon}`"></i>
            <span>{{ item.name }}</span>
        </a>
        <ul class="submenu" :class="{ 'active' : isSubActive } " ref="submenu" :style="{height: submenuHeight}">
            <li v-for="(sub,i) in item.submenu" :key="i" class="submenu-item" :class="{'active': isUrlActive(sub.url)}">
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
<style>
.submenu {
    transition: all .5s !important;
}
</style>
