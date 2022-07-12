const routes = [
  {
    path: "/",
    component: () => import("layouts/NewLayout.vue"),
    // import ("layouts/MainLayout.vue"),
    children: [
      { path: "/Index", component: () => import("pages/Index.vue") },
      { path: "/", component: () => import("pages/HomePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
