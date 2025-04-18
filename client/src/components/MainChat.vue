<template>
    <h1>Welcome to Obiechat</h1>
    <div v-if="!enteredChat">
        <p>We need to chat brah</p>
        <input v-model="username" placeholder="Enter your username">
        <button @click="enterChatRoom">Enter chat</button>
    </div>
<div v-else>
        <p>Chat here</p>
        <button @click="leaveChatRoom">Leave Chat</button>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const enteredChat = ref(false)


function enterChatRoom() {
    if (username.value.trim() !== '') {
        enteredChat.value = true
    }
}

function leaveChatRoom() {
    enteredChat.value = false
}



</script>

