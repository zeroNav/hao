<template>
    <i-menu
        theme="light"
        style="height:100%;"
        accordion
        active-name="current_nav"
        @on-select="pickNav">
        <template v-for="(item,i) in routes">
            <template v-if="!item.meta || !item.meta.hidden">
                <menu-item
                    :key="item.name + i"
                    v-if="!item.children || !item.children.length"
                    :name="item.path">
                    {{ item.name }}
                </menu-item>
                <i-submenu
                    v-else
                    :key="item.name + i"
                    :name="item.path">
                    <template slot="title">
                        <Icon type="ios-gear"></Icon>
                        {{ item.name }}
                    </template>
                    <template v-for="(child,j) in item.children">
                        <menu-item
                            :key="item.path + j"
                            :name="item.path + '/' + child.path">
                            {{ child.name }}
                        </menu-item>
                    </template>
                </i-submenu>
            </template>
        </template>
    </i-menu>
</template>

<script>
export default {
    data () {
        return {
            routes: this.$router.options.routes[0].children
        }
    },
    methods: {
        pickNav(path) {
            console.log('pick menu item:', path)
            this.$router.push(`/${ path }`)
        }
    }
}
</script>