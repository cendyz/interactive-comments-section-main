<script setup>
import { inject } from 'vue'
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'
const toggleDarkMode = inject('toggleFunc')
const darkData = inject('darkData')
</script>

<template>
	<nav class="nav">
		<button @click="toggleDarkMode" class="theme-toggle"></button>
		<button
			:class="['toggleBtn', darkData ? 'mon' : 'sun']"
			role="switch"
			type="button"
			@click="toggleDarkMode">
			<img
				:src="darkData ? moon : sun"
				alt=""
				class="btn-icon"
				:style="{
					transform: darkData ? 'translateX(3%)' : 'translateX(105%)',
				}" />
		</button>
	</nav>
</template>

<style scoped lang="scss">
.nav {
	padding: 1em;
	display: flex;
	justify-content: center;
}

.toggleBtn {
	padding: 0.3em 0.4em;
	width: 4.5em;
	background-color: #7e7c74;
	border: 2px solid $moderate-blue;
	border-radius: 2em;
	transition: background-color 0.2s;
}

.btn-icon {
	display: block;
	width: 1.7em;
	transition: transform 0.2s;
}

.sun {
	background-color: #ffd700;
	border-color: #555555;
}
.mon {
	background-color: #7e7c74;
	border-color: #dcdcdc;
}
</style>
