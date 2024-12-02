<script setup>
import {ref, reactive} from "vue"

//Mảng
const list_Products = reactive([]);


// Trạng thái form
const showForm = ref(false);

//Đối tượng
const product = reactive({
    name:"",
    price:0,
    quantity:0,
    description:"",
    category_id:"",
    status:false,
});

//biến lưu thông báo lỗi

const errors = reactive({});
const submitForm = ()=>{
//lấy dữ liệu nhập vào từ form
    // console.log(product)
//kiểm tra dữ liệu đầu vào
    let isFormValid = true;
    if(!product.name){
        isFormValid = false;
        errors.name = "Tên bắt buộc nhập";
    }else{
        isFormValid=true;
        errors.name = "";
    }
    if(!product.price || product.price <0){
        isFormValid = false;
        errors .price ="Giá bắt buộc nhập và phải lớn hơn 0";

    }else{
        isFormValid=true;
        errors.price = "";
    }
    if(!product.quantity || product.quantity <0){
        isFormValid = false;
        errors .quantity ="Số lượng bắt buộc nhập và phải lớn hơn 0";

    }else{
        isFormValid=true;
        errors.quantity = "";
    }
    if(isFormValid){
     //thêm dữ liệu từ form vào bảng
     list_Products.push({
        name : product.name,
        category_id : product.category_id,
        description : product.description,
        price : product.price,
        quantity : product.quantity,
        status : product.status
     });
     console.log(list_Products);
     
      //Đóng form
     showForm.value = false;
     
    }


   
    
    
};
</script>

<template>
    <div>
        <h2>Danh sách sản phẩm</h2>
        <button class="btn btn-success" @click="showForm =!showForm">Tạo mới</button>
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pro in list_Products" :key="pro">
                    <td>{{ pro.name }}</td>
                    <td>{{ pro.category_id }}</td>
                    <td>{{ pro.description }}</td>
                    <td>{{ pro.price }}</td>
                    <td>{{ pro.quantity }}</td>
                    <td>{{ pro.status }}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="showForm"> 
        <h2>Tạo mới sản phẩm</h2>
<form action="" @submit.prevent="submitForm">
<div class="mb-3">
<span class="form-label">Tên sản phẩm: </span>
<input type="text" class="form-control" placeholder="Nhập tên sản phẩm" v-model.trim="product.name">
<span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
</div>

<div class="mb-3">
<span class="form-label">Danh mục: </span>
<select name="" id="" class="form-control" v-model="product.category_id">
    <option value="">--Lựa chọn--</option>
    <option value="1">Danh mục 1</option>
    <option value="2">Danh mục 2</option>
</select>
</div>

<div class="mb-3">
<span class="form-label">Mô tả: </span>
<textarea type="text" class="form-control" v-model.trim="product.description"></textarea>
</div>

<div class="mb-3">
<span class="form-label">Giá sản phẩm: </span>
<input type="number" class="form-control" placeholder="Nhập giá sản phẩm" v-model.number="product.price">
<span v-if="errors.price" class="text-danger">{{ errors.price }}</span>

</div>


<div class="mb-3">
<span class="form-label">Số lượng sản phẩm: </span>
<input type="number" class="form-control" placeholder="Nhập số lượng sản phẩm" v-model.number="product.quantity">
<span v-if="errors.quantity" class="text-danger">{{ errors.quantity}}</span>

</div>

<div class="mb-3">
<span class="form-label">Trạng thái: </span>
<input type="checkbox" class="form-check-input" v-model="product.status">Còn hàng
<div class="d-flex justify-content-center">
<button class="btn btn-danger">Tạo mới</button>
</div>
</div>

</form>  
</div>
    </div>

</template>