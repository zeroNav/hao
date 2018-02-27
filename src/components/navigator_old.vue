<template>
	<ul class="side_menu">
		<template v-for="(item,i) in routes">
			<router-link
				:key="i"
				v-if="!item.children || !item.children.length"
				tag="li"
				:to="'/' + item.path"
				:active-class="'current'"
			>
				{{ item.name }}
			</router-link>
			<template
				v-else
				v-for="(child,j) in item.children"
			>
				<router-link
					tag="li"
					:key="item.path+j"
					:to="'/' + item.path + '/' + child.path"
					:active-class="'current-child'"
				>
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
			cursor: pointer;
			&:hover {
				color: #333;
			}
		}
	}
</style>
