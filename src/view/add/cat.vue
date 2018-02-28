<template>
    <div>
        <h3>
            提交链接分类
        </h3>
        <i-form
            ref="catBox"
            :model="cat"
            :rules="catValid"
            :label-width="80">
            <form-item label="分类名" prop="name">
                <i-input v-model="cat.name" placeholder="请填写分类名称"></i-input>
            </form-item>
            <form-item>
                <i-button type="primary" @click="submitCat">提交</i-button>
                <i-button type="ghost" @click="reset" style="margin-left: 8px">取消</i-button>
            </form-item>
        </i-form>
    </div>
</template>

<script>
import { addCat } from '../../api/index'

export default {
    data () {
        const validateName = (rule, value, callback) => {
            if (!value || value === '') {
                callback(new Error('请填写分类名称'))
            } else if (this.linkCats.some(item => item.name == value)) {
                callback(new Error('该分类名称已存在'))
            } else {
                callback()
            }
        }
        return {
            cat: {
                name: ''
            },
            catValid: {
                name: [
                    { validator: validateName, trigger: 'blur' }
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
        submitCat() {
            this.$refs.catBox.validate(valid => {
                if (valid) {
                    addCat(this.cat.name).then(() => {
                        this.$Message.success('分类添加成功！赶快去发布该分类下的链接吧！')
                    })
                } else {
                    this.$Message.warning('提交失败，请检查')
                }
            })
        },
        reset() {
            this.$refs.catBox.resetFields()
        }
    }
}
</script>
