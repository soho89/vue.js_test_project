<template>
    <div class="message">
        <p :class="{red: this.isRed}">{{message}}</p>
        <button @click.prevent= "isRed = true">Change Color!</button>
    </div>
</template>

<script>
    export default {
        props:['message'],
        name: "chatbox-message",
        data: function () {
            return {
                isRed: false,
            }
        },
    }
</script>

<style scoped>
    .red{
        color: red;
    }
</style>