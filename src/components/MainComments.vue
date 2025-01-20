<script setup>
import { reactive } from 'vue'
import { data } from '../data'
import { nanoid } from 'nanoid'
import Nav from './Nav.vue'
import replyIcon from '../images/icon-reply.svg'
import VoteBtns from '../components/Utils/VoteBtns.vue'
import CommentBox from '../components/CommentBox.vue'
import ReplyBoxes from '../components/ReplyBoxes.vue'

const DEFAULT_DATA = {
	commentBox: data.comments,
}

const newData = reactive(DEFAULT_DATA)

const addComment = (value, index) => {
	// data.comments[index].replies.push({ id: nanoid(), replyingTo: value.user.username })
	newData.commentBox[index].replies.push({
		id: nanoid(),
		content: '',
		createdAt: '1 week ago',
		score: '',
		replyingTo: '',
		user: {
			image: {
				png: './images/avatars/image-ramsesmiron.png',
				webp: replyIcon,
			},
			username: '',
		},
		plusActive: false,
		minusActive: false,
	})
}
</script>
<template>
	<Nav />
	<main class="main">
		<section
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
						:index="index"
						:value="value"
						:newData="newData.commentBox" />
					<button class="reply" @click="addComment(value, index)">
						<img :src="replyIcon" alt="Reply icon" class="replyIcon" />
						Reply
					</button>
				</div>
			</div>
			<ReplyBoxes :index="index" :newData="newData" />
		</section>
		<CommentBox />
		<div class="addComment">
			<textarea id="newComment" class="addTextarea"></textarea>
		</div>
	</main>
</template>

<style scoped lang="scss">
@include mainBox;
.delete,
.edit,
.ownButtons {
	display: flex;
}

.box,
.insdieReplyBox {
	padding: 1em;
}

.box {
	margin-bottom: 1em;
	background-color: var(--white);
	border-radius: 0.5em;
	transition: background-color var(--transition-time);
}

.upperBox {
	align-items: center;
	column-gap: 1em;
}

.mainReplyBox {
	margin-left: auto;
	border-left: 2px solid var(--light-grayish-blue);
	transition: border-left var(--transition-time);
}

.insdieReplyBox {
	width: 93%;
	border-radius: 0.5em;
	margin-left: auto;
	background-color: var(--light-gray);
	margin-bottom: 1em;
	transition: background-color var(--transition-time);
}

.calledUser {
	color: var(--moderate-blue);
	font-weight: $weight-500;
	transition: color var(--transition-time);
}

.you {
	padding: 0.2em 0.6em;
	border-radius: 0.2em;
	background-color: var(--moderate-blue);
	color: var(--white);
	font-size: 1.2rem;
	font-weight: $weight-500;
	transition: background-color var(--transition-time),
		color var(--transition-time);
}

.ownButtons {
	column-gap: 1.2em;
}
</style>
