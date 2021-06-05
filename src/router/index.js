import Vue from 'vue';
import VueRouter from 'vue-router';
import first from "../pages/first";
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/first',
            component: first
        },
        {
            path: '/',
            redirect: '/first'
        }
    ]
})