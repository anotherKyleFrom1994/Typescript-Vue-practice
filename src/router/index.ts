import Vue from 'vue';
import VueRouter, {
  RouteConfig
} from 'vue-router';
import Home from '../views/Home.vue';
import routerrcs from './router.json';
Vue.use(VueRouter);

const routes: RouteConfig[] = [{
  path: '/',
  name: 'home',
  component: Home
}];

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routerJson: Routerrc[] = JSON.parse(JSON.stringify(routerrcs));
routes.concat(createRouteConfigs(routerJson));

interface Routerrc {
  path: string;
  name: string;
  webpackChunkName: string;
  sourcePath: string;
}

// Getting all configurations from router.json.
function createRouteConfigs (routerrcs: Routerrc[]): RouteConfig[] {
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
        component: < () => Promise < typeof import('*.vue') >> getComponentByPath(routerrc.sourcePath, routerrc.webpackChunkName)
      };

      configArr.push(routeConfig);
    }
  }
  return configArr;
}

// Dynamically import components using component names in router.json.
function getComponentByPath (sourcePath: string, webpackChunkName ? : string): ((value: any) => any) | null | undefined {
  if (sourcePath !== undefined && webpackChunkName !== undefined) {
    return () => import( /* webpackChunkName: "`${webpackChunkName}`" */ `${sourcePath}`);
  } else if (sourcePath !== undefined) {
    return () => import(`${sourcePath}`);
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
