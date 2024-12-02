<script setup>
import { ref, onMounted } from "vue";
import instanceAxios from "@/ultis/configAxios";
import ConfirmDelete from "./modal/confirimdelete.vue";
const hotels = ref();
const isShowModal = ref(false);
const selectedHotel = ref({
    id: "",
    name: "",
    address: "",
    rating: 0,
    level: 0,
});
// Hàm lấy dữ liệu từ json-server đổ vào hotels
// Hàm lấy danh sách hotels
const getListHotels = async () => {
  const response = await instanceAxios.get("hotels");
  console.log(response);
  if (response && response.data) {
    hotels.value = response.data;
  }
}

const handleToggleModal = async (item) => {
  isShowModal.value = true;
  selectedHotel.value = await item;
}

const handleCloseModal = () => {
  isShowModal.value = false;
}

onMounted(() => {
  getListHotels();
});
</script>
<template>
  <h2>Trang danh sách</h2>
  <RouterLink to="/create" class="btn btn-success">Tạo mới</RouterLink>
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
          <!-- <button class="btn btn-info" @click="onClickShowDetail(hotel.id)">
            Xem
          </button> -->
          <RouterLink :to="{name: 'detail-view' , params: { id: hotel.id }}"
          class="btn btn-warning me-3">Xem</RouterLink>
          <RouterLink :to="{name: 'update-view', params: {id: hotel.id}}"
          class="btn btn-info me-3"> Cập nhật</RouterLink>
          <button class="btn btn-danger" @click="handleToggleModal(hotel)">
            Xóa
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Nhúng Confirm Modal -->
  <ConfirmDelete v-if="isShowModal"
  :selectedHotel="selectedHotel"
  :handleCloseModal="handleCloseModal"
  :isShowModal="isShowModal"
  @closeModal="handleCloseModal"
  @getNewList="getListHotels"></ConfirmDelete>
</template>