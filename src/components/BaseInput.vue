<template>
  <div>
    <input
      :disabled="disabled"
      :value="value"
      class="
        c-input
        tw-p-2 tw-border-none
        focus:tw-outline-none
        tw-bg-charles-bg-grey
      "
      @input="onInput"
      v-bind="$attrs"
    />
    <button>clear</button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      inputVal: this.value,
    };
  },
  methods: {
    onInput(val) {
      this.inputVal = val.target.value;
      this.$emit("input", this.inputVal);
    },
  },
};
</script>
