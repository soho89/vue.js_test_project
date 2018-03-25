<template>
    <div class = "chatbox">
        <form @submit.prevent = "messages.push(message); message = ''">
            <input type="text" v-model="message"/>
            <button type="submit" >Send</button>
        </form>
        <div v-for="message in messages" style = "display: flex">
            <chatbox-message :message="message"></chatbox-message>
        </div>

    </div>
</template>

<script>
    import ChatboxMessage from "./chatboxMessage";

    export default {
        components: {ChatboxMessage},
        name: "chatbox",
        data: function () {
            return {
                isRed: false,
                message: '',
                messages:['test1'],
            }
        },
    }
    console.log(this.messages);
</script>

<style scoped>


</style>