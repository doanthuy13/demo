<script setup>
import { ref, onMounted } from "vue";
// Khai báo file kết nối cơ sở dữ liệu
import instanceAxios from "@/ultis/configAxios";
// Khai báo dùng hàm useRoute lấy params trên url
import { useRoute } from "vue-router";

// Khai báo biến tương tác form
const hotel = ref({
    id: "",
    name: "",
    address: "",
    rating: 0,
    level: 0,
});

// lấy thông tin cấu hình route trong route.js
const route = useRoute();
// lấy thông params tương ứng
console.log(route.params.id);
const selectedId = ref();

// validate
const checkValidate = () => {
    if (!hotel.value.name || !hotel.value.address ||
    !hotel.value.rating || !hotel.value.level) {
        alert("Yêu cầu bắt buộc nhập tất cả các trường");
        return false;
    }
    return true;
};

// Hàm lấy thông tin chi tiết
const getDetail = async() => {
  const response = await instanceAxios.get(`hotels/${selectedId.value}`)
  if (response) {
    hotel.value = response.data;
  }
}

// Hàm cập nhật
const onClickUpdate = async() => {

}

onMounted(() => {
  if (route && route.params) {
    selectedId.value = route.params.id;
    // Gọi API lấy thông tin chi tiết của object
    getDetail();
  } else {
    alert('Phải chọn đối tượng cần sửa')
  }

})
</script>
<template>
  <h2>Trang tạo mới</h2>
  <form @submit.prevent>
    <div class="mt-3">
      <span class="form-label">ID:</span>
      <input class="form-control" type="text" v-model="hotel.id" />
    </div>

    <div class="mt-3">
      <span class="form-label">Tên:</span>
      <input class="form-control" type="text" v-model.trim="hotel.name" />
    </div>

    <div class="mt-3">
      <span class="form-label">Địa chỉ:</span>
      <select class="form-control" v-model="hotel.address">
        <option value="">- Lựa chọn -</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Vĩnh Phúc">Vĩnh Phúc</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Đà Nẵng">Đà Nằng</option>
      </select>
    </div>

    <div class="mt-3">
      <span class="form-label">Đánh giá:</span>
      <input class="form-control" type="text" v-model.number="hotel.rating" />
    </div>
    <div class="mt-3">
      <span class="form-label">Chất lượng:</span>
      <input class="form-control" type="text" v-model.number="hotel.level" />
    </div>

    <div class="mt-3 text-center">
      <button
        class="btn btn-success me-3" @click="onClickUpdate">
        Cập nhật
      </button>
      <!-- <button
        class="btn btn-info"
        @click="onClickUpdate(hotel.id)"
        :disabled="hotel.id == ''">
        Cập nhật
      </button> -->
    </div>
  </form>
</template>