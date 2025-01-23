<script setup lang="ts">
import { ref, reactive } from 'vue'
import { data } from '@/data'
import replyIcon from '@/images/icon-reply.svg'
import deleteIcon from '@/images/icon-delete.svg'
import editIcon from '@/images/icon-edit.svg'
const isEdit = ref(false)
const newData = reactive({ data })
const textAreaText = ref('')
const updatedText = ref('')
const errorBorder = ref(false)

const props = defineProps({
	secondValue: Object,
	secondIndex: Number,
	mainIndex: Number,
	handleReplyVote: Function,
	handleCommentReply: Function,
	openModal: Function,
})

const handleReplyVote = (
	secIndex: number,
	firstIndex: number,
	type: string
) => {
	props.handleReplyVote(secIndex, firstIndex, type)
}

const handleCommentReply = (index: number) => {
	props.handleCommentReply(props.secondIndex, props.mainIndex, index)
}

const openModal = (mainIndex: number, secondIndex: number) => {
	props.openModal(mainIndex, secondIndex)
}

const handleEdit = () => {
	textAreaText.value =
		newData.data.comments[props.mainIndex].replies[
			props.secondIndex
		].content
	updatedText.value = textAreaText.value
	isEdit.value = true
}

const updateComment = (mainIndex: number, secondIndex: number) => {
	if (updatedText.value !== '') {
		newData.data.comments[mainIndex].replies[secondIndex].content =
			updatedText.value
		updatedText.value = ''
		isEdit.value = false
		errorBorder.value = false
	} else {
		errorBorder.value = true
	}
}
</script>

<template>
	<div class="p-8 pr-9 rounded-2xl bg-white text-2xl">
		<div class="flex items-center mb-7 gap-x-5">
			<img
				:src="props.secondValue.user.image.webp"
				alt="profile picture"
				class="block w-14" />
			<p class="text-dark-blue font-bold">
				{{ props.secondValue.user.username }}
			</p>
			<p
				v-show="props.secondValue.user.username === 'juliusomo'"
				class="px-3 pt-1 pb-[3px] text-white bg-moderate-blue text-2xl rounded-lg">
				you
			</p>
			<p class="text-grayish-blue">{{ props.secondValue.createdAt }}</p>
		</div>
		<textarea
			v-if="isEdit"
			v-model="updatedText"
			:class="[
				'w-full p-6 mb-3 border-b-light-grayish-blue border rounded-xl max-h-[9rem] min-h=[9rem] outline-none focus:border-dark-blue focus:border-2',
				{ 'error-border': errorBorder },
				{ 'no-error-border': updatedText.length > 0 },
			]"></textarea>
		<p v-else class="text-grayish-blue mb-8">
			<span class="font-bold text-moderate-blue"
				>@{{ props.secondValue.replyingTo }}</span
			>
			{{ props.secondValue.content }}
		</p>
		<div class="flex items-center justify-between">
			<div
				class="flex items-center bg-light-gray rounded-2xl min-w-32 justify-center">
				<button
					class="font-bold text-2xl text-light-grayish-blue py-3 px-5"
					@click="
						handleReplyVote(props.secondIndex, props.mainIndex, 'up')
					">
					+
				</button>
				<p class="font-bold text-2xl text-moderate-blue">
					{{ props.secondValue.score }}
				</p>
				<button
					class="font-bold text-2xl text-light-grayish-blue py-3 px-5"
					@click="
						handleReplyVote(props.secondIndex, props.mainIndex, 'down')
					">
					-
				</button>
			</div>
			<button
				v-if="props.secondValue.user.username !== 'juliusomo'"
				class="flex items-center gap-x-3"
				type="button"
				@click="handleCommentReply(props.secondIndex)">
				<img :src="replyIcon" alt="reply icon" />
				<span class="text-2xl text-moderate-blue font-bold">Reply</span>
			</button>

			<div
				class="flex gap-x-8"
				v-show="props.secondValue.user.username === 'juliusomo'">
				<button
					class="flex items-center"
					type="button"
					@click="openModal(props.mainIndex, props.secondIndex)">
					<img :src="deleteIcon" alt="trash icon" />
					<span class="ml-2 font-bold text-soft-red">Delete</span>
				</button>
				<button class="flex items-center" type="button" v-if="!isEdit">
					<img :src="editIcon" alt="arrow icon" />
					<span
						class="ml-2 font-bold text-moderate-blue"
						@click="handleEdit"
						>Edit</span
					>
				</button>
				<button
					v-else
					class="flex items-center gap-x-3"
					type="button"
					@click="updateComment(props.mainIndex, props.secondIndex)">
					<img :src="replyIcon" alt="reply icon" />
					<span class="text-2xl text-moderate-blue font-bold">Update</span>
				</button>
			</div>
		</div>
	</div>
</template>
