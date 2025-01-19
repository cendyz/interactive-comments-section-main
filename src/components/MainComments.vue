<script setup>
import { reactive } from 'vue'
import { data } from '../data'
import replyIcon from '../images/icon-reply.svg'
import VoteBtns from '../components/Utils/VoteBtns.vue'
import CommentBox from '../components/CommentBox.vue'
import ReplyBoxes from '../components/ReplyBoxes.vue'

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
	background-color: $white;
	border-radius: 0.5em;
}

.upperBox {
	align-items: center;
	column-gap: 1em;
}

.mainReplyBox {
	margin-left: auto;
	border-left: 2px solid $light-grayish-blue;
}

.insdieReplyBox {
	width: 93%;
	border-radius: 0.5em;
	margin-left: auto;
	background-color: $white;
	margin-bottom: 1em;
}

.calledUser {
	color: $moderate-blue;
	font-weight: $weight-500;
}

.you {
	padding: 0.2em 0.6em;
	border-radius: 0.2em;
	background-color: $moderate-blue;
	color: $white;
	font-size: 1.2rem;
	font-weight: $weight-500;
}

.ownButtons {
	column-gap: 1.2em;
}
</style>
