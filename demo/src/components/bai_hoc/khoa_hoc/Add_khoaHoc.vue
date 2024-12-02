<script setup>
import {ref,reactive} from "vue";
// Tạo showAdd
const showAdd = ref(false);
//show giỏ hàng
const showStore = ref(false);
// Tạo đối tượng
const khoa_Hoc = reactive({
    ten: "",
    danh_muc: "",
    gia: 0,
    so_luong: 0,
    mo_ta: "",
    trang_thai: false,
})

//list đối tượng
const list_khoaHoc = reactive([]);

//xóa
function deleteItem(index){
    list_khoaHoc.splice(index,1);
}



//khai báo lỗi
const errors = reactive({});

const submitForm = ()=>{

    let isValidForm = true;

    if(!khoa_Hoc.ten){
        isValidForm = false;
        errors.ten= "Bắt buộc nhập tên khóa học";
    }else{
        isValidForm = true;
        errors.ten ="";
    }

    if(!khoa_Hoc.gia || khoa_Hoc.gia<0){
        isValidForm = false;
        errors.gia= "Bắt buộc nhập tên giá";
    }else{
        isValidForm = true;
        errors.gia ="";
    }

    if(!khoa_Hoc.so_luong || khoa_Hoc.so_luong<0){
        isValidForm = false;
        errors.so_luong= "Bắt buộc nhập số lượng khóa học";
    }else{
        isValidForm = true;
        errors.so_luong ="";
    }

    
    if(isValidForm){
        //thêm dữ liệu vào mảng
        list_khoaHoc.push({
            ten: khoa_Hoc.ten,
            danh_muc: khoa_Hoc.danh_muc,
            gia: khoa_Hoc.gia,
            so_luong: khoa_Hoc.so_luong,
            mo_ta: khoa_Hoc.mo_ta,
            trang_thai: khoa_Hoc.trang_thai,
        });
        console.log(list_khoaHoc);

     // đóng showAdd
    showAdd.value = false;
    showStore.value = false;
        
    }

   
}

let total = 0;
//Tính tổng tiền trong giỏ hàng
function totalCartValue(){
    // //Cách 1: 
    // for( let i=0; i<list_albums.length; i++){
    //     total += list_albums[i].price * list_albums[i].quantity;
    // }
    // return total;

    //Cách 2:
    return list_khoaHoc.reduce((total,item)=>{
        return total + item.gia * item.so_luong
    }, 0);

}

</script>

<template>

<div>
    <h2>Danh sách khóa học</h2>
    <p><button @click="showAdd =! showAdd" class="btn btn-danger">Thêm mới</button></p>
    <button @click="showStore =! showStore" class="btn btn-danger">Giỏ hàng</button>
    <hr>
    <table class="table table-striped">
        <thead >
        <tr>
            <th>Tên khóa học</th>
            <th>Danh mục</th>
            <th>Giá tiền</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Trạng thái</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="kh in list_khoaHoc" :key="kh">
            <td>{{ kh.ten }}</td>
            <td>{{ kh.danh_muc }}</td>
            <td>{{ kh.gia }}</td>
            <td>{{ kh.so_luong }}</td>
            <td>{{ kh.mo_ta }}</td>
            <td>{{ kh.trang_thai ? 'Còn khóa học' : 'Hết khóa học' }}</td>
        </tr>
        </tbody>
    </table>
</div>
<div v-if="showAdd">
<h2>Thêm mới khóa học</h2>
<form action="" @submit.prevent="submitForm">
<div class="mb-3">
<span class="form-label">Tên khóa học</span>
<input type="text" class="form-control" placeholder="Nhập tên khóa học" v-model.trim="khoa_Hoc.ten">
<span v-if="errors.ten" class="text-danger">{{ errors.ten }}</span>
</div>

<div class="mb-3">
<span class="form-label">Danh mục</span>
<select name="" id="" class="form-control" v-model="khoa_Hoc.danh_muc">
    <option value="">--Khóa học---</option>
    <option value="1">2023-2025</option>
    <option value="2">2024-2026</option>
</select>
</div>

<div class="mb-3">
<span class="form-label">Giá tiền</span>
<input type="number" class="form-control" placeholder="Nhập giá tiền" v-model="khoa_Hoc.gia">
<span v-if="errors.gia" class="text-danger">{{ errors.gia }}</span>
</div>

<div class="mb-3">
<span class="form-label">Số lượng </span>
<input type="text" class="form-control" placeholder="Nhập số lượng" v-model="khoa_Hoc.so_luong">
<span v-if="errors.so_luong" class="text-danger">{{ errors.so_luong }}</span>

</div>

<div class="mb-3">
<span class="form-label">Mô tả</span>
<textarea name="" id="" class="form-control" v-model.trim="khoa_Hoc.mo_ta"></textarea>
</div>

<div class="mb-3">
<span class="form-label">Trạng thái:</span> <br>
<input type="checkbox" class="form-check-input" v-model="khoa_Hoc.trang_thai" >Còn khóa học
<hr>
<div class="d-flex justify-content-center">
<button class="btn btn-danger" >Thêm mới</button>
</div>
</div>

</form>
</div>
<hr>
<div>
    <div v-if="showStore">
    <h2>Giỏ hàng</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Tên khóa học</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(kh,index) in list_khoaHoc" :key="kh">
            <td>{{ kh.ten }}</td>
            <td>{{ kh.gia }}</td>
            <td>
            <button @click="kh.so_luong--" class="btn">-</button>
                {{ kh.so_luong }}
            <button class="btn" @click="kh.so_luong++">+</button>
            </td>
            <td>{{ kh.gia*kh.so_luong }}</td>
            <td><button class="btn btn-danger" @click="deleteItem(index)">Xóa</button></td>
            </tr>
        </tbody>
    </table>
    <hr>
    <h2>Thành tiền: {{ totalCartValue() }}</h2>
</div>
</div>

</template>