import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from "vant";
import 'vant/lib/index.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import routes from "./config/router.ts";

let app = createApp(App);
app.use(Vant)


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
app.use(router)







app.mount('#app')