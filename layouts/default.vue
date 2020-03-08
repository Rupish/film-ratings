<template>
  <div>
    <MainMenu />
    <nuxt/>
  </div>
</template>

<script>
  import MainMenu from './../components/MainMenu.vue';

  export default {
    components: {
      MainMenu
    }
  }
</script>

<style>
body, html {
  font-family: 'PT Serif', serif;
  margin: 0;
}

a {
  transition: 0.2s all ease;
  text-decoration: none;
  color: #E6534B;
}

a:hover {
  color: #fc7c5f;
}

.flexrow {
  padding-top: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.special, h1, h2, h3, li,input, button.submit, .quant-text {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

h2 {
  font-size: 15px;
  margin: 0 0 5px;
  text-align: center;
}

li {
  list-style: none;
  display: inline-block;
}

input {
  background: #eee;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
}
button.inc {
  background: white;
  color: black;
}
button.submit {
  background: white;
  color: black;
  margin-left: 20px;
  padding: 12px 14px;
  width: 240px;
  -webkit-transition: 0.25s all ease-in;
  transition: 0.25s all ease-in;
  border: 1px solid black;
}
button.submit:hover {
  opacity: 0.7;
  color: #E6534B;
  -webkit-transition: 0.25s all ease-out;
  transition: 0.25s all ease-out;
}

.quant-text {
  display: inline-block;
  width: 140px;
  padding: 8px;
  padding: 8px;
}

.date {
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 280px;
  height: 440px;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
}
.item img {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}


  /*search form*/
  /*search form*/
.search-box{
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 2.3em;
}
.search-text {
  width: 33em;
  height: 2em;
  font-size: 16px;
  border: 1px solid #d3d9d7;
  border-radius: 5px 0 0 5px;
}
.select-type {
  width: 7em;
  height: 2.2em;
  font-size: 16px;
  border: 1px solid #d3d9d7;
  border-radius: 0 5px 5px 0;
}

  /*search form*/
  /*search form*/

  /*pagination*/
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
  /*pagination*/
</style>
