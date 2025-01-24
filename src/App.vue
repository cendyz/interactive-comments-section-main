<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import CommentBox from './components/CommentBox/index.vue'
import Modal from '@/components/Modal/index.vue'
const isOpen = ref(false)
const mainIndex = ref(null)
const secondIndex = ref(null)
const currentTheme = ref(localStorage.getItem('theme') || 'light')

const toggleTheme = () => {
	if (currentTheme.value === 'light') {
		currentTheme.value = 'dark'
		document.documentElement.classList.add('dark')
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		currentTheme.value = 'light'
		document.documentElement.classList.remove('dark')
		document.documentElement.setAttribute('data-theme', 'light')
	}
	localStorage.setItem('theme', currentTheme.value)
}

if (currentTheme.value === 'dark') {
	document.documentElement.classList.add('dark')
	document.documentElement.setAttribute('data-theme', 'dark')
} else {
	document.documentElement.classList.remove('dark')
	document.documentElement.setAttribute('data-theme', 'light')
}

watchEffect(() => {
	if (isOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'visible'
	}
})
</script>

<template>
	<transition name="shadow">
		<div
			class="SHADOW absolute top-0 left-0 w-full h-full bg-black/30 z-10 dark:bg-white/30"
			v-if="isOpen"></div>
	</transition>
	<CommentBox
		:isOpen="isOpen"
		@changeIsOpen="isOpen = $event"
		@passMainIndex="mainIndex = $event"
		@passSecondIndex="secondIndex = $event" />
	<div class="shadow" v-show="isOpen === true"></div>
	<Teleport to="body">
		<Modal
			:isOpen="isOpen"
			@closeModal="isOpen = $event"
			:mainIndex="mainIndex"
			:secondIndex="secondIndex"
			@resetSecondIndex="secondIndex = $event"
			@resetMainIndex="mainIndex = $event" />
	</Teleport>
	<button @click="toggleTheme" class="uppercase text-[3rem]">
		toggle
	</button>
</template>

<style lang="scss">
@use './sass/utilities/reset.scss';

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

.shadow-enter-from,
.shadow-leave-to {
	opacity: 0;
}

.shadow-enter-active,
.shadow.leave-active {
	transition: opacity 0.15s;
}

.shadow-enter-to,
.shadow-leave-to {
	opacity: 1;
}
</style>
