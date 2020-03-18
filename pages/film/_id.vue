<template>
  <div>
    <div v-if="film && !loading" class="film-container">
      <div class="header">
        <h2 class="film-header">{{ film.Title }} ({{film.Year}})</h2>
        <h2>{{ film.Rated }} | {{film.Runtime}} | {{film.Genre}} | {{film.Country}}</h2>
      </div>
      <div class="ratings_wrapper">
        <div class="imdbRating">
          <img src="../../assets/images/star.png" width="30" height="30"/>
          <div class="ratingValue">
            <strong><span>{{film.imdbRating}}</span></strong><span class="grey">/</span><span class="grey" itemprop="bestRating">10</span>                    </div>
          <a :href="'https://www.imdb.com/title/' + id + '/ratings?ref_=tt_ov_rt'"><span class="small" itemprop="ratingCount">{{film.imdbVotes}} votes</span></a>
        </div>
      </div>
      <div class="film-content">
        <div class="film-basics">
          <img v-if="film.Poster!=='N/A'" :src="film.Poster" width="235" height="300"/>
          <img v-if="film.Poster==='N/A'" src="../../assets/images/no-image.png" width="235" height="300"/>
          <div style="text-align: center">
            <span style="width: auto" class="quant-text">Release: {{ film.Released }}</span>
          </div>
          <button style="margin-left: 0" class="submit" @click="setFavorite()">
            <span class="fav">{{fav? 'Unfavorite' : 'Favorite' }}</span>
            <svg class="heart-loader" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" version="1.1">
              <g class="heart-loader">
                <path v-bind:class="{'heart-loader-path-filled': fav,  'heart-loader-path': !fav}" stroke-width="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
              </g>
            </svg>
          </button>
        </div>
        <div class="film-about">
          <h1 class="bottom-padd" style="font-size: 13px; margin-top: 0">{{film.Plot}}</h1>
          <div class="film-roles">
            <div class="bottom-padd"><span><strong>Directors: </strong></span><span class="blue"> {{film.Director}}</span></div>
            <div class="bottom-padd"><span><strong>Writers: </strong></span><span class="blue"> {{film.Writer}}</span></div>
            <div class="bottom-padd"><span><strong>Stars: </strong></span><span class="blue"> {{film.Actors}}</span></div>
            <div class="bottom-padd"><span>Production: </span><span style="color: grey"> {{film.Production}}</span></div>
          </div>
          <br>
          <div v-if="film.Ratings" class="film-roles">
            <div class="bottom-padd"><span><strong>Ratings: </strong></span></div>
            <div v-for="rating in film.Ratings"><span style="color: green"> {{rating.Source}} : <span style="color:grey;font-size: 13px">{{rating.Value}}</span></span></div>
          </div>
          <br>
          <div class="film-roles">
            <div class="bottom-padd"><span><strong>Awards: </strong></span><span class="blue"> {{film.Awards}}</span></div>
            <div class="bottom-padd"><span><strong>Languages: </strong></span><span class="blue"> {{film.Language}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-if="loading" />
  </div>
</template>


<script>
  import axios from "~/plugins/axios";
  import Loader from "../../components/Loader";

  export default {
    components: {
      Loader
    },
    computed: {
      favorites() {
        return this.$store.state.favorites
      }
    },
    data() {
      return {
        id: '',
        fav: false,
        film: undefined,
        loading: false,
        error: false
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.fetchFilmById(this.id);
      this.checkIfFavorite();
    },
    methods: {
      setFavorite: function () {
        this.fav = !this.fav;
        let favorites = this.favorites;
        const itemExists = favorites[this.id];
        if (this.fav && !itemExists) {
          this.$store.commit('add', {
            "favorite": this.fav,
            "imdbID": this.id,
            "url": this.film.Poster,
            "title": this.film.Title,
            "date": this.film.Year
          });
        }
        else if (!this.fav && itemExists) {
          this.$store.commit('remove', this.id);
        }
      },
      fetchFilmById: function (id) {
        this.loading = true;
        this.error = false;
        axios.get('/', {
          params: {
            'apikey': process.env.apiKey,
            'i': id
          }
        })
          .then(response => {
            this.loading = false;
            this.film = response.data;
          })
          .catch(error => {
            this.loading = false;
            this.error = error;
          })
      },
      checkIfFavorite: function () {
        this.fav = !!this.favorites[this.id];
      }
    }
  }
</script>

<style scoped>
  .bottom-padd {
    padding-bottom: 6px;
  }
  .film-roles{
    font-family: Verdana, Arial, sans-serif;
  }
  .film-about{
    padding: 0 50px;
  }
  .film-content {
    display: flex;
  }
  .blue {
    color: #3d85bd;
  }
  .film-container {
    display: flex;
    flex-direction: column;
    width: 92vw;
    height: 80vh;
    justify-content: space-evenly;
    background: #eee;
    padding: 50px 2vw;
    margin: 0 2vw 0 2vw;
  }
  .film-header {
    font: 36px Arial,sans-serif;
    font-weight: normal;
    text-align: center;
    line-height: 110%;
  }
  .film-basics{
    display: grid;
    justify-content: left;
  }
  .grey{
    color: #6b6b6b;
    font-size: 10px;
  }
  .imdbRating {
    font-family: Verdana, Arial, sans-serif;
  }
  .heart-loader {
    transform: rotate(-22.5deg);
    width: 15px;
    height: 15px;
    overflow: visible;
    float: right;
    margin-top: 1px;
  }
  .heart-loader-path {
    stroke: #49494f;
    fill: transparent;
    stroke-dasharray: 308.522, 308.522;
    stroke-dashoffset: 0;
  }
  .heart-loader-path-filled {
    stroke: red;
    fill: orangered;
    stroke-dasharray: 308.522, 308.522;
    stroke-dashoffset: 0;
  }
</style>
