<template>
    <div class="articles">
        <single-article/>
        <single-article/>
        <single-article/>
        <single-article/>
        <single-article/>
    </div>
</template>

<script>
import SingleArticle from "../Reusable/SingleArticle.vue";
export default {
    name: "ArticleSection",
    components: {
        SingleArticle,
    }
};
</script>

<style>
.articles {
    background-color: rgb(0, 15, 0);
    width: 500px;
    margin: 10px auto;
    padding: 20px;
    color: white;
    border-radius: 10px;
}
</style>