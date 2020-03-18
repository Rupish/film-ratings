<template>
  <section class="container">
    <div class="flexrow" v-if="!loading">
      <form @submit.prevent>
        <div class="search-box">
          <label>
            <input class="search-text" v-model="search.query" type="text" placeholder="Search movies,series,episodes.." maxlength="30" />
          </label>
          <select class="select-type" v-model="search.type">
            <option value="" selected>-- ALL --</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
          <button class="submit" @click="getMovies(true)">
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
    <div class="flexrow" v-if="!loading">
      <div v-if="movies.Search && movies.Response === 'True'" class="unit" v-for="unit in movies.Search" :key="unit.imdbID">
        <movie :title="unit.Title" :url="unit.Poster" :imdbID="unit.imdbID" :date="unit.Year" :favorite="unit.favorite"></movie>
      </div>
      <div v-if="movies.Response === 'False' || error">
        <h2>{{movies.Error || error}}</h2>
      </div>
    </div>
    <div class="flexrow" v-if="!loading">
      <pagination v-if="totalResults"
        :total-pages="totalPages"
        :total="totalResults"
        :per-page="10"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
    <Loader v-if="loading" />
  </section>
</template>

<script>
  import Movie from '../components/Movie.vue';
  import Pagination from '../components/Pagination';
  import Loader from '../components/Loader';
  import axios from 'axios';

  export default {
    components: {
      Movie,Pagination,Loader
    },
    data () {
      return {
        currentPage: 1,
        totalResults:0,
        totalPages:0,
        search: {
          query: '',
          type: ''
        },
        movies:[],
        loading: false,
        error: false
      }
    },
    computed: {
      favorites() {
        return this.$store.state.favorites;
      }
    },
    mounted() {
      this.$store.commit('setFavs');
      console.log("mounted");
      this.currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 0;
      this.search.query = this.$route.query.query ? this.$route.query.query : '';
      this.getMovies();
    },
    methods: {
      getMovies: function (fromPageOne) {
        if (fromPageOne) this.currentPage = 1;
        this.loading = true;
        this.error = false;
        axios.get(process.env.apiBaseUrl, {
          params: {
            'apikey': process.env.apiKey,
            's': this.search.query || 'a',
            'page': this.currentPage,
            ...(this.search.type && {'type': this.search.type}),
          }
        })
          .then(response => {
            // this.$route.params = {
            //   query: this.search.query,
            //   page: this.currentPage,
            // };
            this.$router.push({ path: '/', query: {query: this.search.query, page: this.currentPage,}});
            this.loading = false;
            response.data.Search = this.setFavorites(response.data);
            this.movies = response.data;
            this.totalResults = parseInt(this.movies.totalResults);
            this.totalPages = parseInt(Math.ceil(parseInt(this.movies.totalResults)/10));
            // this.$forceUpdate();
          })
          .catch(error => {
            this.loading = false;
            this.error = error;
          })
      },
      setFavorites: function (data) {
        if (data.Search) {
          let items = data.Search;
          let favorites = this.favorites;
          if ("undefined" === typeof favorites || null == favorites || "" === favorites) return items;
          return items.map(item => {
            if (favorites[item.imdbID]) item["favorite"] = true;
            else item.favorite = false;
            return item;
          })
        }
        return false;
      },
      onPageChange(page) {
        console.log(page);
        this.currentPage = page;
        this.getMovies(false);
      }
    }
  }
</script>


