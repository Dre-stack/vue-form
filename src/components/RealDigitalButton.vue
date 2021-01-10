<template>
  <button :disabled="loading"><slot></slot></button>
</template>

<script>
export default {
  name: 'RealDigitalButton',
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px 30px;
  text-transform: uppercase;
  transition: all 0.3s;
  border: 1px solid transparent;
  font-size: 16px;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
</style>
