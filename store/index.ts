  
import sideBarItems from './data/sidebarItems';
import {defineStore} from 'pinia'

export const useStore = defineStore('main', () => {
    const sidebarItems = reactive(sideBarItems)

    return {
        sidebarItems
    }
})