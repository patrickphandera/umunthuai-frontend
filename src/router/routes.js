const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/chat",
    component: () => import("layouts/ChatLayout.vue"),
    children: [{ path: "", component: () => import("pages/ChatPage.vue") }],
  },

  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
