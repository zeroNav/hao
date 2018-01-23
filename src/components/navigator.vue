<template>
	<nav>
		<template v-for="(item,i) in routes">
			<router-link :key="i" :to="'/' + item.path" v-if="!item.children || !item.children.length">
				{{ item.name }}
			</router-link>
			<template v-else v-for="(child,j) in item.children">
				<router-link :key="item.path+j" :to="'/' + item.path + '/' + child.path">
					{{ child.name }}
				</router-link>
			</template>
		</template>
		<!-- test -->
		<div v-for="n in 1000" :key="'test'+n">呵呵呵呵</div>
	</nav>
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

