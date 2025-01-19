<script setup>
import { reactive } from 'vue'
import { data } from './data'

const DEFAULT_DATA = {
	commentBox: data.comments,
}

const newData = reactive(DEFAULT_DATA)
</script>
<template>
	<main class="main">
		<div
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
					<p class="time">{{ value.createdAt }}</p>
				</div>
				<p class="desc">
					{{ value.content }}
				</p>
				<div class="bottomBox">
					<div class="btnsBox">
						<button class="leftBtn">+</button>
						<p class="votes">{{ value.score }}</p>
						<button class="rightBtn">-</button>
					</div>
					<button class="reply">
						<img src="./images/icon-reply.svg" alt="" class="replyIcon" />
						Reply
					</button>
				</div>
			</div>
			<div
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
							<button class="leftBtn">+</button>
							<p class="votes">{{ value.score }}</p>
							<button class="rightBtn">-</button>
						</div>
						<button
							class="reply"
							v-if="value.user.username !== 'juliusomo'">
							<img
								src="./images/icon-reply.svg"
								alt=""
								class="replyIcon" />
							Reply
						</button>
						<div
							class="ownButtons"
							v-if="value.user.username == 'juliusomo'">
							<button class="delete">
								<img
									src="./images/icon-delete.svg"
									alt=""
									class="deleteIcon" />
								Delete
							</button>
							<button class="edit">
								<img
									src="./images/icon-edit.svg"
									alt=""
									class="editIcon" />
								Reply
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="commentBox">
			<textarea id="textarea" placeholder="Add a comment..." class="textarea"></textarea>
			<div class="downBox">
				<img src="./images/avatars/image-juliusomo.webp" alt="Your avatar" class="avatar">
				<button class="send" type="button">send</button>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
@use './sass/utilities/reset.scss';
@use './sass/Main.scss';

body {
	margin: 2em 1em;
	font-family: 'Rubik', serif;
	font-size: 1.6rem;
	background-color: $very-light-gray;
}

.wrapper {
	width: 100%;
	max-width: 1220px;
	margin: 0 auto;
}
</style>
