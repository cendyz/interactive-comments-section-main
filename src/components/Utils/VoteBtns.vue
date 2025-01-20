<script setup>
const props = defineProps({
	index: Number,
	value: Object,
	newData: Object,
})

const handleVote = (index, type) => {
	const comment = props.newData[index]

	if (type === 'up') {
		if (!comment.plusActive && !comment.minusActive) {
			comment.score++
			comment.plusActive = true
		} else if (comment.minusActive) {
			comment.score++
			comment.minusActive = false
		}
	}

	if (type === 'down') {
		if (!comment.plusActive && !comment.minusActive) {
			comment.score--
			comment.minusActive = true
		} else if (comment.plusActive) {
			comment.score--
			comment.plusActive = false
		}
	}
}
</script>

<template>
	<div class="btnsBox">
		<button
			:class="['leftBtn', { disableVote: value.plusActive }]"
			@click="handleVote(props.index, 'up')">
			+
		</button>
		<p class="votes">{{ value.score }}</p>
		<button
			:class="['rightBtn', { disableVote: value.minusActive }]"
			@click="handleVote(props.index, 'down')">
			-
		</button>
	</div>
</template>

<style scoped lang="scss">
@include voteBtns;
</style>
