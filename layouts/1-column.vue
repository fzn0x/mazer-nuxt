<template>
<div>
    <nav class="navbar navbar-light">
        <div class="container d-block">
            <nuxt-link to="/"><i class="bi bi-chevron-left"></i></nuxt-link>
            <nuxt-link class="navbar-brand ms-4" to="/">
                <img src="~assets/images/logo/logo.png">
            </nuxt-link>
        </div>
    </nav>

    <slot/>
</div>
</template>