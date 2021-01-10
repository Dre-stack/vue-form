<template>
  <div class="wrapper">
    <p>{{ name }}</p>
    <div class="form-group" v-for="option in options" :key="option">
      <input
        type="checkbox"
        :name="name"
        :id="option"
        :value="option"
        v-model="selected"
      />
      <label :for="option">{{ option }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'name'],
  name: 'MultipleCheckbox',
  data() {
    return {
      selected: [],
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  margin: 10px 0;
}
p,
label {
  text-transform: uppercase;
}
label {
  margin-left: 5px;
}
.form-group {
  margin: 5px 0;
}
</style>
