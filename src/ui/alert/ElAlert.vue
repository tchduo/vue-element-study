<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeclass, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" 
        :class="[iconClass, isBigIcon]"
        v-if="showIcon"
      >
      </i>
      <div class="el-alert__content">
        <span
          class="el-alert__title"
          :class="[ isBoldTitle ]"
          v-if="title"
        >
          {{ title }}
        </span>
        <slot>
          <p class="el-alert__description" v-if="description">
            {{ description }}
          </p>
        </slot>
        <i
          class="el-alert__closebtn"
          :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"
          v-show="closable"
          @click="close()"
        >
          {{ closeText }}
        </i>
      </div> 
    </div>
  </transition>
</template>

<script>

const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};

export default {
  name: 'ElAlert',

  props: {
    title: {
      type: String,
      default: '',
      required: true 
    },
    
  },


};
</script>

<style lang="scss" scoped>
  @import "./ElAlert.scss";
</style>

