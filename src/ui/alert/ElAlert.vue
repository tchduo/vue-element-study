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
        <i></i>
      </div> 


    </div>
  </transition>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import "./ElAlert.scss";
</style>

