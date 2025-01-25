<template>
	<div
		class="flex items-start gap-x-4 mt-4 p-8 bg-white dark:bg-whiteDARK rounded-xl"
		v-show="props.mainCommentIndex === props.replyIndex"
		:key="props.mainCommentValue.id">
		<img
			:src="props.data.data.currentUser.image.webp"
			alt="own profile picture"
			class="w-14" />
		<textarea
			id="reply-comment"
			:class="[
				'p-5 w-full rounded-lg bg-white dark:bg-whiteDARK text-dark-blue dark:text-darkBlueDARK border border-dark-blue dark:border-darkBlueDARK min-h-20 max-h-32 overflow-y-scroll outline-none focus:border-moderate-blue dark:focus:border-moderateBlueDARK',
				{ 'error-border': props.errorBorder },
				{ 'no-error-border': textareaContent.length > 0 },
			]"
			v-model.trim="textareaContent"></textarea>
		<button
			type="button"
			class="py-4 px-8 text-white dark:text-whiteDARK bg-moderate-blue dark:bg-moderateBlueDARK uppercase rounded-2xl"
			@click="handleReply(props.mainCommentIndex)">
			reply
		</button>
	</div>
</template>

<script setup lang=ts>
import { ref } from 'vue'
const props = defineProps({
	mainCommentIndex: Number,
	replyIndex: Number,
	data: Object,
	mainCommentValue: Object,
	errorBorder: Boolean,
	replyToMain: Function,
})
const textareaContent = ref('')

const emit = defineEmits(['shareAreaContent'])

const handleReply = index => {
	emit('shareAreaContent', textareaContent.value)
	props.replyToMain(index)
	textareaContent.value = ''
}
</script>
