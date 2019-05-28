<template>

  <div class="row">
    <v-card-recipe :recipe="recipe" class="col s12 m6" v-for="recipe in recipes" :key="recipe._id">

    </v-card-recipe>
  </div>
  
</template>

<script>
// @ is an alias to /src
import RecipeCard from '@/components/recipes/RecipeCard.vue';

export default {
  name: 'home',
  components: {
    'v-card-recipe': RecipeCard
  },
  data: () => ({
    recipes: []
  }),
  mounted(){
    this.getRecipes();
  },
  methods: {
    getRecipes(){
      fetch('http://localhost:3001/api/recipes')
      .then(res  => res.json())
      .then(response => {
        
        this.recipes = response.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
