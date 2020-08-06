import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import User from '../views/User.vue'
import ChangeEmail from '../views/ChangeEmail.vue'
import ChangePass from '../views/ChangePass.vue'
import EditInfo from '../views/EditInfo.vue'
import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {requiresAuth: true}
  },
  {
    path: '/changeemail',
    name: 'changeemail',
    component: ChangeEmail,
  },
  {
    path: '/changepass',
    name: 'changepass',
    component: ChangePass,
  },
  {
    path: '/editinfo',
    name: 'editinfo',
    component: EditInfo,
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  const requiresAuth =to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
})

export default router
