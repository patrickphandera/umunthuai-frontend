import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';

function isAuthenticated() {
  // Check if token is present in local storage
  return !!localStorage.getItem('token');
}

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Set up a global navigation guard
  Router.beforeEach((to, from, next) => {
    if (to.path === '/chat' && !isAuthenticated()) {
      // Redirect to login if not authenticated
      next('/auth/login');
    } else {
      next(); // Continue to the requested route
    }
  });

  return Router;
});
