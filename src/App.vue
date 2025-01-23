<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import CommentBox from './components/CommentBox/index.vue'
import Modal from '@/components/Modal/index.vue'
const isOpen = ref(false)
const mainIndex = ref(null)
const secondIndex = ref(null)
const time = ref(0)

watchEffect(() => {
	if (isOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'visible'
	}

})
</script>

<template>
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

body {
	position: relative;
	font-family: 'Rubik', serif;
	font-size: 1.6rem;
	background-color: var(--light-gray);
	transition: background-color var(--transition-time);
	background-color: #333;
}

.shadow {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	overflow: hidden;
	z-index: 10;
}

.error-border {
	border-color: red;
}

.no-error-border {
	border-color: blue;
}
</style>
