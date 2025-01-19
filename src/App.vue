<script setup>
import { reactive } from 'vue'
import { data } from './data'
import replyIcon from './images/icon-reply.svg'
import VoteBtns from './components/Utils/VoteBtns.vue'
import CommentBox from './components/CommentBox.vue'
import ReplyBoxes from './components/ReplyBoxes.vue'

const DEFAULT_DATA = {
	commentBox: data.comments,
}

const newData = reactive(DEFAULT_DATA)
</script>
<template>
	<main class="main">
		<div
			class="mainBox"
			v-for="(value, index) in newData.commentBox"
			:key="value.id">
			<div class="box">
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
					<VoteBtns
						@handleVote="handleVote"
						:index="index"
						:value="value"
						:newData="newData.commentBox" />
					<button class="reply">
						<img :src="replyIcon" alt="Reply icon" class="replyIcon" />
						Reply
					</button>
				</div>
			</div>
			<ReplyBoxes :index="index" :newData="newData" />
		</div>
		<CommentBox />
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
}
</style>
