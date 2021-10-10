<template>
    <footer>
        <p><b>&copy; Harmony Connection since 2021</b></p>
        <img alt="Harmony logo" src="../../assets/logo.jpg" />
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    position: fixed;
    display: flex;
    justify-content: space-around;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(179 195 180);
    color: #112f03;
    text-align: right;
}
footer img {
    height: 50px
}

</style>