// Define the json object that are loaded.
export interface IRouterCustOpt {
  path: string;
  name: string;
  webpackChunkName: string;
  sourcePath: string;
  children?: IRouterCustOpt;
}

export const routerOptions: IRouterCustOpt[] = [{
    'path': '/about',
    'name': 'about',
    'webpackChunkName': 'about',
    'sourcePath': 'views/home/About.vue'
  },
  {
    'path': '/login',
    'name': 'login',
    'webpackChunkName': 'generic',
    'sourcePath': 'views/generic/login/Login.vue'
  },
  {
    'path': '*',
    'name': 'exceptionCather',
    'webpackChunkName': 'exception',
    'sourcePath': 'views/Home.vue'
  }
];
