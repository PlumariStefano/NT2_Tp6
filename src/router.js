import Vue from 'vue'
import VueRouter from "vue-router"

import Formulario from './componentes/Formulario/index.vue'
import user from './componentes/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: 'binding'},
        { path: '/formulario', component: Formulario },
        { path: '/user', component: user }

    ]
})