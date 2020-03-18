<template>
  <section class="container">
    <div class="flexrow">
      <div v-if="notEmptyObject(movies)" class="unit" v-for="(movie,id) in movies" :key="id">
        <movie :title="movie.title" :url="movie.url" :imdbID="movie.imdbID" :date="movie.date" :favorite="movie.favorite"></movie>
      </div>
      <div v-if="!notEmptyObject(movies)">
        <h2>No movies/series added to favorites yet!</h2>
      </div>
    </div>
  </section>
</template>

<script>
  import Movie from '../components/Movie.vue';
  // import { mapGetters } from 'vuex';
  export default {
    components: {
      Movie
    },
    computed: {
      movies() {
        return this.$store.state.favorites;
      }
    },
    mounted() {
      this.$store.commit('setFavs');
    },
    methods: {
      notEmptyObject(someObject){
        return Object.keys(someObject).length
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-bottom: 40px;
  }
</style>
