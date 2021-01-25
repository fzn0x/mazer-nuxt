<template>
    <div class="sidebar-wrapper active">
        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="logo">
                    <router-link to="/"><img src="~assets/images/logo/logo.png" alt="Logo" srcset=""></router-link>
                </div>
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>
        <div class="sidebar-menu">
            <ul class="menu">
                <template v-for="item in $store.state.sideBarItems">
                    <li class="sidebar-title" v-if="item.isTitle" :key="item">
                        {{ item.name }}
                    </li>
                    <li class="sidebar-item" :class="{ 'active' : isActive(item.url), 'has-sub' : isHasSub(item) }" v-else :key="item">
                        <nuxt-link class="sidebar-link" :to="item.url"><i :class="`bi bi-${item.icon}`"></i>{{ item.name }}</nuxt-link>
                        <template v-if="item.hasOwnProperty('submenu')">
                            <ul :class="`submenu active`" v-if="item.submenu.length > 0">
                                <template v-for="sub in item.submenu">
                                    <li :key="sub">
                                        <nuxt-link :to="sub.url">{{ sub.name }}</nuxt-link>
                                    </li>
                                </template>
                            </ul>                       
                        </template>
                    </li>
                </template>
            </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</template>

<script>
export default {
    methods: {
        isActive(url) {
            if(this.$route.path == url){
                return true;
            }
            return false;
        },
        isHasSub(item){
            return true;
        }
    }
}
</script>

<style>

</style>