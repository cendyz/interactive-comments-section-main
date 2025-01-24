<script setup lang="ts">
import { data } from '@/data'
import { reactive } from 'vue'
const newData = reactive({ data })
const props = defineProps({
	isOpen: Boolean,
	mainIndex: Number,
	secondIndex: Number,
})

const emit = defineEmits([
	'closeModal',
	'resetMainIndex',
	'resetSecondIndex',
])

const closeModal = () => {
	emit('closeModal', false)
}

const deleteComment = () => {
	if (props.secondIndex === null) {
		newData.data.comments.splice(props.mainIndex, 1)
	} else {
		newData.data.comments[props.mainIndex].replies.splice(
			props.secondIndex,
			1
		)
	}
	emit('closeModal', false)
	emit('resetMainIndex', null)
	emit('resetSecondIndex', null)
}
</script>

<template>
	<transition name="fade">
		<dialog :open="props.isOpen"
			class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] border-0 p-7 rounded-2xl bg-white z-20"
			v-if="props.isOpen">
			<h3
				class="mb-5 text-dark-blue first-letter:capitalize font-bolder text-3xl">
				delete comment
			</h3>
			<p class="text-grayish-blue">
				Are you sure you want to delete this comment? This will remove the
				comment and can't be undone.
			</p>
			<div class="mt-7 flex justify-between">
				<button
					class="py-3 px-5 mb-2 text-2xl bg-grayish-blue text-white uppercase rounded-xl font-bold w-56"
					type="button"
					@click="closeModal">
					no, cancel
				</button>
				<button
					class="y-3 px-5 mb-1 text-2xl bg-soft-red text-white uppercase rounded-xl font-bold w-56"
					type="button"
					@click="deleteComment">
					yes, delete
				</button>
			</div>
		</dialog>
	</transition>
</template>

<style lang="scss">
.fade-leave-to,
.fade-enter-from {
	opacity: 0;
}
.fade-leave-from,
.fade-enter-to {
	opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
	transition: opacity 0.2s;
}
</style>
