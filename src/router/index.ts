import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/pages/Home.vue';
import { IRouterCustOpt, routerOptions } from '@/router/routerrc';

Vue.use(VueRouter);

const routes: RouteConfig[] = [{
  // Static resources which are loaded at first.
  path: '/',
  name: 'home',
  component: Home
}];

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routeConfs = createRouteConfigs(routerOptions);
for (let index in routeConfs) {
  if (routeConfs[index] !== null) {
    routes.push(routeConfs[index]);
  }
}

// Getting all configurations from 'router.json'.
function createRouteConfigs (routerrcs: IRouterCustOpt[]): RouteConfig[] {
  let configArr: RouteConfig[] = [];

  if (routerrcs === null || routerrcs === undefined) {
    return configArr;
  }

  for (let index in routerrcs) {
    if (index !== null) {
      let routerrc = routerrcs[index];
      let routeConfig: RouteConfig = {
        path: routerrc.path,
        name: routerrc.name,
        component: () => import( /* webpackChunkName: '`${routerrc.webpackChunkName}`' */ `@/${routerrc.sourcePath}`)
      };

      configArr.push(routeConfig);
    }
  }
  return configArr;
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
