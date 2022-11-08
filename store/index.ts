import sideBarItems from './data/sidebarItems';
import {defineStore} from 'pinia'
import {reactive, ref} from "vue";

export const useStore = defineStore('main', () => {
  const sidebarItems = reactive(sideBarItems)
  const isSidebarActive = ref(true)
  const toggleSidebar = () => isSidebarActive.value = !isSidebarActive.value
  const closeSidebar = () => isSidebarActive.value = false
  const openSidebar = () => isSidebarActive.value = true

  return {
    sidebarItems,
    isSidebarActive,
    toggleSidebar,
    closeSidebar,
    openSidebar
  }
})
