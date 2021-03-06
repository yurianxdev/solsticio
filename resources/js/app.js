import Vue from 'vue';
import VueAuthenticate from 'vue-authenticate';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'es6-promise/auto';
import moment from 'moment'
import Notifications from 'vue-notification';
import VueEditor from "vue2-editor";

Vue.prototype.moment = moment;

Vue.use(VueEditor);
Vue.use(Notifications);
window.Vue = require('vue');

Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
    baseUrl: '/api/',
});

require('./bootstrap');

// LANDING AND UTILITIES
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('index', require('./components/Index.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

// POSTS
Vue.component('noticias', require('./components/Noticias.vue').default);
Vue.component('noticia', require('./components/Noticia.vue').default);
Vue.component('archivos', require('./components/Archivos.vue').default);
Vue.component('clasificados', require('./components/Clasificados.vue').default);
Vue.component('clasificado', require('./components/Clasificado.vue').default);

// SERVICES
Vue.component('servicios', require('./components/Servicios/Servicios.vue').default);
Vue.component('salondejuntas', require('./components/Servicios/SalonDeJuntas.vue').default);
Vue.component('salonsocial', require('./components/Servicios/SalonSocial.vue').default);
Vue.component('bbq', require('./components/Servicios/Bbq.vue').default);

// PETITIONS AND PARKING
Vue.component('peticiones', require('./components/Peticiones/Peticiones.vue').default);
Vue.component('generica', require('./components/Peticiones/Generica.vue').default);
Vue.component('parqueadero', require('./components/Peticiones/Parqueadero.vue').default);

Vue.component('censo', require('./components/Censo.vue').default);
Vue.component('pagos', require('./components/Pagos.vue').default);

// ADMIN
Vue.component('adminnavbar', require('./components/Admin/AdminNavbar.vue').default);
Vue.component('adminindex', require('./components/Admin/AdminIndex.vue').default);
Vue.component('adminnoticias', require('./components/Admin/AdminNoticias.vue').default);
Vue.component('adminreservaciones', require('./components/Admin/AdminReservaciones.vue').default);
Vue.component('adminreservacionesapproved', require('./components/Admin/AdminReservacionesApproved.vue').default);
Vue.component('adminarchivos', require('./components/Admin/AdminArchivos.vue').default);
Vue.component('adminclassifieds', require('./components/Admin/AdminClassifieds.vue').default);
Vue.component('adminclassifieds_approved', require('./components/Admin/AdminClassifiedsApproved.vue').default);
Vue.component('adminpetitions', require('./components/Admin/AdminPetitions.vue').default);
Vue.component('adminpetitions_approved', require('./components/Admin/AdminPetitionsApproved.vue').default);
Vue.component('admincenso', require('./components/Admin/AdminCenso.vue').default);
Vue.component('admincensuses_exported', require('./components/Admin/AdminCensusesExported.vue').default);
Vue.component('adminusuarios', require('./components/Admin/AdminUsers.vue').default);
Vue.component('adminusuarioscompletos', require('./components/Admin/AdminUsersApproved.vue').default);

// LOGIN
Vue.component('login', require('./components/Auth/Login.vue').default);
Vue.component('register', require('./components/Auth/Register.vue').default);

const app = new Vue({
    el: '#app',
});
