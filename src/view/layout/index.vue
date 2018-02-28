<template>
    <col-panel class="home_wrap">
        <div slot="topbar" class="topbar">
            <p class="bar">
                <img src="https://avatars3.githubusercontent.com/u/13229398?s=400&v=4" alt="" class="logo">
                <a>网址导航站</a>
            </p>
            <p class="line"></p>
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
