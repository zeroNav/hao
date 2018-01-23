<template>
    <col-panel>
        <div slot="topbar">我是顶部栏</div>
        <nav slot="navbar">我是侧边栏</nav>
        <section slot="panel">我是主界面</section>
    </col-panel>
</template>

<script>
    import ColPanel from './components/layout/col-panel.vue'
    export default {
        components: {
            ColPanel
        },
        data() {
            return {
                name: 'nooldey'
            }
        }
    }
</script>
