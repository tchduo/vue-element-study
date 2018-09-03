<template>
  
  <div id="app">

    <app-header></app-header>
    <br><br>
    <router-view></router-view>
  </div>

</template>



<script>

  import Header from './web/Header.vue';

  export default {
    components: {
      'app-header': Header
    }
  }


/**
 * import sass: https://stackoverflow.com/questions/46491510/vue-js-separate-css-scss-from-the-single-vue-file
 * 
 * 
  <style lang="scss">  ?? add scoped?
    @import './foo.scss';
  </style>
 */

</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0px 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
