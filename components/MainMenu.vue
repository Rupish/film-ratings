<template>
  <div>
    <header>
      <ul><li>
        <nuxt-link exact to="/" class="logo">
          HOME
        </nuxt-link>
        </li>
        <li style="float: right;margin-top: 6px;" v-for="item in menuitems" :key="item.name">
          <nuxt-link :to="{path:item.path}">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        menuitems : [
          {name:'Favorites', path: '/favorites'}
        ]
      }
    },
  }
</script>

<style scoped>
  header {
    background: #222;
    padding: 5px 10px 10px;
    width: 100vw;
    color: white;
    position: fixed;
    z-index: 1;
  }
  header ul {
    padding-left: 0;
    margin-right: 20px;
  }
  header a {
    color: white;
    text-decoration: none;
    padding: 0 10px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  header a:hover {
    color: #E6534B;
  }

  .stamp {
    width: 30px;
    height: 30px;
    margin: 10px;
    float: left;
  }
</style>
