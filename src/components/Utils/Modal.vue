<template>
	<dialog class="modal" :open="props.isOpen">
		<h3 class="title">delete comment</h3>
		<p class="desc">
			Are you sure you want to delete this comment? This will remove the
			comment and can't be undone.
		</p>
		<div class="btnsBox">
			<button class="btn" type="button" @click="closeModal">
				no, cancel
			</button>
			<button class="btn btn--right" type="button" @click="deleteComment">
				yes, delete
			</button>
		</div>
	</dialog>
</template>

<script setup>
const props = defineProps({
	isOpen: Boolean,
})

const emit = defineEmits(['close'])

const closeModal = () => {
	emit('close', false)
}

const deleteComment = () => {
	return props.newData.commentBox[props.propIndex].replies.splice(
		props.replyIndex,
		1
	)
}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);
	width: calc(100% - 2em);
	border: none;
	padding: 1.5em;
	border-radius: 0.5em;
	background-color: var(--white);
	transition: background-color var(--transition-time);
}

.title,
.desc {
	transition: color var(--transition-time);
}

.title {
	margin-bottom: 1em;
	color: var(--dark-blue);
	&::first-letter {
		text-transform: capitalize;
	}
}

.desc {
	color: var(--grayish-blue);
}

.btnsBox {
	margin-top: 1em;
	display: flex;
	justify-content: space-between;
}

.btn {
	padding: 0.5em 0.8em;
	margin-bottom: 0.1em;
	font-size: 1.6rem;
	width: 8.75em;
	border-radius: 0.5em;
	background-color: var(--grayish-blue);
	color: var(--white);
	line-height: 1.6;
	text-transform: uppercase;
	transition: color var(--transition-time),
		background-color var(--transition-time);
	font-weight: $weight-500;

	&--right {
		background-color: var(--soft-red);
	}
}
</style>
