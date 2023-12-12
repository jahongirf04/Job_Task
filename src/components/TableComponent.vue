<template>
    <table class="w-[80%] border-dotted border-[2px] border-slate-500">
    <tr class="h-[40px]">
      <th
        class="p-[5px] text-[black] bg-[#f1f1f1]"
        v-for="(item, index) in props.titles"
        :key="index"
      >
        <slot :name="`head_${item?.field}`" :item="item">
            <span>{{ item?.title }}</span>
        </slot>
      </th>
    </tr>

    <tr v-for="(item, index) in items" :key="index">
      <td
        class="text-center p-[5px] h-[45px] text-[black]"
        v-for="(title, index) in props.titles">
        <slot :name="`body_${title?.field}`" :item="item">
            <span>{{ item[title?.field] }}</span>
        </slot>
      </td>
    </tr>
  </table>
</template>

<script setup>

const props = defineProps({
  items: {
    type: Array,
  },
  titles: {
    type: Array,
  },
});

</script>

<style scoped>

</style>