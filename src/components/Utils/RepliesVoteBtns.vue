<script setup>
const props = defineProps({
	value: Object,
})

const handleReplyVote = (value, type) => {
	if (type === 'up') {
		if (!value.plusActive && !value.minusActive) {
			value.score++
			value.plusActive = true
		} else if (value.minusActive) {
			value.score++
			value.minusActive = false
		}
	}

	if (type === 'down') {
		if (!value.plusActive && !value.minusActive) {
			value.score--
			value.minusActive = true
		} else if (value.plusActive) {
			value.score--
			value.plusActive = false
		}
	}
}
</script>

<template>
	<div class="btnsBox">
		<button class="leftBtn" @click="handleReplyVote(props.value, 'up')">
			+
		</button>
		<p class="votes">{{ value.score }}</p>
		<button class="rightBtn" @click="handleReplyVote(props.value, 'down')">
			-
		</button>
	</div>
</template>

<style scoped lang="scss">
@include voteBtns;
</style>
