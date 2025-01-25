<template>
	<nav class="p-[1em] flex justify-center">
		<button
			:class="[
				'py-[.3em] px-[.4em] w-[4.5em] bg-gray-500 border-[2px] rounded-[2em] border-moderate-blue dark:border-white transition-colors',
				{ 'bg-gray-500 border-gray-200': props.isChange },
				{ 'bg-yellow-400 border-gray-600': !props.isChange },
			]"
			role="switch"
			type="button"
			@click="toggleTheme">
			<img
				:src="props.isChange ? moonIcon : sunIcon"
				:alt="props.isChange ? 'moon icon' : 'sun icon'"
				class="block w-[1.7em] transition-transform"
				:style="{
					transform: props.isChange
						? 'translateX(3%)'
						: 'translateX(105%)',
				}" />
		</button>
	</nav>
</template>

<script setup lang=ts>
import { ref } from 'vue'
import sunIcon from '@/images/sun.svg'
import moonIcon from '@/images/moon.svg'
const props = defineProps({
	isChange: Boolean,
})

const currentTheme = ref(localStorage.getItem('theme') || 'light')

const emit = defineEmits(['changeTheme', 'changeIsActive'])

const toggleTheme = () => {
	if (currentTheme.value === 'light') {
		currentTheme.value = 'dark'
		emit('changeTheme', currentTheme)
		document.documentElement.classList.add('dark')
		document.documentElement.setAttribute('data-theme', 'dark')
		emit('changeIsActive', true)
	} else {
		currentTheme.value = 'light'
		emit('changeTheme', currentTheme)
		document.documentElement.classList.remove('dark')
		document.documentElement.setAttribute('data-theme', 'light')
		emit('changeIsActive', false)
	}
	localStorage.setItem('theme', currentTheme.value)
}
</script>

<style lang="scss">
.sun {
	background-color: #ffd700;
	border-color: #555555;
}

.mon {
	background-color: #7e7c74;
	border-color: #dcdcdc;
}
</style>
