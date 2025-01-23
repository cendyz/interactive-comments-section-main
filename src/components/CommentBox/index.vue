<script setup lang="ts">
import { reactive, ref, provide } from 'vue'
import { data } from '@/data'
import { nanoid } from 'nanoid'
import AddMainReply from '../AddMainReply.vue'
import MainReply from '../MainReply.vue'
import ReplyReply from '../ReplyReply.vue'
import replyIcon from '@/images/icon-reply.svg'
import ownAvatar from '@/images/avatars/image-juliusomo.webp'

const commentsData = reactive({ data })
const replyIndex = ref(null)
const replyCommentIndex = ref(null)
const textareaContent = ref('')
const errorBorder = ref(false)
const passedMainIndex = ref(null)
const passedSecondIndex = ref(null)

const emit = defineEmits([
	'changeIsOpen',
	'closeModal',
	'passMainIndex',
	'passSecondIndex',
])

const handleToggle = (
	actualRef: typeof replyIndex,
	otherRef: typeof replyIndex,
	index: number
) => {
	errorBorder.value = false
	otherRef.value = null
	if (actualRef.value === otherRef.value) {
		replyIndex.value = null
	}
	actualRef.value = actualRef.value === index ? null : index
}

const handleReply = (index: number) => {
	textareaContent.value = ''
	handleToggle(replyIndex, replyCommentIndex, index)
}

const handleCommentReply = (index: number) => {
	textareaContent.value = ''
	handleToggle(replyCommentIndex, replyIndex, index)
}

const addReply = (index: number, reply: string) => {
	if (textareaContent.value !== '') {
		const id = nanoid()
		data.comments[index].replies.push({
			id: id as any,
			content: textareaContent.value,
			createdAt: 'Now',
			score: 0,
			replyingTo: reply,
			user: {
				image: {
					webp: ownAvatar,
				},
				username: data.currentUser.username,
			},
			activePlus: false,
			activeMinus: false,
		})
		replyIndex.value = null
		replyCommentIndex.value = null
		textareaContent.value = ''
		errorBorder.value = false
	} else {
		errorBorder.value = true
	}
}

const formatTimeAgo = (timestamp: number) => {
	const seconds = Math.floor((Date.now() - timestamp) / 1000)

	if (seconds < 60) {
		return `${seconds} seconds ago`
	} else if (seconds < 3600) {
		const minutes = Math.floor(seconds / 60)
		return `${minutes} minutes ago`
	} else if (seconds < 86400) {
		const hours = Math.floor(seconds / 3600)
		return `${hours} hours ago`
	} else {
		const days = Math.floor(seconds / 86400)
		return `${days} days ago`
	}
}

const replyToMain = (mainIndex: number) => {
	const reply = data.comments[mainIndex].user.username
	addReply(mainIndex, reply)
}
const replyToReply = (mainIndex: number, replyIndex: number) => {
	const newReply =
		data.comments[mainIndex].replies[replyIndex].user.username
	addReply(mainIndex, newReply)
}

const handleVote = (item: any, type: string) => {
	if (type === 'up') {
		if (!item.plusActive && !item.minusActive) {
			item.score++
			item.plusActive = true
		} else if (item.minusActive) {
			item.score++
			item.minusActive = false
		}
	} else if (type === 'down') {
		if (!item.plusActive && !item.minusActive) {
			item.score--
			item.minusActive = true
		} else if (item.plusActive) {
			item.score--
			item.plusActive = false
		}
	}
}

const handleMainCommentVote = (index: number, type: string) => {
	const comment = commentsData.data.comments[index]
	handleVote(comment, type)
}

const handleReplyVote = (
	index: number,
	mainIndex: number,
	type: string
) => {
	const comment = commentsData.data.comments[mainIndex].replies[index]
	handleVote(comment, type)
}

const openModal = (mainIndex: number, secondIndex: number) => {
	emit('changeIsOpen', true)
	passedMainIndex.value = mainIndex
	passedSecondIndex.value = secondIndex
	emit('passMainIndex', passedMainIndex.value)
	emit('passSecondIndex', passedSecondIndex.value)
}
</script>

<template>
	<section class="grid gap-y-8 p-6">
		<div
			v-for="(cbValue, cbIndex) in commentsData.data.comments"
			:key="cbValue.id">
			<div class="p-8 pr-9 rounded-2xl bg-white text-2xl">
				<div class="flex items-center mb-7 gap-x-7">
					<img
						:src="cbValue.user.image.webp"
						alt="profile picture"
						class="block w-14" />
					<p class="text-dark-blue font-bold">
						{{ cbValue.user.username }}
					</p>
					<p class="text-grayish-blue">{{ cbValue.createdAt }}</p>
				</div>
				<p class="text-grayish-blue mb-8">
					{{ cbValue.content }}
				</p>
				<div class="flex items-center justify-between">
					<div
						class="flex items-center bg-light-gray rounded-2xl min-w-32 justify-center">
						<button
							class="font-bold text-2xl text-light-grayish-blue py-3 px-5"
							@click="handleMainCommentVote(cbIndex, 'up')">
							+
						</button>
						<p class="font-bold text-2xl text-moderate-blue">
							{{ cbValue.score }}
						</p>
						<button
							class="font-bold text-2xl text-light-grayish-blue py-3 px-5"
							@click="handleMainCommentVote(cbIndex, 'down')">
							-
						</button>
					</div>
					<button
						class="flex items-center gap-x-3"
						type="button"
						@click="handleReply(cbIndex)">
						<img :src="replyIcon" alt="reply icon" />
						<span class="font-bold text-2xl text-moderate-blue"
							>Reply</span
						>
					</button>
				</div>
			</div>

			<AddMainReply
				:mainCommentIndex="cbIndex"
				:replyIndex="replyIndex"
				:data="commentsData"
				:mainCommentValue="cbValue"
				:errorBorder="errorBorder"
				:replyToMain="replyToMain"
				@shareAreaContent="textareaContent = $event" />

			<div class="pl-5 border-l-2 border-grayish-blue">
				<div class="mt-5" v-if="cbValue.replies.length > 0">
					<div
						class="mb-5"
						v-for="(rpValue, rpIndex) in commentsData.data.comments[
							cbIndex
						].replies">
						<MainReply
							:secondValue="rpValue"
							:secondIndex="rpIndex"
							:mainIndex="cbIndex"
							:handleReplyVote="handleReplyVote"
							:replyCommentIndex="replyCommentIndex"
							:handleCommentReply="handleCommentReply"
							:openModal="openModal" />

						<ReplyReply
							:data="commentsData"
							:secondIndex="rpIndex"
							:replyCommentIndex="replyCommentIndex"
							:mainIndex="cbIndex"
							:replyToReply="replyToReply"
							:errorBorder="errorBorder"
							@shareAreaContent="textareaContent = $event" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
