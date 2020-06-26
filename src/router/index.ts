import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ProjectPage from '../views/ProjectPage.vue';
import Blog from '../views/Blog.vue';
import Resume from '../views/Resume.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    name: "ProjectPage",
    path: "/projects/:id",
    component: ProjectPage
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import("../views/Projects.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
