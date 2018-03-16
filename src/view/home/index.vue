<template>
  <div>
      <Row
        v-for="(cat,i) in linkCats"
        :key="i"
        class-name="link_row"
        :gutter="15">
        <i-col span="4" class-name="title">
          <Icon type="folder"></Icon>
          <span @click="getLink(cat)">
            {{ cat.name }}
          </span>
        </i-col>
        <i-col span="20" class-name="table">
          <a
            v-for="(u,i) in cat.urls"
            :key="i"
            :href="u.url"
            :title="u.description"
          >
            {{ u.name }}
          </a>
        </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    linkCats() {
      return this.$store.state.linkCats || []
    }
  },
  mounted() {
    this.$store.dispatch('getLinkCats')
  },
  methods: {
    getLink(cat) {
      if (!cat.id || cat.urls.length) return;
      this.$store.dispatch('getCatLinks', cat.id)
    }
  }
}
</script>

<style lang="scss">
  .link_row {
    margin-bottom: 30px;
    font-size: 16px;
    .title {
      border-right: 2px solid #333;
      cursor: pointer;
    }
    .table {
      a {
        display: inline-block;
        padding-left: 8px;
        padding-right: 8px;
        margin-right: 10px;
        color: #666;
      }
    }
  }
</style>
