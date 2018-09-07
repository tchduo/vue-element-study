<template>
  <div>
    <el-alert
      title="unclosable alert"
      type="success"
      :closable="false">
    </el-alert>
    <el-alert
      title="customized close-text"
      type="info"
      close-text="Gotcha">
    </el-alert>
    <el-alert
      title="alert with callback"
      type="warning"
      @close="hello">
    </el-alert>
  </div>
</template>

<script>

import ElAlert from '../../ui/alert/ElAlert.vue';

export default {
  components: {
    'el-alert': ElAlert
  },
  
  methods: {
    hello() {
      alert('hi there');
    }
  }
}
</script>

