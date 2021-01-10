<template>
  <real-digital-form
    action="https://httpbin.org/post"
    method="POST"
    @on-response="onResponse"
    @on-submit="onSubmit"
    @on-loading="onLoading"
    :is-form-valid="isFormValid"
  >
    <real-digital-textfield
      name="name"
      :error-class="!!formError.name"
    ></real-digital-textfield>
    <p class="form-error" v-if="formError.name">
      {{ formError.name }}
    </p>
    <real-digital-textfield
      name="phone"
      :error-class="!!formError.phone"
    ></real-digital-textfield>
    <p class="form-error" v-if="formError.phone">
      {{ formError.phone }}
    </p>
    <real-digital-textfield
      name="subject"
      :error-class="!!formError.subject"
    ></real-digital-textfield>
    <p class="form-error" v-if="formError.subject">
      {{ formError.subject }}
    </p>

    <real-digital-button :loading="loading">Send</real-digital-button>
  </real-digital-form>
</template>

<script>
import RealDigitalForm from './components/RealDigitalForm.vue';
import RealDigitalTextfield from './components/RealDigitalTextfield.vue';
import RealDigitalButton from './components/RealDigitalButton.vue';

import validateFormData from './utils/validateForm';
export default {
  name: 'App',
  components: {
    RealDigitalForm,
    RealDigitalTextfield,
    RealDigitalButton,
  },

  data() {
    return {
      formError: {},
      isFormValid: false,
      loading: false,
    };
  },

  methods: {
    onResponse(response) {
      console.log(response, 'from the app');
    },
    onSubmit(formData) {
      this.formError = {};
      const errors = validateFormData(formData);
      if (Object.keys(errors).length > 0) {
        this.formError = errors;
      } else {
        this.isFormValid = true;
      }
    },
    onLoading(value) {
      this.loading = value;
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.form-error {
  color: red;
  align-self: flex-start;
  margin-top: 5px;
}
</style>
