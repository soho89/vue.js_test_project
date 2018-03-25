<template>
    <div class = "menue-bar">
        <div class = "right">
            <ul class ="menue">
                <li v-for="entry in this.menueEntries">
                    <a href="#">{{entry}}</a>
                </li>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menue-bar",
        data: function () {
            return {
                menueEntries: ['Contact','FAQ'],
            }
        },
    }
</script>

<style scoped>
li {
    padding-right: 20px;
}

.menue{
    list-style: none;
    display: flex;
}
</style>