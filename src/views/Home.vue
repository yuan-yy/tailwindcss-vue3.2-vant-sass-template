
<script setup>
import { ref, onMounted } from "vue"
import { RadioGroup, Radio, Cell, CellGroup, Button } from 'vant';
import { useRouter } from 'vue-router'
const checked = ref("");
const listChoice = [
  { name: '每天1次(9点推送)', checked: '1' },
  { name: '每天2次(9点,12点推送)', checked: '2' },
  { name: '每天3次(9点,12点,18点推送)', checked: '3' },
  { name: '每天整点推送', checked: '4' },
]
const router = useRouter()

const height = window.innerHeight + 'px';

onMounted(() => {
  console.log("初始化");
  checked.value = '3'
  console.log(router.currentRoute.value.query)
})
</script>
<template>
  <div class="container bg-[#EFF1F5] px-[20px] h-[100%] pt-[50px]">
    <div class="bg-[#FFFFFF] py-[20px] rounded-[10px]">
      <div class="text-[19px] pl-[16px] text-[#000000]" style="font-weight: 500;">每天推送时间</div>
      <RadioGroup v-model="checked">
        <CellGroup inset>
          <Cell
            :title="item.name"
            clickable
            @click="checked = item.checked"
            v-for="(item, index) in listChoice"
            :key="index"
            class="text-[26px]"
          >
            <template #right-icon>
              <Radio :name="item.checked" />
            </template>
          </Cell>
        </CellGroup>
      </RadioGroup>
    </div>
  </div>
  <div class="px-[15px] absolute inset-x-[0px] bottom-[30px] h-[38px]">
    <Button type="primary" :round="true" size="large" class="btn h-[100%]">保存</Button>
  </div>
</template>

<style lang="scss"  scoped>
.container {
  height: v-bind(height) !important;
  ::v-deep(.van-cell-group) {
    margin: 0;
    .van-cell__title {
      font-size: 30px;

      > span {
        font-size: 16px;
      }
    }
  }
}
.van-b {
  position: absolute !important;
}
.btn {
  height: 38px;
}
</style>