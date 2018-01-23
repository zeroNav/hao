<template>
	<div class="layout">
		<section class="top">
			<slot name="topbar"></slot>
		</section>
		<section class="col-wrap">
			<div class="nav">
				<slot name="navbar"></slot>
			</div>
			<div class="panel">
				<slot name="panel"></slot>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@import "../../style/common/_const.scss";

.layout {
	width: 100vw;
	height: 100vh;
}
.top {
	height: $topbar-height;
	background-color: #fff;
}
.col-wrap {
	width: 100%;
	height: calc(100% - #{$topbar-height});
	display: flex;
	justify-content: flex-start;
	.nav {
		flex: none;
		width: 260px;
		height: 100%;
		color: $navbar-color;
		background-color: $navbar-bg;
		overflow-y: auto;
	}
	.panel {
		flex: 1;
		height: 100%;
		overflow-y: auto;
	}
}
</style>
