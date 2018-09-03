import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const the_router = new VueRouter(
{
  routes: routes,
  mode: 'history'
});

new Vue(
{
  el: '#app',
  router: the_router,
  render: h => h(App)
});
