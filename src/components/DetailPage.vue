<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ blogLists[$route.params.id].title }}</h5>
    <p>{{ blogLists[$route.params.id].content }}</p>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "DetailPage",
  props: {
    blogLists: Array,
  },
};
</script>

<style></style>
