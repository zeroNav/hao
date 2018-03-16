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
	font-size: 13px;
}
.col-wrap {
	width: 100%;
	height: calc(100% - #{$topbar-height});
	display: flex;
	justify-content: flex-start;
	.nav {
		position: relative;
		flex: none;
		width: 240px;
		height: 100%;
		overflow-y: auto;
	}
	.panel {
		flex: 1;
		height: 100%;
		padding: 15px;
		overflow-y: auto;
	}
}
</style>
