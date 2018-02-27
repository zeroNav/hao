<template>
    <div class="form_wrap">
        <h3>
            <Icon type="flag"></Icon>
            提交新链接
        </h3>
        <Form
            ref="linkBox"
            :model="link"
            :rules="linkValid"
            :label-width="80">
            <FormItem label="类别" prop="category">
                <Select
                    v-model="link.category"
                    placeholder="请选择链接分类"
                    filterable>
                    <Option
                        v-for="item in linkCats"
                        :key="item.id"
                        :value="item.id">
                        {{ item.name }}
                    </Option>
                </Select>
            </FormItem>
            <FormItem label="名称" prop="name">
                <Input
                    v-model="link.name"
                    placeholder="请填写站点名称">
                </Input>
            </FormItem>
            <FormItem label="链接" prop="url">
                <Input
                    v-model="link.url"
                    placeholder="请填写站点URL地址">
                </Input>
            </FormItem>
            <FormItem label="简介">
                <Input
                    v-model="link.description"
                    type="textarea"
                    :rows="5"
                    placeholder="请填写站点简介（尽可能详细）">
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submitlink">提交链接</Button>
                <Button type="ghost" @click="resetlink" style="margin-left: 8px">清空</Button>
        </FormItem>
        </Form>
    </div>
</template>

<script>
import { addLink, addCat } from '../../api/index'
export default {
    data () {
        return {
            link: {
                category: '',
                name: '',
                url: '',
                description: ''
            },
            linkValid: {
                category: [
                    { required: true, message: '请选择链接分类', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请填写站点名称', trigger: 'blur' }
                ],
                url: [
                    { required: true, message: '请填写站点访问地址', trigger: 'blur' },
                    { type: 'url', message: '请填写正确的URL地址', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        linkCats() {
            return this.$store.state.linkCats || []
        }  
    },
    mounted () {
        this.$store.dispatch('getLinkCats')
    },
    methods: {
        submitlink() {
            this.$refs.linkBox.validate(valid => {
                if (valid) {
                    // console.log(this.link)
                    addLink(this.link).then(() => {
                        this.$Message.success('提交成功！感谢你的贡献，送你一朵小红花吧(#^.^#)')
                    })
                } else {
                    this.$Message.error('提交失败，请检查')
                }
            })
        },
        resetlink() {
            this.$refs.linkBox.resetFields()
        }
    }
}
</script>

<style lang="scss" scoped>
    .form_wrap {
        h3 {
            margin: 15px 20px;
            
        }
        form {
            max-width: 500px;
        }
    }
</style>
