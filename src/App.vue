<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="nav-link active">
              <router-link to="/">홈페이지</router-link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link">
              <router-link to="/list">리스트페이지</router-link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mt-4">
    <router-view :blogLists="blogLists"></router-view>
  </div>
  <!-- <ListItem :blogLists="blogLists" /> -->
</template>
<script>
import blog from "./assets/blog.js";
// import ListItem from "./components/ListItem.vue";

export default {
  name: "App",
  data() {
    return {
      blogLists: blog,
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
