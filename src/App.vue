<script setup>
import { reactive } from 'vue'
import { data } from './data'

const DEFAULT_DATA = {
	commentBox: data.comments,
}

const newData = reactive(DEFAULT_DATA)

console.log(newData.commentBox)
</script>
<template>
	<main class="main">
		<div
			class="box"
			v-for="(value, index) in newData.commentBox"
			:key="value.id">
			<div class="upperBox">
				<img
					:src="value.user.image.webp"
					alt="Profile picture"
					class="avatar" />
				<p class="nick">{{ value.user.username }}</p>
				<p class="time">{{ value.createdAt }}</p>
			</div>
			<p class="desc">
				{{ value.content }}
			</p>
			<div class="bottomBox">
				<div class="btnsBox">
					<button class="leftBtn">+</button>
					<p class="votes">{{ value.score }}</p>
					<button class="rightBtn">-</button>
				</div>
				<button class="reply">
					<img src="./images/icon-reply.svg" alt="" class="replyIcon" />
					Reply
				</button>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
@use './sass/utilities/reset.scss';
@use './sass/Main.scss';

body {
	margin: 2em 1em;
	font-family: 'Rubik', serif;
	font-size: 1.6rem;
	background-color: $very-light-gray;
	background-color: #333;
}

.wrapper {
	width: 100%;
	max-width: 1220px;
	margin: 0 auto;
}
</style>
