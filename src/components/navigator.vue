<template>
	<ul class="side_menu">
		<template v-for="(item,i) in routes">
			<router-link tag="li" :key="i" :to="'/' + item.path" v-if="!item.children || !item.children.length">
				{{ item.name }}
			</router-link>
			<template v-else v-for="(child,j) in item.children">
				<router-link tag="li" :key="item.path+j" :to="'/' + item.path + '/' + child.path">
					{{ child.name }}
				</router-link>
			</template>
		</template>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			routes: this.$router.options.routes[0].children
		}
	},
	mounted() {
		console.log('navbar', Date.now())
	}
}
</script>

<style lang="scss" scoped>
	.side_menu {
		li {
			display: block;
			padding: 10px 15px;
		}
	}
</style>
