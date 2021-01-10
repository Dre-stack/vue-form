<template>
  <div :class="formGroupClass">
    <label :for="name" class="form-label">{{ name }}</label>
    <input
      :id="name"
      v-model.trim="inputData"
      @submit="onSubmit"
      :name="name"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: 'RealDigitalTextfield',
  props: {
    name: String,
    validation: String,
    errorClass: Boolean,
  },
  data() {
    return {
      inputData: '',
    };
  },
  computed: {
    formGroupClass() {
      return `form-group ${this.errorClass ? 'error' : ''}`;
    },
  },
  methods: {
    onSubmit($event) {
      console.log($event.target);
    },
  },
};
</script>

<style scoped>
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.form-group input {
  padding: 10px;
  font-size: 16px;
}
.form-group.error input {
  border: 1px solid red;
}
.form-group label {
  margin-bottom: 5px;
  text-transform: uppercase;
}
</style>
