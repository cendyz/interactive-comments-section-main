<script setup>
import ownAvatar from '../images/avatars/image-juliusomo.webp'
</script>

<template>
	<div class="commentBox">
		<textarea
			id="textarea"
			placeholder="Add a comment..."
			class="textArea"></textarea>
		<div class="downBox">
			<img :src="ownAvatar" alt="Your avatar" class="avatar" />
			<button class="send" type="button">send</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.commentBox,
.textArea {
	padding: 1em;
}

.commentBox {
	background-color: $white;
	border-radius: 0.5em;
}

.textArea {
	width: 100%;
	min-height: 6.25em;
	max-height: 6.25em;
	border: 1px solid $light-gray;
	border-radius: 0.5em;
	overflow: scroll;
}

.downBox {
	display: flex;
	margin-top: 1em;
	align-items: center;
	justify-content: space-between;
}

.avatar {
	display: block;
	width: 10%;
}

.send {
	padding: 0.6em 1.5em;
	color: $white;
	text-transform: uppercase;
	font-size: 1.6rem;
	background-color: $moderate-blue;
	border-radius: 0.5em;
}
</style>
