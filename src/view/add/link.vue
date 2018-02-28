<template>
    <div>
        <h3>
            提交新链接
        </h3>
        <i-form
            ref="linkBox"
            :model="link"
            :rules="linkValid"
            :label-width="80">
            <form-item label="类别" prop="category">
                <i-select
                    v-model="link.category"
                    placeholder="请选择链接分类"
                    filterable>
                    <i-option
                        v-for="item in linkCats"
                        :key="item.id"
                        :value="item.id">
                        {{ item.name }}
                    </i-option>
                </i-select>
            </form-item>
            <form-item label="名称" prop="name">
                <i-input
                    v-model="link.name"
                    placeholder="请填写站点名称">
                </i-input>
            </form-item>
            <form-item label="链接" prop="url">
                <i-input
                    v-model="link.url"
                    placeholder="请填写站点URL地址">
                </i-input>
            </form-item>
            <form-item label="简介">
                <i-input
                    v-model="link.description"
                    type="textarea"
                    :rows="5"
                    placeholder="请填写站点简介（尽可能详细）">
                </i-input>
            </form-item>
            <form-item>
                <i-button type="primary" @click="submitlink">提交</i-button>
                <i-button type="ghost" @click="resetlink" style="margin-left: 8px">清空</i-button>
            </form-item>
        </i-form>
    </div>
</template>

<script>
import { addLink } from '../../api/index'

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
