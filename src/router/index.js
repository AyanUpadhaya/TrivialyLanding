import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import Home from "../pages/home/Home.vue";
import About from "../pages/about/About.vue";
import Contact from "../pages/contact/Contact.vue";
import Documentation from "../pages/documentation/Documentation.vue";
import TermsAndConditions from "../pages/termsAndConditions/TermsAndConditions.vue";
import Pricing from "../pages/pricing/Pricing.vue";
import CommonQueriesPage from "../pages/commonQueries/CommonQueriesPage.vue";
import Test from "../pages/Test.vue";
import NotFound from "../pages/notfound/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Layout,

    children: [
      {
        path: "/",
        component: Home,
        name:"home"
      },

      {
        path: "/documentation",
        component: Documentation,
        name:'documentation'
      },
      {
        path: "/contact",
        component: Contact,
        name:'contact'
      },
      {
        path: "/pricing",
        component: Pricing,
        name:'pricing'
      },
   
      {
        path: "/common-queries",
        component: CommonQueriesPage,
        name:'common-queries'
      },
      {
        path: "/terms-conditions",
        component: TermsAndConditions,
        name:'terms-conditions'
      },
      {
        path: "/about",
        component: About,
        name:'about'
      },
      
      
    ],
  },

  {
    path: "/test",
    component: Test,
    name:'test'
  },
 
  {
    path: "/:notFound",
    component: NotFound,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
