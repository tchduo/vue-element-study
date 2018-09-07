<template>
  <div>
    <h2>buttons</h2>

    <h3>basic</h3>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    
    <h3>plain</h3>
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>

    <h3>round</h3>
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
    
    <h3>icon</h3>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>

    <h3>disabled</h3>
    <div>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>      
    </div>

    <h3>plain disabled</h3>
    <el-button plain disabled>Plain</el-button>
    <el-button type="primary" plain disabled>Primary</el-button>
    <el-button type="success" plain disabled>Success</el-button>
    <el-button type="info" plain disabled>Info</el-button>
    <el-button type="warning" plain disabled>Warning</el-button>
    <el-button type="danger" plain disabled>Danger</el-button>

    <h3>text button</h3>
    <el-button type="text">Text Button</el-button>
    <el-button type="text" disabled>Text Button</el-button>

    <h3>button group</h3>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
      <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>

    <h3>loading</h3>
    <el-button type="primary" :loading="true">Loading</el-button>

    <h3>sizes</h3>
    <el-button>Default</el-button>
    <el-button size="medium">Medium</el-button>
    <el-button size="small">Small</el-button>
    <el-button size="mini">Mini</el-button>

    <br><br>

    <el-button round>Default</el-button>
    <el-button size="medium" round>Medium</el-button>
    <el-button size="small" round>Small</el-button>
    <el-button size="mini" round>Mini</el-button>

    
  </div>
</template>

<script>

import ElButton from '../../ui/button/ElButton.vue';
import ElButtonGroup from '../../ui/button/ElButtonGroup.vue';

export default {
  name: 'app-button',

  components: { 
    'el-button': ElButton,
    'el-button-group': ElButtonGroup 
    },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
