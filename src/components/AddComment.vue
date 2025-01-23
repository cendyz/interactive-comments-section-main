<template>
	<div
		class="p-8 pr-9 rounded-2xl bg-white text-2xl flex items-start gap-x-2">
		<img :src="avatar" alt="profile picture" class="block w-14" />
		<textarea
			v-model="updatedText"
			:class="[
				'w-full p-6 mb-3 border-light-grayish-blue border rounded-xl max-h-[9rem] min-h=[9rem] focus:border-1',
				{ 'error-border': errorBorder },
				{ 'no-error-border': updatedText.length > 0 },
			]"></textarea>

		<button
			type="button"
			@click="addComment"
			class="py-4 px-8 text-white bg-moderate-blue uppercase rounded-2xl">
			send
		</button>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import avatar from '@/images/avatars/image-juliusomo.webp'
import { data } from '@/data'
import { nanoid } from 'nanoid'
const updatedText = ref('')
const errorBorder = ref(false)
const newData = reactive({ data })

const addComment = () => {
	if (updatedText.value !== '') {
		newData.data.comments.push({
			id: nanoid(),
			content: updatedText.value,
            createdAt: 'Now',
			score: 0,
			user: {
				image: {
					webp: avatar,
				},
				username: 'juliusomo',
			},
			replies: [],
		})

		errorBorder.value = false
        updatedText.value = ''
	} else {
		errorBorder.value = true
	}
}
</script>
