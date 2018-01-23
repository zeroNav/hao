<template>
    <col-panel class="home_wrap">
        <div slot="topbar" class="topbar">
            <img src="" alt="" class="logo">
            <h2>我是标题2</h2>
        </div>
        <!-- 我是侧边栏 -->
        <navigator slot="navbar"/>
        <!-- 我是主界面 -->
        <router-view slot="panel" />
    </col-panel>
</template>

<script>
    import ColPanel from '../../components/layout/col-panel.vue'
    import Navigator from '../../components/navigator.vue'
    export default {
        components: {
            ColPanel,
            Navigator
        },
        data() {
            return {
                name: 'nooldey'
            }
        }
    }
</script>

<style lang="scss">
    @import '../../style/page/home.scss';
</style>
