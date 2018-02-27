<template>
    <Menu
        theme="light"
        accordion
        active-name="current_nav">
        <template v-for="(item,i) in routes">
            <MenuItem
                :key="item.name + i"
                v-if="!item.children || !item.children.length"
                :name="item.path">
                {{ item.name }}
            </MenuItem>
            <Submenu
                v-else
                :key="item.name + i"
                :name="item.path">
                <template slot="title">
                    <Icon type="ios-gear"></Icon>
                    {{ item.name }}
                </template>
                <template v-for="(child,j) in item.children">
                    <MenuItem
                        :key="item.path + j"
                        :name="item.path + '/' + child.path">
                        {{ child.name }}
                    </MenuItem>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>

<script>
export default {
  data () {
      return {
          routes: this.$router.options.routes[0].children
      }
  }
}
</script>