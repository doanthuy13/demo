<script setup>
import Header from "./components/Header_Com.vue"
import Menu from "./components/Menu_Com.vue"
import Footer from "./components/Footer_Com.vue"
// import Tao_Moi_Sp from "./components/product/Add_Product.vue"
// import Tao_Moi_Sp from "./components/foods/Add_Foods.vue"
// import Tao_Moi_Sp from "./components/khoa_hoc/Add_khoaHoc.vue"
import Tao_Moi_Sp from "./components/khoa_hoc/Add_khoaHoc.vue"
</script>
<template>~
<div class="container">
<Header></Header>
<!-- d-flex: căn ; row: chia cột  -->
<div class="d-flex row">
    <!-- Menu  -->
    <div class="col-3">
        <Menu></Menu>
    </div>
    <!-- Main  -->
    <div class="col-9">
    <Tao_Moi_Sp></Tao_Moi_Sp>
    </div>
</div>

    <Footer></Footer>

</div>
</template>
