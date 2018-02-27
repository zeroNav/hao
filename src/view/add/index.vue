<template>
    <Form
        :model="link"
        :rules="linkValid"
        :label-width="80">
        <FormItem label="类别" prop="name">
            <Select v-model="link.category" placeholder="请选择链接分类">
                <Option
                    v-for="item in catList"
                    :key="item.id"
                    :value="item.id">
                    {{ item.name }}
                </Option>
            </Select>
        </FormItem>
    </Form>
</template>

<script>
import { addLink, addCat, getCats } from '../../api/index'
export default {
    data () {
        return {
            link: {
                category: null,
                name: null,
                url: null,
                description: null
            },
            catList: [
                {
                    name: 'test',
                    id: 123
                }
            ]
        }
    },
    mounted () {
        this.getCatList()
    },
    methods: {
        getCatList() {
            getCats().then(res => {
                console.log('category list -->', res)
            })
        }
    }
}
</script>
