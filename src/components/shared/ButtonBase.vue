<template>
  <button
    :class="[
      'border px-4 py-2 rounded text-sm',
      {
        'bg-green-100 text-green-500 border-green-500': isActive,
        'bg-gray-100 text-gray-500 border-gray-300': !isActive,
      },
    ]"
    @click="isSelected"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonBase",

  props: {
    text: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    isSelected() {
      this.$emit("select", this.text);
    },
  },
};
</script>
