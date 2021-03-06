// Define the json object that are loaded.
export interface IRouterCustOpt {
  path: string;
  name: string;
  webpackChunkName: string;
  sourcePath: string;
  children ? : IRouterCustOpt;
}

export const routerOptions: IRouterCustOpt[] = [{
    'path': '/about',
    'name': 'about',
    'webpackChunkName': 'about',
    'sourcePath': 'pages/home/About.vue'
  },
  {
    'path': '/login',
    'name': 'login',
    'webpackChunkName': 'generic',
    'sourcePath': 'pages/login/Login.vue'
  },
  {
    'path': '/activity',
    'name': 'activity',
    'webpackChunkName': 'activity',
    'sourcePath': 'pages/activity/Activity.vue'
  }
];
