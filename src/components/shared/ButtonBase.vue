<template>
  <button
    :class="[
      'border px-3 sm:px-4 py-2 rounded text-xs sm:text-sm',
      {
        'bg-green-100 text-green-500 border-green-500':
          isActive && !isDateSelected,
        'bg-gray-100 text-gray-700 border-gray-300':
          !isActive || isDateSelected,
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

    isDateSelected: {
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
