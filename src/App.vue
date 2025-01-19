<script setup>
import MainComments from './components/MainComments.vue'
</script>
<template>
	<MainComments />
</template>

<style lang="scss">
@use './sass/utilities/reset.scss';

body {
	margin: 2em 1em;
	font-family: 'Rubik', serif;
	font-size: 1.6rem;
	background-color: $very-light-gray;
}
</style>
