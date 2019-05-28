<template>
    <div class="card red darken-2 with-margin hoverable">
        <div class="card-content white-text">
          <span class="card-title">{{recipe.name}}</span>
          <p></p>
        </div>
        <div class="card-action">
          <a href="#" @click="showRecipe(recipe._id)">See</a>
        </div>
    </div>
</template>
<style scoped>
    
</style>

<script>
export default {
    props: ['recipe'],
    methods: {
        showRecipe(id){
            this.$router.push({name: 'show-recipe', params: { id: id }})
        }
    }
}
</script>
