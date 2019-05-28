<template>
    <div class="card red darken-2 with-margin">
        <div class="card-content white-text">
          <span class="card-title">{{recipe.name}}</span>
          <p></p>
        </div>
        <div class="card-action">
          <a href="#">See</a>
        </div>
    </div>
</template>
<style scoped>
    
</style>

<script>
export default {
    props: ['recipe']
}
</script>
