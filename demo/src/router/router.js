import {createRouter,createWebHistory, useRoute}from 'vue-router';
import ListView from '@/components/bai_hoc/Day14/ListView.vue';
import CreateView from '@/components//bai_hoc/Day14/CreateView.vue';
import UpdateView from '@/components/bai_hoc/Day14/UpdateView.vue';
import DetaliView from '@/components/bai_hoc/Day14/DetaliView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path: '/',component:ListView,name:'ListView'},
        {path:'/create',component:CreateView,name:'CreateView'},
        {path:'/update/:id',component:UpdateView,name:'UpdateView'},
        {path:'/detail/:id',component:DetaliView,name:'DetaliView'},

    ]
    
})
export default router;
