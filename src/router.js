import { createWebHistory, createRouter } from "vue-router";
import HomeCon from "./components/HomeCon.vue";
import ListItem from "./components/ListItem.vue";
import DetailPage from "./components/DetailPage.vue";
import ErrorPage from "./components/ErrorPage.vue";
import AuthorPage from "./components/AuthorPage.vue";
import CommentPage from "./components/CommentPage.vue";

const routes = [
  {
    path: "/detail/:id",
    component: DetailPage,
    children: [
      {
        path: "author",
        component: AuthorPage,
      },
      {
        path: "comment",
        component: CommentPage,
      },
    ],
  },
  {
    path: "/list",
    component: ListItem,
  },
  {
    path: "/",
    component: HomeCon,
  },
  {
    path: "/:anything(.*)",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
