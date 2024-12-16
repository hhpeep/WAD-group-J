<template>
<div id="app">
    <PageHeader />
    <SingUp />
    <PageFooter />
</div>
</template>
<script>
import PageFooter from "/src/components/Footer.vue"
import PageHeader from "/src/components/Header.vue"
import SingUp from "/src/components/singup.vue";

export default {
    name: "app",
    components: {
        PageHeader,
        PageFooter,
        SingUp
    }
}
</script>