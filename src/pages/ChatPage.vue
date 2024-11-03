<template>
  <q-page class="chat-page bg-grey-2">
    <!-- Messages Display Area -->
    <div class="messages-container q-pa-md">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender === 'user' ?'system-message'  : 'user-message']">
        <q-chip :color="message.sender === 'user' ? 'grey-5'  :'primary' " text-color="white">
          {{ message.sender === 'user' ? 'Ine' : 'UmunthuAI' }}
        </q-chip>
        <div class="message-text q-mt-xs">{{ message.text }}</div>

      </div>
      <q-spinner-dots color="blue" size='lg' class='q-mx-sm' v-if='msgSent'/>
    </div>

    <!-- Input Section (Footer) -->
    <q-footer class="chat-input-footer bg-white q-pa-sm row items-center justify-between">
      <q-input
        outlined
        v-model="userMessage"

        type='textarea'
        dense
        placeholder="Lembani funso lanu umu...."
        class="input-box"
        @keyup.enter="sendMessage"
      > <template v-slot:append>
        <div class='q-ma-md'>

          <q-btn unelevated color="primary" class='q-mt-md' icon="navigation" @click="sendMessage" />
        </div>
        </template></q-input>

    </q-footer>
  </q-page>
</template>

<script>
import { postData } from '../services/auth.service';
import { getAllData } from '../services/rest.services';
export default {
  data() {
    return {
      msgSent: false, // User input
      userMessage: "", // User input
      messages: [
        { sender: "system", text: "Takulandilani! ndikuthandizeni chani lero? " }, // Initial system message
      ]
    };
  },
  methods: {
    async sendMessage() {

      if (this.userMessage.trim()) {
        // Add the user message to the chat
       await this.messages.push({ sender: "user", text: this.userMessage.trim() });
        this.msgSent=true
        // Placeholder for bot response logic
       let result= await postData({'message':this.userMessage,"user_id":"gdgd"},'chat')
       this.userMessage = "";
       this.msgSent=false
       
       this.botResponse(result.response)
      
        // this.botResponse(this.userMessage.trim());

        // Clear the input field

      }
    },
    botResponse(userText) {
      // Basic example: Echo bot logic (replace with actual bot response logic)
      // const response = "I'm here to help with your legal questions.";
      this.messages.push({ sender: "system", text: userText });
    }
  },
  async created() {
  try {
    // Await the promise to ensure `chats` contains resolved data
    let chats = await getAllData('chat');
    
    // Ensure `chats` is an array before looping through it
    if (Array.isArray(chats)) {
      chats.forEach(chat => {
        if (chat.message && chat.response) {  // Check if message and response are defined
          this.messages.push({ sender: "user", text: chat.message.trim() });
          this.messages.push({ sender: "system", text: chat.response });
        }
      });
    }
  } catch (error) {
    console.error("Error fetching chats:", error);
  }
}


}
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 50px; /* space for footer */
}

.message {
  max-width: 70%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
}

.user-message {
  align-self: flex-end;
  background-color: #e0f7fa;
  color: #00796b;
}

.system-message {
  align-self: flex-start;
  background-color: #f0f0f0;
  color: #333;
}

.chat-input-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.input-box {
  flex-grow: 1;
  margin-right: 8px;
}
</style>
