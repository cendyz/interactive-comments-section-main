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
					<p v-if="value.user.username === 'juliusomo'" class="you">you</p>
					<p class="time">{{ value.createdAt }}</p>
				</div>
				<p class="desc">
					{{ value.content }}
				</p>
				<div class="bottomBox">
					<div class="btnsBox">
						<button
							:class="['leftBtn', { disableVote: value.plusActive }]"
							@click="handleMainCommentVote(index, 'up')">
							+
						</button>
						<p class="votes">{{ value.score }}</p>
						<button
							:class="['rightBtn', { disableVote: value.minusActive }]"
							@click="handleMainCommentVote(index, 'down')">
							-
						</button>
					</div>

					<button class="reply" v-if="value.user.username !== 'juliusomo'">
						<img :src="replyIcon" alt="Reply icon" class="replyIcon" />
						Reply
					</button>

					<div
						class="ownButtons"
						v-if="value.user.username == 'juliusomo'">
						<button class="delete" @click="openModal">
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
			<section
				class="mainReplyBox"
				v-if="newData.commentBox[index].replies.length > 0">
				<div
					class="insdieReplyBox"
					v-for="(value, index) in newData.commentBox[index].replies"
					:key="value.id">
					<div class="upperBox">
						<img
							:src="value.user.image.webp"
							alt="Profile picture"
							class="avatar" />
						<p class="nick">{{ value.user.username }}</p>
						<p v-if="value.user.username === 'juliusomo'" class="you">
							you
						</p>
						<p class="time">{{ value.createdAt }}</p>
					</div>

					<p class="desc">
						<span class="calledUser">@{{ value.replyingTo }}</span>
						{{ value.content }}
					</p>
					<div class="bottomBox">
						<div class="btnsBox">
							<button
								class="leftBtn"
								@click="handleReplyVote(value, 'up')">
								+
							</button>
							<p class="votes">{{ value.score }}</p>
							<button
								class="rightBtn"
								@click="handleReplyVote(value, 'down')">
								-
							</button>
						</div>
						<button
							class="reply"
							v-if="value.user.username !== 'juliusomo'">
							<img :src="replyIcon" alt="Reply icon" class="replyIcon" />
							Reply
						</button>
						<div
							class="ownButtons"
							v-if="value.user.username == 'juliusomo'">
							<button class="delete" @click="openModal">
								<img
									:src="deleteIcon"
									alt="Trash icon"
									class="deleteIcon" />
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
		</section>
		<div class="commentBox">
			<textarea
				id="textarea"
				placeholder="Add a comment..."
				v-model="content"
				class="textArea"></textarea>
			<div class="downBox">
				<img :src="ownAvatar" alt="Your avatar" class="avatar" />
				<button class="send" type="button" @click="addComment">
					send
				</button>
			</div>
		</div>
	</main>
	<!-- <Modal :isOpen="isOpen" @close="isOpen = $event" /> -->
</template>

<script setup>
import { reactive, ref } from 'vue'
import { data } from '../data'
import Nav from './Nav.vue'
import Modal from '@/components/utils/Modal.vue'
import editIcon from '@/images/icon-edit.svg'
import deleteIcon from '@/images/icon-delete.svg'
import replyIcon from '@/images/icon-reply.svg'
import { nanoid } from 'nanoid'
import ownAvatar from '@/images/avatars/image-juliusomo.webp'

const DEFAULT_DATA = {
	commentBox: data.comments,
}

const newData = reactive(DEFAULT_DATA)
const content = ref('')

const handleMainCommentVote = (index, type) => {
	const comment = newData.commentBox[index]
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

const isOpen = ref(false)

const openModal = () => {
	isOpen.value = !isOpen.value
}

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

const addComment = () => {
	newData.commentBox.push({
		id: nanoid(),
		content: content.value,
		createdAt: 'few seconds ago',
		score: 0,
		user: {
			image: {
				webp: ownAvatar,
			},
			username: 'juliusomo',
		},
		replies: [],
		plusActive: false,
		minusActive: false,
	})

	content.value = ''
}
</script>

<style scoped lang="scss">
@include mainBox;
@include voteBtns;
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
}

.box,
.insdieReplyBox {
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
	display: flex;
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
	transition: color var(--transition-time);
}

.you {
	padding: 0.2em 0.6em;
	border-radius: 0.2em;
	background-color: var(--moderate-blue);
	color: var(--white);
	font-size: 1.2rem;
	font-weight: $weight-500;
	transition: color var(--transition-time),
		background-color var(--transition-time);
}

.commentBox,
.textArea {
	padding: 1em;
}

.commentBox {
	background-color: var(--white);
	border-radius: 0.5em;
	transition: background-color 0.2s;
}

.textArea {
	width: 100%;
	min-height: 6.25em;
	max-height: 6.25em;
	background-color: var(--white);
	border: 1px solid var(--light-gray);
	color: var(--dark-blue);
	border-radius: 0.5em;
	overflow: scroll;
	transition: border var(--transition-time),
		background-color var(--transition-time);
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
	color: var(--white);
	text-transform: uppercase;
	font-size: 1.6rem;
	background-color: var(--moderate-blue);
	border-radius: 0.5em;
	transition: background-color var(--transition-time),
		color var(--transition-time);
}
</style>
