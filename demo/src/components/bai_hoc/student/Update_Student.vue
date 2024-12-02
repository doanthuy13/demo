<script setup>
import {ref, reactive} from "vue";

let list_students = reactive([
    {id:"PH01", hoTen: "Nguyễn Văn A", namSinh: "2005", chuyenNghanh:"Phát triển phần mềm"},
    {id:"PH02", hoTen: "Nguyễn Văn B", namSinh: "2005", chuyenNghanh:"Ứng dụng phần mềm"},
    {id:"PH03", hoTen: "Nguyễn Văn C", namSinh: "2005", chuyenNghanh:"Lập trình Web"},
    {id:"PH03", hoTen: "Nguyễn Văn C", namSinh: "2005", chuyenNghanh:"Lập trình Web"},
])


function deleteItem(index){
    if(confirm('Bạn có chắc chắn muốn xóa không?')){
        list_students.splice(index,1);
    }
}

// const onClickDelete = (index)=>{
//     //lấy đc đối tượng trong list = index
//     student = list_students[index];
// }
</script>
<template>
    <div class="container">
        <h2>Danh sách sinh viên</h2>
        <button class="btn btn-success">Tạo mới</button>
        <table class="table table-triped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Năm sinh</th>
                    <th>Chuyên Nghành</th>
                    <th>Tương tác</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(student,index) in list_students" :key="list_students.id" >
                    <td>{{ student.id }}</td>
                    <td>{{ student.hoTen }}</td>
                    <td>{{ student.namSinh }}</td>
                    <td>{{ student.chuyenNghanh }}</td>
                    <td>
                        <button class="btn btn-success">Xem</button>
                        <button  class="btn btn-warning">Sửa</button>
                        <button @click="deleteItem(index)" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>


        <h2>Cập nhật sinh viên</h2>
        <form >
            <div class="mb-3">
                <span class="form-label">ID:</span>
                <input type="text" class="form-control" >
            </div>

            <div class="mb-3">
                <span class="form-label">Họ tên:</span>
                <input type="text" class="form-control" >
            </div>

            <div class="mb-3">
                <span class="form-label">Năm sinh</span>
                <input type="text" class="form-control" >
            </div>

            <div class="mb-3">
                <span class="form-label">Chuyên nghành</span>
                <input type="text" class="form-control" >
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-warning">Quay lại</button>
                <button class="btn btn-success">Cập nhật</button>
            </div>
        </form>
    </div>
</template>