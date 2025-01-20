<script setup>
import editIcon from '../images/icon-edit.svg'
import deleteIcon from '../images/icon-delete.svg'
import replyIcon from '../images/icon-reply.svg'
import RepliesVoteBtns from './Utils/RepliesVoteBtns.vue'

const props = defineProps({
	index: Number,
	newData: Object,
})
</script>

<template>
	<section
		class="mainReplyBox"
		v-if="props.newData.commentBox[props.index].replies.length > 0">
		<div
			class="insdieReplyBox"
			v-for="value in props.newData.commentBox[props.index].replies"
			:key="value.id">
			<div class="upperBox">
				<img
					:src="value.user.image.webp"
					alt="Profile picture"
					class="avatar" />
				<p class="nick">{{ value.user.username }}</p>
				<p v-if="value.user.username === 'juliusomo'" class="you">you</p>
				<p class="time">{{ value.createdAt }}</p>
			</div>
			<p class="desc">
				<span class="calledUser">@{{ value.replyingTo }}</span>
				{{ value.content }}
			</p>
			<div class="bottomBox">
				<RepliesVoteBtns :value="value" />
				<button class="reply" v-if="value.user.username !== 'juliusomo'">
					<img :src="replyIcon" alt="Reply icon" class="replyIcon" />
					Reply
				</button>
				<div class="ownButtons" v-if="value.user.username == 'juliusomo'">
					<button class="delete">
						<img :src="deleteIcon" alt="Trash icon" class="deleteIcon" />
						Delete
					</button>
					<button class="edit">
						<img :src="editIcon" alt="Pencil icon" class="editIcon" />
						Edit
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
@include mainBox;
.ownButtons,
.delete,
.edit,
.upperBox {
	display: flex;
}

.mainReplyBox {
	margin-left: auto;
	border-left: 2px solid var(--light-grayish-blue);
	transition: border-left var(--transition-time);
}

.insdieReplyBox {
	padding: 1em;
	width: 93%;
	border-radius: 0.5em;
	margin-left: auto;
	background-color: var(--white);
	margin-bottom: 1em;
	transition: background-color var(--transition-time);
}
.upperBox {
	align-items: center;
	column-gap: 1em;
}

.calledUser {
	color: var(--moderate-blue);
	font-weight: $weight-500;
	transition: color 0.2s;
}

.you {
	padding: 0.2em 0.6em;
	border-radius: 0.2em;
	background-color: var(--moderate-blue);
	color: var(--white);
	font-size: 1.2rem;
	font-weight: $weight-500;
	transition: color 0.2s, background-color 0.2s;
}

.ownButtons {
	column-gap: 1.2em;
}

.delete,
.edit {
	align-items: center;
	column-gap: 0.3em;
	font-weight: $weight-500;
	font-size: 1.6rem;
	transition: color var(--transition-time);
}

.delete {
	color: var(--soft-red);
}

.edit {
	color: var(--moderate-blue);
}
</style>
