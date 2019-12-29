import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { IRouterCustOpt, routerOptions } from './routerrc';
import Home from '@/pages/home/Home.vue';
import PageNotFound from '@/pages/page_not_found/PageNotFound.vue';

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
routes.push({
  path: '*',
  name: 'pageNotFound',
  component: PageNotFound
});

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
