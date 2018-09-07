// import Home from './web/Home.vue';
import Home from './web/Home.vue';
import Button from './web/demo/Button.vue';
import Alert from './web/demo/Alert.vue';

export const routes = [

    { path: '/', component: Home },
    { path: '/demo/button', component: Button },
    { path: '/demo/alert', component: Alert }

];