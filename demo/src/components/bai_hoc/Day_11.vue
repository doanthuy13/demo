<script setup>
import { ref, onMounted } from "vue";
// Khai báo file kết nối cơ sở dữ liệu
import instanceAxios from "@/ultis/configAxios";

// Khai báo biến ds khách sạn
const hotels = ref();
// khai bao tuong tac form 
const hotel = ref({
    id: "",
    name: "",
    address: "",
    rating: 0,
    level: 0,
  });


// Hàm lấy danh sách hotels
const getListHotels = async () => {
  const response = await instanceAxios.get("hotels");
  console.log(response);
  if (response && response.data) {
    hotels.value = response.data;
  }
};

// Hàm xóa
const onClickDelete = async (hotelId) => {
  // Confirm trước khi xóa
 
  // kiểm tra response trả về đã xóa được hay chưa
  // C1: Call api lấy ds mới
  getListHotels();
  // C2: dùng hàm filter xử lý arr bằng js
  // hotels.value = hotels.value.filter(item => item.id !== hotelId);
};
//validate
const checkValidate = async () => {
if(!hotel.value.name || !hotel.value.address || !hotel.value.rating || !hotel.value.level){
    alert("Vui lòng nhập đầy đu thông tin")
    return false;
  
}
return true;
}
// tao moi
const onClickCreate = async () => {
    if(!checkValidate()) return;
        if(hotels.value.length >0){
            hotel.value.id= hotels.value.length + 1 + ""

        }else{
            hotel.value.id= 1;
        }
        // call api 
        const response = await instanceAxios.post("hotels", hotel.value);
        console.log(response);
        if(response && response.status == 200){
            alert("Thêm mới thành công")
            // cap nhat lai ds
            await getListHotels();
        }


    }

// cap nhap
const onClickUpdate = async (id) => {
    if(!checkValidate()) return;
    const response = await instanceAxios.put(`hotels/${id}`, hotel.value);
    if(response && response.status == 200){
        alert("Cập nhật thành công");
        // cap nhat lai ds
        await getListHotels();
    }
    
}
// chuc nang xem 
const onClickShowDe = async (id) =>{
    const response = await instanceAxios.get(`hotels/${id}`);
    if(response && response.data){
        hotel.value = response.data;
    }

}

// hook được gọi khi Dom vừa load xong
onMounted(() => {
  getListHotels();
});
</script>
<template>
  <div class="container">
    <div>
      <h2>Danh sách khách sạn</h2>
      <table class="table table-tripped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Đánh giá</th>
            <th>Cấp độ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in hotels" :key="hotel.id">
            <td>{{ hotel.id }}</td>
            <td>{{ hotel.name }}</td>
            <td>{{ hotel.address }}</td>
            <td>{{ hotel.rating }}</td>
            <td>{{ hotel.level }}</td>
            <td>
              <button class="btn btn-info" @click="onClickShowDe(hotel.id)">Xem</button>
              <button class="btn btn-danger" @click="onClickDelete(hotel.id)">Xóa</button>
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
            <input class="form-control" type="text" disabled v-model="hotel.id">
        </div>

        <div class="mt-3">
            <span class="form-label">Tên:</span>
            <input class="form-control" type="text" v-model.trim="hotel.name" >
        </div>

        <div class="mt-3">
            <span class="form-label">Địa chỉ:</span>
            <select class="form-control" v-model="hotel.address">
                <option value="">- Lựa chọn -</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
            </select>
        </div>

        <div class="mt-3">
            <span class="form-label">Đánh giá:</span>
            <input class="form-control" type="text" v-model.number="hotel.rating">

        </div>
        <div class="mt-3">
            <span class="form-label">Chất lượng:</span>
            <input class="form-control" type="text" v-model.number="hotel.level">
        </div>

        <div class="mt-3 text-center">
            <a class="btn btn-success me-3" @click="onClickCreate" :disabled="!hotel.id">Tạo Mới</a>
            <a class="btn btn-info" @click="onClickUpdate(hotel.id)" :disabled="!hotel.id">Cập nhật</a>
        </div>
    </form>
    </div>
  </div>
</template>
