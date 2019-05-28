<template>
<div class="row">
    <div class="col s12">
        <div class="card hoverable">
            <div class="card-image">
                <img height="250px;" src="https://dcassetcdn.com/design_img/10150/1674/1674_291293_10150_image.jpg">
                <span class="card-title red-text ">{{recipe.name}}</span>
            </div>
            <div class="card-content row">
                <hr>
                <div class="col s12 m4">
                    <h5>Ingredients</h5>
                    <ul class="collection">
                        <li class="collection-item" v-for="ingredient in ingredients" :key="ingredient._id">
                             <span class="badge blue white-text">{{ingredient.quantity}}</span>  {{ingredient.name}}
                        </li>
                        
                    </ul>
                        
                </div>
                <div class="col s12 m8">
                    <h5>Instructions</h5>
                    <p>
                        {{recipe.description}}
                    </p>
                </div>
            </div>
            <div class="card-action">
                
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
  name: 'home',
  props: ['id'],
  data: () => ({
    recipe: null,
    ingredientes: []
  }),
  mounted(){
    this.getRecipe();
  },
  methods: {
    getRecipe(){
      fetch(`http://localhost:3001/api/recipes/${this.id}`)
      .then(res  => res.json())
      .then(response => {
        
        this.recipe = response.data.recipe;
        this.ingredients = response.data.ingredients;
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
