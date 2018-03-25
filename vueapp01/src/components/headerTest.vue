<template>
    <div class="header">
        <div class = "left">
            <a href="#" class = "name">Martin.Wolff</a>
        </div>
        <menue-bar>über Mich</menue-bar>
    </div>
</template>

<script>
    import MenueBar from "./menueBar";

    export default {
        components: {MenueBar},
        name: "headerTest"
    }
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
}

.left{
    flex-grow: 2;
    align-items: center;
    display: flex;
}

</style>