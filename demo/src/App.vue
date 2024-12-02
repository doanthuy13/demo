<script setup>
import Header from './components/bai_hoc/Header_Com.vue';
import Footer from './components/bai_hoc/Footer_Com.vue';
import Main from './components/lap5_6/lap5-6.vue';

</script>
<template>
    <div class="cotainer-fluid">
        <div>
            <Header></Header>
        </div> 
        <!-- <Main></Main> -->
    <div class="container">
        <router-view></router-view>
        </div>
<div class="bg-succes">
    <Footer></Footer>
</div> 
</div>
</template>