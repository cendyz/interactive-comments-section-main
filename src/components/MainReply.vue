<template>
	<div
		class="p-8 pr-9 rounded-2xl bg-white dark:bg-whiteDARK text-2xl md:flex md:items-start">
		<div class="md:flex md:flex-col md:order-2 md:w-full">
			<div class="flex items-center mb-7 gap-x-5">
				<img
					:src="props.secondValue.user.image.webp"
					alt="profile picture"
					class="block w-14" />
				<p class="text-dark-blue dark:text-darkBlueDARK font-bold">
					{{ props.secondValue.user.username }}
				</p>
				<p
					v-show="props.secondValue.user.username === 'juliusomo'"
					class="px-3 pt-1 pb-[5px] bg-moderate-blue dark:text-whiteDARK text-white dark:bg-moderateBlueDARK text-2xl rounded-lg">
					you
				</p>
				<p class="text-grayish-blue">{{ props.secondValue.createdAt }}</p>
				<button
					v-if="props.secondValue.user.username !== 'juliusomo'"
					class="items-center gap-x-3 hidden md:flex md:ml-auto"
					type="button"
					@click="handleCommentReply(props.secondIndex)">
					<img :src="replyIcon" alt="reply icon" />
					<span
						class="text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold"
						>Reply</span
					>
				</button>
				<div
					class="gap-x-8 hidden md:inline-flex md:ml-auto"
					v-show="props.secondValue.user.username === 'juliusomo'">
					<button
						class="flex items-center"
						type="button"
						@click="openModal(props.mainIndex, props.secondIndex)">
						<img :src="deleteIcon" alt="trash icon" />
						<span
							class="ml-2 font-bold text-soft-red dark:text-softRedDARK"
							>Delete</span
						>
					</button>
					<button class="flex items-center" type="button" v-if="!isEdit">
						<img :src="editIcon" alt="arrow icon" />
						<span
							class="ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK"
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
						<span
							class="text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold"
							>Update</span
						>
					</button>
				</div>
			</div>
			<textarea
				v-if="isEdit"
				v-model="props.updatedText"
				id="updateReply"
				:class="[
					'w-full p-6 mb-3 bg-white text-dark-blue dark:text-darkBlueDARK dark:bg-whiteDARK border-b-light-grayish-blue dark:border-b-lightGrayishBlueDARK border rounded-xl h-[9rem] max-h-[25rem] min-h=[9rem] outline-none focus:border-dark-blue dark:focus:border-darkBlueDARK focus:border-2',
					{ 'bg-soft-red dark:bg-softRedDARK': errorBorder },
					{
						'border-moderate-blue dark:border-moderateBlueDARK':
							props.updatedText.length > 0,
					},
				]"></textarea>
			<p v-else class="text-grayish-blue mb-8 dark:text-grayishBlueDARK">
				<span
					class="font-bold text-moderate-blue dark:text-moderateBlueDARK"
					>@{{ props.secondValue.replyingTo }}</span
				>
				{{ props.secondValue.content }}
			</p>
		</div>

		<div class="flex items-center justify-between">
			<div
				class="flex items-center bg-light-gray dark:bg-lightGrayDARK rounded-2xl min-w-32 justify-center md:flex-col md:min-w-[2.5em] mr-[1.5em]">
				<button
					class="font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5"
					@click="
						handleReplyVote(props.secondIndex, props.mainIndex, 'up')
					">
					+
				</button>
				<p
					class="font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK">
					{{ props.secondValue.score }}
				</p>
				<button
					class="font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5"
					@click="
						handleReplyVote(props.secondIndex, props.mainIndex, 'down')
					">
					-
				</button>
			</div>
			<button
				v-if="props.secondValue.user.username !== 'juliusomo'"
				class="flex items-center gap-x-3 md:hidden"
				type="button"
				@click="handleCommentReply(props.secondIndex)">
				<img :src="replyIcon" alt="reply icon" />
				<span
					class="text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold"
					>Reply</span
				>
			</button>

			<div
				class="flex gap-x-8 md:hidden"
				v-if="props.secondValue.user.username === 'juliusomo'">
				<button
					class="flex items-center"
					type="button"
					@click="openModal(props.mainIndex, props.secondIndex)">
					<img :src="deleteIcon" alt="trash icon" />
					<span class="ml-2 font-bold text-soft-red dark:text-softRedDARK"
						>Delete</span
					>
				</button>
				<button class="flex items-center" type="button" v-if="!isEdit">
					<img :src="editIcon" alt="arrow icon" />
					<span
						class="ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK"
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
					<span
						class="text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold"
						>Update</span
					>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import replyIcon from '@/images/icon-reply.svg'
import deleteIcon from '@/images/icon-delete.svg'
import editIcon from '@/images/icon-edit.svg'
const isEdit = ref(false)
const textAreaText = ref('')
const errorBorder = ref(false)

const props = defineProps({
	secondValue: Object,
	secondIndex: Number,
	mainIndex: Number,
	handleReplyVote: Function,
	handleCommentReply: Function,
	openModal: Function,
	updatedText: String,
	commentsData: Object,
})

const emit = defineEmits([
	'letsUpdateText',
	'updateCommentText',
	'cleanUpdatedText',
])

const handleReplyVote = (
	secIndex: number,
	firstIndex: number,
	type: string
) => {
	props.handleReplyVote(secIndex, firstIndex, type)
}

const handleCommentReply = (index: number) => {
	emit('cleanUpdatedText', '')
	props.handleCommentReply(props.secondIndex, props.mainIndex, index)
}

const openModal = (mainIndex: number, secondIndex: number) => {
	props.openModal(mainIndex, secondIndex)
}

const handleEdit = () => {
	textAreaText.value =
		props.commentsData.data.comments[props.mainIndex].replies[
			props.secondIndex
		].content
	emit('letsUpdateText', textAreaText.value)
	isEdit.value = true
}

const updateComment = (mainIndex: number, secondIndex: number) => {
	if (props.updatedText !== '') {
		emit(
			'updateCommentText',
			props.commentsData.data.comments[mainIndex].replies[secondIndex].content
		)
		emit('cleanUpdatedText', '')

		isEdit.value = false
		errorBorder.value = false
	} else {
		errorBorder.value = true
	}
}
</script>
