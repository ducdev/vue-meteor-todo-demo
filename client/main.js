import '/imports/startup/client';
import Vue from 'vue';
import VueRouter from 'vue-router';

import VueMeteorTracker from 'vue-meteor-tracker';

import App from '/imports/ui/App.vue';

const NotFound = { template: '<div><h1>Not Found</h1></div>', name: 'NotFound' }
const Index = { template: '<div>Home</div>', name: 'Index' }

const routes = [
  { path: '/', name: 'Index', component: Index },
]

Vue.use(VueMeteorTracker);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Meteor.startup(() => {
  const app = new Vue({
    router: router,
    render: h => h(App),
  }).$mount('app');
});
