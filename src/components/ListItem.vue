<template>
  <div v-for="(blogList, i) in blogLists" :key="i">
    <h5 @click="$router.push('/detail/' + i)">{{ blogList.title }}</h5>
    <p>{{ blogList.date }}</p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    blogLists: Array,
  },
};
</script>

<style></style>
