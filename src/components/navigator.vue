<template>
    <Menu
        theme="light"
        accordion
        active-name="current_nav">
        <template v-for="(item,i) in routes">
            <MenuItem
                :key="item.name+i"
                v-if="!item.children || !item.children.length"
            >
            </template>
        </template>
    </Menu>
</template>
