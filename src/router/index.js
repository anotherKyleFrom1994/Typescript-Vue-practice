/* jshint -W024 */
import Vue from 'vue';
import Router from 'vue-router';
import Routerrc from './router.json';

export default new Router({
  routes: createRouteConfigs(Routerrc)
});

Vue.use(Router);

function createRouteConfigs (routerrc) {
  'use strict';
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

function getComponentByPath (sourcePath) {
  'use strict';

  if (sourcePath !== undefined) {
    return resolve => import(`@/${sourcePath}`).then(resolve);
  }
}
