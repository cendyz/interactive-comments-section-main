<template>
	<button class="reply" v-if="value.user.username !== 'juliusomo'">
		<img :src="replyIcon" alt="Reply icon" class="replyIcon" />
		Reply
	</button>
	<div class="ownButtons" v-if="value.user.username == 'juliusomo'">
		<button class="delete" @click="openModal">
			<img :src="deleteIcon" alt="Trash icon" class="deleteIcon" />
			Delete
		</button>
		<button class="edit">
			<img :src="editIcon" alt="Pencil icon" class="editIcon" />
			Edit
		</button>
	</div>
	<Modal
		:isOpen="isOpen"
		@close="isOpen = $event"
		:value="props.value"
		:replyIndex="props.replyIndex"
		:propIndex="props.propIndex"
		:newData="props.newData" />
</template>

<script setup>
import editIcon from '@/images/icon-edit.svg'
import deleteIcon from '@/images/icon-delete.svg'
import replyIcon from '@/images/icon-reply.svg'
import Modal from './Modal.vue'
import { ref } from 'vue'

const props = defineProps({
	value: Object,
	replyIndex: Number,
	propIndex: Number,
	newData: Object,
})
const isOpen = ref(false)

const openModal = () => {
	console.log(props.replyIndex);
	isOpen.value = !isOpen.value
}

</script>

<style scoped lang="scss">
@include mainBox;

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
</style>
