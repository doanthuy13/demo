<script setup >
import { ref, onMounted } from "vue";
import instanceAxios from "@/ultis/configAxios.js";
const phones = ref();
const phone = ref ({
    id: null,
    name: '',
    brand: '',
    price: '',
    img: '',
  });
// Hàm lấy danh sách hotels
const getListPhones = async () => {
  const response = await instanceAxios.get("phones");
  console.log(response);
  if (response && response.data) {
    phones.value = response.data;
  }
};
// xoa
const onClickDelete = async (phoneId) => {
    if(confirm("ban muon xoa khong ? ")){

        const response = await instanceAxios.delete(`phones/${phoneId}`);
        phones.value = phones.value.filter(item=>item.id !== phoneId);
    getListPhones();

    }
    



};
//validate
const checkValidate = async () => {
if(!phone.value.name || !phone.value.address || !phone.value.rating || !phone.value.level){
    alert("Vui lòng nhập đầy đủ thông tin")
    return false;
  
}
return true;
}
// tao moi
const onClickCreate = async () => {
    if(!checkValidate()) return;
        if(phones.value.length >0){
            phone.value.id= phones.value.length + 1 + ""

        }else{
            phone.value.id= 1;
        }
        // call api 
        const response = await instanceAxios.post("phones", phone.value);
        console.log(response);
        if(response && response.status == 200){
            alert("Thêm mới thành công")
            // cap nhat lai ds
            await getListphones();
        }
    }
    // chuc nang xem 
const onClickShowDe = async (id) =>{
    const response = await instanceAxios.get(`phones/${id}`);
    if(response && response.data){
        phone.value = response.data;
    }

}
// cap nhap
const onClickUpdate = async (id) => {
    if(!checkValidate()) return;
    const response = await instanceAxios.put(`phones/${id}`, phone.value);
    if(response && response.status == 200){
        alert("Cập nhật thành công");
        // cap nhat lai ds
        await getListPhones();
    }
    
}




onMounted(() => {
  getListPhones();
});

</script>

<template>
   <div class="container">
    <div>
      <h2>Danh sách Iphone</h2>
      <table class="table table-tripped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Img</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="phone in phones" :key="phone.id">
            <td>{{ phone.id }}</td>
            <td>{{ phone.name }}</td>
            <td>{{ phone.brand }}</td>
            <td>{{ phone.price }}</td>
            <td>
                <img :src="phone.img" alt="" width="70px">
            </td>
            <td>
              <button class="btn btn-info" @click="onClickShowDe(phone.id)">Xem</button>
              <button class="btn btn-danger" @click="onClickDelete(phone.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div>
      <h2>Tạo mới khách sạn</h2>
      <form>
        <div class="mt-3">
            <span class="form-label">ID:</span>
            <input class="form-control" type="text" disabled v-model="phone.id">
        </div>

        <div class="mt-3">
            <span class="form-label">Tên:</span>
            <input class="form-control" type="text" v-model.trim="phone.name" >
        </div>

        <div class="mt-3">
            <span class="form-label">Brand:</span>
            <select class="form-control" v-model="phone.brand">
                <option value="">- Lựa chọn -</option>
                <option value="Sam sung">Sam sung</option>
                <option value="Oppo">Oppo</option>
                <option value="Iphone">Iphone</option>
                
            </select>
        </div>

        <div class="mt-3">
            <span class="form-label">Giá </span>
            <input class="form-control" type="text" v-model.number="phone.price">

        </div>
        <div class="mt-3">
            <span class="form-label">Hình ảnh :</span>
            <input class="form-control" type="text" v-model.number="phone.img">
        </div>

        <div class="mt-3 text-center">
            <a class="btn btn-success me-3" @click="onClickCreate" :disabled="!phone.id">Tạo Mới</a>
            <a class="btn btn-info" @click="onClickUpdate(phone.id)" :disabled="!phone.id">Cập nhật</a>
        </div>
    </form>
    </div>
  </div>
</template>



