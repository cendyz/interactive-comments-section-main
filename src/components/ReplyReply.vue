<template>
	<div
		class="flex items-start gap-x-4 mt-4 p-8 bg-white dark:bg-whiteDARK rounded-xl"
		v-show="
			props.secondIndex === props.replyCommentIndex &&
			props.mainIndex !== props.replyCommentIndex
		">
		<img
			:src="props.data.data.currentUser.image.webp"
			alt="own profile picture"
			class="w-14" />
		<textarea
			id="reply-comment"
			:class="[
				'p-5 w-full rounded-lg bg-white dark:bg-whiteDARK text-dark-blue border dark:text-darkBlueDARK border-dark-blue dark:border-darkBlueDARK min-h-20 max-h-32 overflow-y-scroll outline-none focus:border-moderate-blue dark:focus:border-moderateBlueDARK',
				{ 'error-border': props.errorBorder },
				{ 'no-error-border': textareaContent.length > 0 },
			]"
			v-model.trim="textareaContent"></textarea>
		<button
			type="button"
			class="py-4 px-8 text-white bg:text-whiteDARK bg-moderate-blue dark:bg-moderateBlueDARK uppercase rounded-2xl"
			@click="replyToReply(props.mainIndex, props.secondIndex)">
			reply
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const textareaContent = ref('')
const props = defineProps({
	data: Object,
	secondIndex: Number,
	replyCommentIndex: Number,
	mainIndex: Number,
	replyToReply: Function,
	errorBorder: Boolean,
})

const emit = defineEmits(['shareAreaContent'])

const replyToReply = (mainIndex, secondIndex) => {
	emit('shareAreaContent', textareaContent.value)
	props.replyToReply(mainIndex, secondIndex)
	textareaContent.value = ''
}
</script>
