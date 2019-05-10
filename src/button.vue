<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
  <!-- <button class="g-button" v-else>
      <svg v-if="icon" class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <slot></slot>
  </button>-->
</template>

<script>
export default {
  // props: ["icon", "iconPosition"]
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        //防止有人传过来的值，不是left或right
        return !(value !== 'left' && value !== 'right')
      }
    }
  }
};
</script>

<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>