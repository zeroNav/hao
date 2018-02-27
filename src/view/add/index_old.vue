<template>
  <div>
      <h2>提交新链接：</h2>
      <form>
          <p>
              <label>类别：</label>
              <input type="text" v-model="link.category">
          </p>
          <p>
              <label>名称：</label>
              <input type="text" v-model="link.name">
          </p>
          <p>
              <label>访问地址：</label>
              <input type="url" v-model="link.url">
          </p>
          <p>
              <label>描述：</label>
              <input type="text" v-model="link.description">
          </p>
          <p>
              <button @click="submit">提交</button>
          </p>
      </form>
      <h2>提交新类别：</h2>
      <form>
          <p>
              <label>类别名称：</label>
              <input type="text" v-model="category">
          </p>
          <p>
              <button @click="submitCat">提交新分类</button>
          </p>
      </form>
  </div>
</template>

<script>
import { addLink, addCat, getCats } from '../../api/index'
export default {
    data() {
        return {
            link: {
                category: null,
                name: null,
                url: null,
                description: null
            },
            category: null,
            catList: []
        }
    },
    mounted () {
        // this.getCatList()
    },
    methods: {
        getCatList() {
            getCats().then(res => {
                console.log('list',res)
            })
        },
        submit() {
            console.log('click on submit link')
            let vf = Object.values(this.link).some(v => {
                let val = v ? v.trim() : null;
                return val
            })
            if (!vf) {
                console.log('ssss')
                window.alert('请填写完整信息')
                return;
            }
            console.log('eeee')
            addLink(this.link)
        },
        submitCat() {
            console.log('click on submit category')
            let vf = this.category;
            if (!vf) {
                alert('请填写分类名')
                return;
            }
            addCat(this.category)
        }
    }
}
</script>
