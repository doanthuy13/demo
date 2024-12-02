<!-- 
<script setup>
import {ref, onMounted} from "vue";
import instanceAxios from "@/util/configAxios";
const hotels = ref([]);
const hotel = ref({
    id: "",
    name: '',
    address: '',
    rating: 0,
    level: 0,
});
// ham lay danh sach 
const getListHotels = async ()=>{
    const response = await instanceAxios.get("hotels");
    console.log (response);
    if(response && response.data){
        response.value = response.data;

    }

};
// xoa 
const onClickDelete = async (hotelId)=>{
const response = await instanceAxios.delete(`hotels/${hotelId}`);
getListHotels();
};
const checkValidate = async()=>{
    if(!hotel.value.name || !hotel.value.address || !hotel.value.rating || !hotel.value.level){
        alert("vui long nhap thong tin ");
        return false;
    }
    return true;
};
// tao moi 
const onClickCreate = async()=>{
    if(!checkValidate()) return;
    if(hotelId.value.length>0){
        hotel.value.id = hotels.value.length + 1 + ""

    }else{
        hotel.value.id = 1;
    }
    const response = await instanceAxios.post("hotels",hotel.value);
    console.log(response);
    if(response && response.status == 200) {
        alert("them moi thanh cong");
        await getListHotels();
    }
}
// cap nhap 
const onClickUpdate = async(id)=>{
    if(!checkValidate()) return;
    const response = await instanceAxios.put(`hotels:${id}`,hotel.value);
    if(response && response.status == 200){
        alert("cap nhap thanh cong");
        await getListHotels();
    }

}
// xem 
const onClickShowDe = async(id)=>{
    const response = await instanceAxios.get(`hotels/${id}`);
    if(response $$ response.data){
        hotel.value = response.data;
    }
}
onMounted(()=>{
    getListHotels();
});
 
</script>


<template>
    <div class="container">
        <div>
            <h2> danh sach san pham</h2>
            <table class="table table-tripped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>ten</th>
                        <th>dia chi</th>
                        <th>danh gia</th>
                        <th>cap do</th>
                        <th>hang dong</th>
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
                            <button class="btn btn-info" @click="onClickShowDe(hotel.id)" >xem</button>
                            <button class=" btn btn-danger" @click="onClickDelete(hotel.id)">Xoa</button>
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
            <input class="form-control" type="text" disabled v-model ="hotel.id" >
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
            <input class="form-control" type="text" v-model="hotel.rating">

        </div>
        <div class="mt-3">
            <span class="form-label">Chất lượng:</span>
            <input class="form-control" type="text" v-model="hotel.level">
        </div>

        <div class="mt-3 text-center">
            <a class="btn btn-success me-3" @click="onClickCreate" :disabled = "!hotel.id">Tạo Mới</a>
            <a class="btn btn-info" @click="onClickUpdate(hotel.id)" :disabled = "!hotel.id">Cập nhật</a>
        </div>
    </form>
    </div>
    </div>
</template> -->
