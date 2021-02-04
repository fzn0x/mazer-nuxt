<template>
    <div class="sidebar-wrapper active">
        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="logo">
                    <router-link to="/"><img data-src="~assets/images/logo/logo.png" v-lazy-load alt="Logo" srcset=""></router-link>
                </div>
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>
        <div class="sidebar-menu">
            <ul class="menu">
                <template v-for="item in $store.state.sideBarItems">
                    <li class="sidebar-title" v-if="item.isTitle" :key="item.key">
                        {{ item.name }}
                    </li>
                    <li class="sidebar-item" :class="{ 'active' : isActive(item.url) || subIsActive(item), 'has-sub' : isHasSub(item) }" v-else :key="item.key">
                        <template v-if="isHasSub(item)">
                            <a class="sidebar-link">
                                <i :class="`bi bi-${item.icon}`"></i>
                                <span>{{ item.name }}</span>
                            </a>
                            <ul class="submenu" :class="{ 'active' : subIsActive(item) } ">
                                <template v-for="sub in item.submenu">
                                    <li class="submenu-item" :class="{ 'active' : isActive(sub.url) } " :key="sub.key">
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
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</template>

<script>
export default {
    mounted() {
        function slideToggle(t,e,o){0===t.clientHeight?j(t,e,o,!0):j(t,e,o)}function slideUp(t,e,o){j(t,e,o)}function slideDown(t,e,o){j(t,e,o,!0)}function j(t,e,o,i){void 0===e&&(e=400),void 0===i&&(i=!1),t.style.overflow="hidden",i&&(t.style.display="block");var p,l=window.getComputedStyle(t),n=parseFloat(l.getPropertyValue("height")),a=parseFloat(l.getPropertyValue("padding-top")),s=parseFloat(l.getPropertyValue("padding-bottom")),r=parseFloat(l.getPropertyValue("margin-top")),d=parseFloat(l.getPropertyValue("margin-bottom")),g=n/e,y=a/e,m=s/e,u=r/e,h=d/e;window.requestAnimationFrame(function l(x){void 0===p&&(p=x);var f=x-p;i?(t.style.height=g*f+"px",t.style.paddingTop=y*f+"px",t.style.paddingBottom=m*f+"px",t.style.marginTop=u*f+"px",t.style.marginBottom=h*f+"px"):(t.style.height=n-g*f+"px",t.style.paddingTop=a-y*f+"px",t.style.paddingBottom=s-m*f+"px",t.style.marginTop=r-u*f+"px",t.style.marginBottom=d-h*f+"px"),f>=e?(t.style.height="",t.style.paddingTop="",t.style.paddingBottom="",t.style.marginTop="",t.style.marginBottom="",t.style.overflow="",i||(t.style.display="none"),"function"==typeof o&&o()):window.requestAnimationFrame(l)})}

        let sidebarItems = document.querySelectorAll('.sidebar-item.has-sub');
        for(var i = 0; i < sidebarItems.length; i++) {
            let sidebarItem = sidebarItems[i];
            sidebarItems[i].querySelector('.sidebar-link').addEventListener('click', function(e) {
                e.preventDefault();
                
                let submenu = sidebarItem.querySelector('.submenu');
                if( submenu.classList.contains('active') ) submenu.style.display = "block"

                if( submenu.style.display == "none" ) submenu.classList.add('active')
                else submenu.classList.remove('active')
                slideToggle(submenu, 300)
            })
        }

        window.addEventListener('DOMContentLoaded', (event) => {
            var w = window.innerWidth;
            if(w < 1200) {
                document.getElementById('sidebar').classList.remove('active');
            }
        });
        window.addEventListener('resize', (event) => {
            var w = window.innerWidth;
            if(w < 1200) {
                document.getElementById('sidebar').classList.remove('active');
            }else{
                document.getElementById('sidebar').classList.add('active');
            }
        });

        document.querySelector('.burger-btn').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('active');
        })
        document.querySelector('.sidebar-hide').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('active');
        })

        // Perfect Scrollbar Init
        if(typeof PerfectScrollbar.default == 'function') {
            const container = document.querySelector(".sidebar-wrapper");
            const ps = new PerfectScrollbar.default(container, {
                wheelPropagation: false
            });
        }

        // Scroll into active sidebar
        document.querySelector('.sidebar-item.active').scrollIntoView(false)
    },
    methods: {
        subIsActive(item) {
            const paths = Array.isArray(item.submenu) ? item.submenu : [];
            return paths.some(path => {
                return this.$route.path.indexOf(path.url) === 0;
            });
        },

        isActive(url) {
            if(this.$route.path == url){
                return true;
            }
            return false;
        },

        isHasSub(item){
            if(item.hasOwnProperty("submenu")){
                if(item.submenu.length > 0){
                    return true;
                }
            }

            return false;
        }
    }
}
</script>

<style lang="scss" scoped>
[class^="bi-"]::before, [class*=" bi-"]::before {
    vertical-align: text-top;
}
</style>