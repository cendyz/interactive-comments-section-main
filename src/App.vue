<template>
	<Nav
		@changeTheme="currentTheme = $event"
		:isChange="isChange"
		@changeIsActive="isChange = $event" />
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
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import CommentBox from './components/CommentBox/index.vue'
import Modal from '@/components/Modal/index.vue'
const isOpen = ref(false)
const isChange = ref(false)
const mainIndex = ref(null)
const secondIndex = ref(null)
const currentTheme = ref(localStorage.getItem('theme') || 'light')
import Nav from './components/Nav.vue'


if (currentTheme.value === 'dark') {
	document.documentElement.classList.add('dark')
	document.documentElement.setAttribute('data-theme', 'dark')
	isChange.value = true
} else {
	document.documentElement.classList.remove('dark')
	document.documentElement.setAttribute('data-theme', 'light')
	isChange.value = false
}

watchEffect(() => {
	if (isOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'visible'
	}
})
</script>

<style lang="scss">
@use './sass/utilities/reset.scss';

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
