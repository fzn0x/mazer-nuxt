  
import sideBarItems from './data/sidebarItems';
import {defineStore} from 'pinia'

export const useStore = defineStore('main', () => {
    const sidebarItems = reactive(sideBarItems)
    const isSidebarActive = ref(true)
    const toggleSidebar = () => isSidebarActive.value = !isSidebarActive.value

    return {
        sidebarItems,
        isSidebarActive,
        toggleSidebar
    }
})