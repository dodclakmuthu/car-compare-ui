const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "compare", component: () => import("pages/Compare.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NotFound.vue") }],
  },
];

export default routes;
