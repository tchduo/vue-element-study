<template>
  <div>
    <h2>buttons</h2>

    <h3>basic</h3>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    

    <h3>disabled</h3>
    <div>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>      
    </div>

    
  </div>
</template>

<script>

import ElButton from '../../ui/button/ElButton.vue';

export default {
  name: 'app',

  components: { 'el-button': ElButton },

  data () {
    return {
      
    }
  }
}
</script>