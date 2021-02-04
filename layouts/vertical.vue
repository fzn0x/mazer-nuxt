<template>
    <div id="app">
        <div id="sidebar" class="active">
            <Sidebar></Sidebar>
        </div>
        <div id="main" class="layout-navbar">
            <VerticalHeader></VerticalHeader>
            <div id="main-content">
                <Nuxt/>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>