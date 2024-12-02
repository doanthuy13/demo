<script setup>
import {ref, reactive} from "vue";
const list_students = reactive([
    { id: "PH0001",
      name: "Nguyễn Văn A",
      yOb: 2004,
      mayjor: "Phát Triển Phần Mềm"
    },
    { id: "PH0002",
      name: "Nguyễn Thị B",
      yOb: 2005,
      mayjor: "Ứng Dụng Phần Mềm"
    },
    { id: "PH0003",
      name: "Nguyễn Văn C",
      yOb: 2005,
      mayjor: "Lập Trình WEB"
    }
  ])

  let student = ref({
      id: "",
      name: "",
      yOb: 0,
      mayjor: ""
  })

  // Sửa
 const onClickSelect = (index)=>{
    console.log(list_students[index]);
    // //TH1: gán lại giá trị student là reactive
    // student.id = list_students[index].id;
    // student.name = list_students[index].name;
    // student.yOb = list_students[index].yOb;
    // student.mayjor = list_students[index].mayjor

    //TH2: gán lại giá trị student là ref nếu thay đổi toàn bộ giá trị student
    student.value = list_students[index];

 }
 //Xóa
 const onClickDelete =(index)=>{
    const confirmed = confirm("Bạn có chắc muốn xóa không?");
    if(confirmed){
        list_students.splice(index,1);
    }
 }

 //Tạo mới
 const onClickCreate = ()=>{
console.log(student);
//Validate : viết hàm tự xử lý
const validate = true;
if(validate){
    list_students.push({
        id: student.value.id,
        name: student.value.name,
        yOb: student.value.yOb,
        mayjor: student.value.mayjor,
    });
    
}
 }

 //Cập nhật



</script>
<template>
    <div class="container mt-3 mb-3">
        <div>
            <h2>Danh sách</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Năm sinh</th>
                        <th>Chuyên nghành</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in list_students" :key="student.id">
                        <td>{{ student.id }}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.yOb }}</td>
                        <td>{{ student.mayjor }}</td>
                        <td>
                            <button class="btn btn-info me-3">Xem</button>
                            <button class="btn btn-warning me-3" @click="onClickSelect(index)">Sửa</button>
                            <button class="btn btn-danger" @click="onClickDelete(index)">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2>Cập nhật thông tin sinh viên</h2>
            <form>
        <div class="mt-3">
            <span class="form-label">ID:</span>
            <input type="text" class="form-control" v-model="student.id">
        </div>

        <div class="mt-3">
            <span class="form-label">Họ tên:</span>
            <input class="form-control" type="text" v-model="student.name">
        </div>

        <div class="mt-3">
            <span class="form-label">Năm sinh:</span>
            <input class="form-control" type="text" v-model="student.yOb">
        </div>

        <div class="mt-3">
            <span class="form-label">Chuyên ngành:</span>
            <select class="form-control" v-model="student.mayjor">
                <option value="">- Lựa chọn -</option>
                <option value="Phát Triển Phần Mềm">Phát Triển Phần Mềm</option>
                <option value="Ứng Dụng Phần Mềm">Ứng Dụng Phần Mềm</option>
                <option value="Lập Trình WEB">Lập Trình WEB</option>
            </select>
        </div>

        <div class="mt-3 text-center">
            <a href="" class="btn btn-secondary me-3">Quay Lại</a>
            <button class="btn btn-success me-3" @click="onClickCreate()">Tạo Mới</button>
            <button class="btn btn-info" @click="onClickUpdate()">Cập nhật</button>
        </div>
    </form>
        </div>

    </div>
</template>