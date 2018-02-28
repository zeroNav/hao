<template>
    <Tabs class="form_wrap">
        <TabPane label="新链接" icon="bookmark">
            <add-link />
        </TabPane>
        <TabPane label="新分类" icon="folder">
            <add-cat />
        </TabPane>
    </Tabs>
</template>

<script>
import AddLink from './link'
import AddCat from './cat'
export default {
    components: {
        AddLink,
        AddCat
    },
    mounted () {
        this.$store.dispatch('getLinkCats')
    },
}
</script>

<style lang="scss">
    .form_wrap {
        h3 {
            margin: 15px 20px;
            
        }
        form {
            max-width: 500px;
        }
    }
</style>
