<template>
	<section class="grid gap-y-4 p-6 md:w-[680px] md:mx-auto">
		<div
			v-for="(cbValue, cbIndex) in commentsData.data.comments"
			:key="cbValue.id">
			<div
				class="p-8 pr-9 rounded-2xl bg-white dark:bg-whiteDARK text-2xl md:flex md:items-start md:gap-x-[1.5em]">
				<div class="md:flex md:flex-col md:order-2 md:w-full">
					<div class="flex items-center mb-7 gap-x-7">
						<img
							:src="cbValue.user.image.webp"
							alt="profile picture"
							class="block w-14" />
						<p class="text-dark-blue dark:text-darkBlueDARK">
							{{ cbValue.user.username }}
						</p>
						<p
							v-show="cbValue.user.username === 'juliusomo'"
							class="px-3 pt-1 pb-[5px] bg-moderate-blue dark:text-whiteDARK text-white dark:bg-moderateBlueDARK text-2xl rounded-lg">
							you
						</p>
						<p class="text-grayish-blue dark:text-grayishBlueDARK">
							{{ cbValue.createdAt }}
						</p>
						<button
							v-if="cbValue.user.username !== 'juliusomo'"
							class="hidden md:flex md:ml-auto items-center gap-x-3"
							type="button"
							@click="handleReply(cbIndex)">
							<img :src="replyIcon" alt="reply icon" />
							<span
								class="font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK"
								>Reply</span
							>
						</button>
						<div
							class="gap-x-8 hidden md:flex md:ml-auto"
							v-show="cbValue.user.username === 'juliusomo'">
							<button
								class="flex items-center"
								type="button"
								@click="openModal(cbIndex, null)">
								<img :src="deleteIcon" alt="trash icon" />
								<span
									class="ml-2 font-bold text-soft-red dark:text-softRedDARK"
									>Delete</span
								>
							</button>
							<button
								class="flex items-center"
								type="button"
								v-if="cbIndex !== activeEditindex">
								<img :src="editIcon" alt="arrow icon" />
								<span
									class="ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK"
									@click="handleEdit(cbIndex)"
									>Edit</span
								>
							</button>
							<button
								v-else-if="cbIndex === activeEditindex"
								class="flex items-center gap-x-3"
								type="button"
								@click="updateComment(cbIndex)">
								<img :src="replyIcon" alt="reply icon" />
								<span
									class="text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold"
									>Update</span
								>
							</button>
						</div>
					</div>
					<textarea
						v-if="isEdit && cbIndex === activeEditindex"
						v-model="updatedText"
						id="mainReply"
						:class="[
							'w-full p-6 mb-3 border-b-light-grayish-blue bg-white dark:bg-whiteDARK text-dark-blue dark:text-darkBlueDARK dark:border-b-lightGrayishBlueDARK border rounded-xl max-h-[9rem] min-h=[9rem] outline-none focus:border-dark-blue dark:focus:border-darkBlueDARK focus:border-2',
							{ 'border-soft-red dark:border-softRedDARK': errorBorder },
							{
								'border-moderate-blue dark:border-moderateBlueDARK':
									updatedText.length > 0,
							},
						]"></textarea>
					<p
						v-else
						class="text-grayish-blue dark:text-grayishBlueDARK mb-8">
						{{ cbValue.content }}
					</p>
				</div>

				<div class="flex items-center justify-between">
					<div
						class="flex items-center bg-light-gray dark:bg-lightGrayDARK rounded-2xl min-w-32 justify-center md:flex-col md:min-w-[2.5em]">
						<button
							:class="[
								'font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5',
							]"
							@click="handleMainCommentVote(cbIndex, 'up')">
							+
						</button>
						<p
							class="font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK">
							{{ cbValue.score }}
						</p>
						<button
							class="font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5"
							@click="handleMainCommentVote(cbIndex, 'down')">
							-
						</button>
					</div>
					<button
						v-if="cbValue.user.username !== 'juliusomo'"
						class="flex items-center gap-x-3 md:hidden"
						type="button"
						@click="handleReply(cbIndex)">
						<img :src="replyIcon" alt="reply icon" />
						<span
							class="font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK"
							>Reply</span
						>
					</button>

					<div
						class="flex gap-x-8 md:hidden"
						v-show="cbValue.user.username === 'juliusomo'">
						<button
							class="flex items-center"
							type="button"
							@click="openModal(cbIndex, null)">
							<img :src="deleteIcon" alt="trash icon" />
							<span
								class="ml-2 font-bold text-soft-red dark:text-softRedDARK"
								>Delete</span
							>
						</button>
						<button
							class="flex items-center"
							type="button"
							v-if="cbIndex !== activeEditindex">
							<img :src="editIcon" alt="arrow icon" />
							<span
								class="ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK"
								@click="handleEdit(cbIndex)"
								>Edit</span
							>
						</button>
						<button
							v-else-if="cbIndex === activeEditindex"
							class="flex items-center gap-x-3"
							type="button"
							@click="updateComment(cbIndex)">
							<img :src="replyIcon" alt="reply icon" />
							<span
								class="text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold"
								>Update</span
							>
						</button>
					</div>
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

			<div
				class="pl-5 border-l-4 md:pl-[3em] md:ml-[2.5em] border-light-gray dark:border-lightGrayDARK rounded-md">
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
							:handleCommentReply="handleCommentReply"
							:openModal="openModal"
							:commentsData="commentsData"
							:updatedText="updatedText"
							@letsUpdateText="updatedText = $event"
							@updateCommentText="updatedText = $event"
							@cleanUpdatedText="updatedText = $event" />

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
		<AddComment :commentsData="commentsData" />
	</section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { data } from '@/data'
import { nanoid } from 'nanoid'
import AddMainReply from '../AddMainReply.vue'
import MainReply from '../MainReply.vue'
import ReplyReply from '../ReplyReply.vue'
import replyIcon from '@/images/icon-reply.svg'
import ownAvatar from '@/images/avatars/image-juliusomo.webp'
import AddComment from '../AddComment.vue'
import deleteIcon from '@/images/icon-delete.svg'
import editIcon from '@/images/icon-edit.svg'

const commentsData = reactive({ data })
const replyIndex = ref(null)
const replyCommentIndex = ref(null)
const textareaContent = ref('')
const activeEditindex = ref(null)
const updatedText = ref('')
const errorBorder = ref(false)
const passedMainIndex = ref(null)
const passedSecondIndex = ref(null)
const isEdit = ref(false)

const emit = defineEmits([
	'changeIsOpen',
	'closeModal',
	'passMainIndex',
	'passSecondIndex',
	'cleanUpdateText',
])

const handleToggle = (actualRef, otherRef, index) => {
	errorBorder.value = false
	otherRef.value = null
	actualRef.value = actualRef.value === index ? null : index
}

const handleReply = index => {
	textareaContent.value = ''
	emit('cleanUpdateText', '')
	handleToggle(replyIndex, replyCommentIndex, index)
}

const handleCommentReply = index => {
	textareaContent.value = ''
	handleToggle(replyCommentIndex, replyIndex, index)
}

const handleEdit = mainIndex => {
	textareaContent.value = commentsData.data.comments[mainIndex].content
	updatedText.value = textareaContent.value
	activeEditindex.value = mainIndex
	isEdit.value = true
}

const addReply = (index, reply) => {
	if (textareaContent.value !== '') {
		data.comments[index].replies.push({
			id: nanoid(),
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

const updateComment = mainIndex => {
	if (updatedText.value !== '') {
		commentsData.data.comments[mainIndex].content = updatedText.value
		updatedText.value = ''
		isEdit.value = false
		errorBorder.value = false
		activeEditindex.value = null
	} else {
		errorBorder.value = true
	}
}

// const formatTimeAgo = (timestamp: number) => {
// 	const seconds = Math.floor((Date.now() - timestamp) / 1000)

// 	if (seconds < 60) {
// 		return `${seconds} seconds ago`
// 	} else if (seconds < 3600) {
// 		const minutes = Math.floor(seconds / 60)
// 		return `${minutes} minutes ago`
// 	} else if (seconds < 86400) {
// 		const hours = Math.floor(seconds / 3600)
// 		return `${hours} hours ago`
// 	} else {
// 		const days = Math.floor(seconds / 86400)
// 		return `${days} days ago`
// 	}
// }

const replyToMain = mainIndex => {
	const reply = data.comments[mainIndex].user.username
	addReply(mainIndex, reply)
}
const replyToReply = (mainIndex, replyIndex) => {
	const newReply =
		data.comments[mainIndex].replies[replyIndex].user.username
	addReply(mainIndex, newReply)
}

const handleVote = (item, type) => {
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

const handleMainCommentVote = (index, type) => {
	const comment = commentsData.data.comments[index]
	handleVote(comment, type)
}

const handleReplyVote = (index, mainIndex, type) => {
	const comment = commentsData.data.comments[mainIndex].replies[index]
	handleVote(comment, type)
}

const openModal = (mainIndex, secondIndex) => {
	emit('changeIsOpen', true)
	passedMainIndex.value = mainIndex
	passedSecondIndex.value = secondIndex || null
	emit('passMainIndex', passedMainIndex.value)
	emit('passSecondIndex', passedSecondIndex.value)
}
</script>
