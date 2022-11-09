<script lang="ts" setup>
import LayoutSidebar from '~~/components/Layouts/Sidebar/LayoutSidebar.vue';
import VerticalHeader from '~~/components/Layouts/VerticalHeader.vue';
import LayoutFooter from '~~/components/Layouts/LayoutFooter.vue';

</script>
<template>
  <div id="app">
    <LayoutSidebar></LayoutSidebar>
    <div id="main" class="layout-navbar">
      <VerticalHeader></VerticalHeader>
      <div id="main-content">
        <slot/>
        <LayoutFooter></LayoutFooter>
      </div>
    </div>
  </div>
</template>
