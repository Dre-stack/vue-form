<template>
  <form @submit.prevent="submit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'RealDigitalForm',
  emits: ['on-response', 'on-submit', 'on-loading'],

  props: {
    method: String,
    action: String,
    isFormValid: Boolean,
  },
  data() {
    return {
      formData: {},
    };
  },
  watch: {
    isFormValid(value) {
      if (value) {
        this.sendData();
      }
    },
  },
  methods: {
    submit($event) {
      //
      // const data = Object.fromEntries(
      //   new FormData($event.target)
      // );
      const data = {};
      const formData = new FormData($event.target);
      formData.forEach((value, key) => {
        // console.log(key, value);
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (Array.isArray(data[key])) {
            data[key] = [...data[key], value];
          } else {
            data[key] = [data[key], value];
          }
        } else {
          data[key] = value;
        }
      });
      // console.log(data);
      this.formData = data;
      this.$emit('on-submit', data);
    },

    async sendData() {
      this.$emit('on-loading', true);
      try {
        const response = await fetch(`${this.action}`, {
          method: this.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        const data = await response.json();
        this.$emit('on-response', data);
        this.$emit('on-loading', false);
      } catch (error) {
        this.$emit('on-response', error);
        this.$emit('on-loading', false);
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (max-width: 600px) {
  form {
    width: 90%;
  }
}
</style>
