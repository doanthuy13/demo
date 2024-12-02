<script setup>
import{ref, reactive} from "vue";
// Đối tượng

const list_Foods = reactive([]);

// showAdd
const showAdd = ref(false)

const foods= reactive({
    ten: "",
    danh_muc: "",
    gia: 0,
    so_luong: 0,
    mo_ta: "",
    trang_thai: false
})

const errors = reactive({});

const submitForm = ()=>{
// console.log(foods);
let isValidForm = true;
if(!foods.ten){
    isValidForm=false;
    errors.ten = "Bắt buộc nhập tên món";
}else{
    isValidForm=true;
    errors.ten="";
}
if(!foods.gia || foods.gia<0){
    isValidForm=false;
    errors.gia = "Bắt buộc nhập giá";
}else{
    isValidForm=true;
    errors.gia="";
}
if(!foods.so_luong || foods.so_luong<0){
    isValidForm=false;
    errors.so_luong = "Bắt buộc nhập số lượng";
}else{
    isValidForm=true;
    errors.so_luong="";
}
if(isValidForm){
    //thêm dữ liệu vào mảng
    list_Foods.push({
        ten: foods.ten,
        danh_muc: foods.danh_muc,
        gia: foods.gia,
        so_luong: foods.so_luong,
        mo_ta: foods.mo_ta,
        trang_thai: foods.trang_thai
    });
    console.log(list_Foods);

      //đóng thêm mới
      showAdd.value=false;
}
  

    // reload lại sau khi thêm
    foods.ten = "",
    foods.danh_muc = "",
    foods.gia = 0,
    foods.so_luong = 0,
    foods.mo_ta = "",
    foods.trang_thai = ""

}
// console.log(list_Foods);
</script>
<template>


<div>
    <h2>List đồ ăn</h2>
    <button @click="showAdd =! showAdd" class="btn btn-danger">Thêm mới đồ ăn</button>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Tên món</th>
                <th>Danh mục</th>
                <th>Giá tiền</th>
                <th>Số lượng</th>
                <th>Mô tả</th>
                <th>Trạng thái</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="food in list_Foods" :key="food">
                <td>{{ food.ten }}</td>
                <td>{{ food.danh_muc }}</td>
                <td>{{ food.gia }}</td>
                <td>{{ food.so_luong }}</td>
                <td>{{ food.mo_ta }}</td>
                <td>{{ food.trang_thai }}</td>
            </tr>
        </tbody>
    </table>
</div>
<div v-if="showAdd">
<h2>Thêm món ăn</h2>
<form @submit.prevent="submitForm">
<div class="mb-3">
    <span class="form-label">Tên món ăn:</span>
    <input type="text" class="form-control" placeholder="Nhập tên món ăn" v-model.trim="foods.ten">
    <span v-if="errors.ten" class="text-danger">{{ errors.ten }}</span>
</div>

<div class="mb-3">
    <span class="form-label">Danh mục:</span>
    <select name="" id="" class="form-control" v-model="foods.danh_muc">
        <option value="">Món ăn</option>
        <option value="1">Bánh mỳ </option>
        <option value="2">Hamburger</option>
        <option value="3">Pizza</option>
        <option value="4">Hotdog</option>
    </select>
</div>

<div class="mb-3">
    <span class="form-label">Giá món:</span>
    <input type="number" class="form-control" placeholder="Nhập giá" v-model="foods.gia">
    <span v-if="errors.gia" class="text-danger">{{ errors.gia }}</span>
</div>

<div class="mb-3">
    <span class="form-label">Số lượng:</span>
    <input type="number" class="form-control" placeholder="Nhập só lượng" v-model="foods.so_luong">
    <span v-if="errors.so_luong" class="text-danger">{{ errors.so_luong }}</span>

</div>

<div class="mb-3">
    <span class="form-label">Mô tả:</span>
    <textarea type="text" class="form-control" v-model.trim="foods.mo_ta"></textarea>
</div>

<div class="mb-3">
    <span class="form-label">Trạng thái:</span>
    <input type="checkbox" class="form-check-input" name="" id="" v-model="foods.trang_thai">Còn hàng
<div class="d-flex justify-content-center">
    <button class="btn btn-danger">Thêm mới</button>
</div>
</div>

</form>
</div>

</template>