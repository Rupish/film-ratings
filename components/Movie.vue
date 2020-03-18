<template>
  <div>
    <nuxt-link :to="{path:'/film/'+id}">
      <div class="item">
        <h2>{{ title }}</h2>
        <img v-if="url!=='N/A'" :src="url" width="235" height="300"/>
        <img v-if="url==='N/A'" src="../assets/images/no-image.png" width="235" height="300"/>
        <div class="date">
          <span class="quant-text">Year: {{ date }}</span>
        </div>
        <button class="submit" @click="setFavorite()">
          <span class="fav">{{fav? 'Unfavorite' : 'Favorite' }}</span>
          <svg class="heart-loader" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" version="1.1">
            <g class="heart-loader">
              <path v-bind:class="{'heart-loader-path-filled': fav,  'heart-loader-path': !fav}" stroke-width="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
            </g>
          </svg>
        </button>
      </div>
    </nuxt-link>
  </div>
</template>


<script>
  export default {
    computed: {
      favorites() {
        return this.$store.state.favorites
      }
    },
    props: ["title", "imdbID", "url", "date", "favorite"],
    data() {
      return {
        fav: this.favorite,
        id: this.imdbID
      }
    },
    methods: {
      setFavorite: function () {
        this.fav = !this.fav;
        let favorites = this.favorites;
        const itemExists = favorites[this.id];
        if (this.fav && !itemExists) {
          this.$store.commit('add', {
            "favorite": this.fav,
            "imdbID": this.imdbID,
            "url": this.url,
            "title": this.title,
            "date": this.date
          });
        }
        else if (!this.fav && itemExists) {
          this.$store.commit('remove', this.id);
        }
      }
    }
  }
</script>

<style scoped>
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
