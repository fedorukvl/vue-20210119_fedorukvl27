<template>
  <div class="page page_meetup-forms"
>
    <h2>{{title}}</h2>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  props:{
    title:{
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
</style>
