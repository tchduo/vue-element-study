<template>
  <div id="app">
    <el-button></el-button>
  </div>
</template>

<script>

import ElButton  from './ui/button/ElButton.vue';

export default {
  name: 'app',

  components: { ElButton },

  data () {
    return {
      
    }
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
  margin-top: 60px;
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
