<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input
      :multiple="multiple"
      type="file"
      :name="name"
      :accept="accept"
      @change="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: ['name', 'accept', 'multiple'],
  data() {
    return {
      files: '',
    };
  },
  methods: {
    handleInput(event) {
      if (this.mutiple) {
        this.files = event.target.files;
      } else {
        this.files = event.target.files[0];
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
label {
  text-transform: uppercase;
  margin: 5px 0;
}
</style>
