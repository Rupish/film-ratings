<template>
  <section class="container">
    <div class="flexrow">
      <div v-if="notEmptyObject(movies)" class="unit" v-for="(movie,id) in movies" :key="id">
        <movie @removeFromFavorites="refreshFavorites" :title="movie.title" :url="movie.url" :imdbID="movie.imdbID" :date="movie.date" :favorite="movie.favorite"></movie>
      </div>
      <div v-if="!notEmptyObject(movies)">
        <h2>No movies/series added to favorites yet!</h2>
      </div>
    </div>
  </section>
</template>

<script>
  import Movie from '../components/Movie.vue';
  export default {
    components: {
      Movie
    },
    data() {
      return {
        movies : localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites')) : {}
      }
    },
    methods: {
      notEmptyObject(someObject){
        return Object.keys(someObject).length
      },
      refreshFavorites(id) {
        delete this.movies[id];
        this.$forceUpdate();
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-bottom: 40px;
  }
</style>
