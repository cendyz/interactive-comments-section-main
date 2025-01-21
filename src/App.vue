<script setup>
import { ref, watchEffect, provide } from 'vue'
import MainComments from './components/MainComments.vue'
const isDarkMode = ref(false)

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	isDarkMode.value = true
}

watchEffect(() => {
	if (isDarkMode.value) {
		document.body.classList.add('dark-mode')
	} else {
		document.body.classList.remove('dark-mode')
	}
})

const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value
}
provide('toggleFunc', toggleDarkMode)
provide('darkData', isDarkMode)
</script>
<template>
	<MainComments />
</template>

<style lang="scss">
@use './sass/utilities/reset.scss';

:root {
	--light-gray: hsl(223, 19%, 93%);
	--white: hsl(0, 0%, 100%);
	--light-grayish-blue: hsl(239, 57%, 85%);
	--moderate-blue: hsl(238, 40%, 52%);
	--soft-red: hsl(358, 79%, 66%);
	--pale-red: hsl(357, 100%, 86%);
	--dark-blue: hsl(212, 24%, 26%);
	--grayish-blue: hsl(211, 10%, 45%);
	--very-light-gray: hsl(228, 33%, 97%);
	--transition-time: 0.15s;
}

.dark-mode {
	--light-gray: hsl(223, 19%, 15%);
	--white: hsl(0, 0%, 10%);
	--light-grayish-blue: hsl(239, 57%, 20%);
	--moderate-blue: hsl(238.3, 39.4%, 65.7%);
	--soft-red: hsl(358.3, 54.5%, 61.2%);
	--pale-red: hsl(357, 100%, 40%);
	--dark-blue: hsl(212, 24%, 80%);
	--grayish-blue: hsl(211, 10%, 70%);
	--very-light-gray: hsl(228, 33%, 20%);
}

body {
	margin: 2em 1em;
	font-family: 'Rubik', serif;
	font-size: 1.6rem;
	background-color: var(--light-gray);
	transition: background-color var(--transition-time);
}
</style>
