import Vue from "vue";
import Router from "vue-router";
import Routerrc from "./router.json";

// Create Vue router and using it.
const routingConfs = createRouteConfigs(Routerrc);
export default new Router({
  mode: "history",
  routes: routingConfs
});

Vue.use(Router);

// Getting all configurations from router.json.
function createRouteConfigs (routerrc) {
  let configArr = [];

  if (routerrc === null || routerrc === undefined) {
    return;
  }

  for (let index in routerrc) {
    if (index !== null) {
      let routeConfig = routerrc[index];
      routeConfig.component = getComponentByPath(routeConfig.sourcePath);
      configArr.push(routeConfig);
    }
  }
  return configArr;
}

// Dynamically import components using component names in router.json.
function getComponentByPath (sourcePath) {
  /* jshint -W024 */
  if (sourcePath !== undefined) {
    return resolve => import(`@/${sourcePath}`).then(resolve);
  }
}
