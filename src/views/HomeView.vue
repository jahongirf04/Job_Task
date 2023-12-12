<script setup>
import TableComponent from '../components/TableComponent.vue'
import { ref } from 'vue'
import TreeCollapse from '../components/TreeCollapse.vue'

const nodes = ref([
  {
    id: 1,
    name: 'Animals',
    children: [
      {
        id: 2,
        name: 'Mammals',
        children: [
          { id: 3, name: 'Dogs' },
          { id: 4, name: 'Cats' }
        ]
      },
      {
        id: 5,
        name: 'Reptiles',
        children: [
          { id: 6, name: 'Snakes' },
          { id: 7, name: 'Lizards' }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Plants',
    children: [
      {
        id: 9,
        name: 'Flowers',
        children: [
          { id: 10, name: 'Roses' },
          { id: 11, name: 'Tulips' }
        ]
      },
      {
        id: 12,
        name: 'Trees',
        children: [
          { id: 13, name: 'Oak' },
          { id: 14, name: 'Pine' }
        ]
      }
    ]
  }
])

let table_data = ref({
  items: [
    { name: 'John brown', age: 23, address: 'New york no1 lake park', tags: ['TEACHER', 'COOL'] },
    { name: 'Sarah Frankie', age: 26, address: 'London no1 green park', tags: ['LOSER'] },
    {
      name: 'Lasely Biden',
      age: 21,
      address: 'Los angels no3 time square',
      tags: ['NICE', 'DEVELOPER']
    }
  ],
  titles: [
    { title: 'Name', field: 'name' },
    { title: 'Age', field: 'age' },
    { title: 'Address', field: 'address' },
    { title: 'Tags', field: 'tags' },
    { title: 'Action', field: 'action' }
  ]
})
</script>

<template>
  <div class="flex items-center justify-center h-screen flex-col gap-[40px]">
    <TableComponent class="w-[70%]" :items="table_data.items" :titles="table_data.titles">
      <template #head_name="{ item }">
        <span> ☺{{ item.title }} </span>
      </template>

      <template #body_name="{ item }">
        <span class="text-global1">{{ item.name }}</span>
      </template>

      <template #body_tags="{ item }">
        <div class="gap-[5px] flex flex-row items-start justify-center">
          <span
            v-for="i in item.tags"
            class="rounded p-[1px] border-2 border-opacity-40 border-solid bg-opacity-10 text-[11px]"
            :class="
              i == 'COOL' || i == 'NICE'
                ? 'text-success bg-success border-success'
                : i == 'LOSER'
                  ? 'text-error bg-error border-error'
                  : 'text-global1 bg-global1 border-global1'
            "
          >
            {{ i }}
          </span>
        </div>
      </template>

      <template #body_action="{ item }">
        <button class="text-global1 mr-[5px]">Invite - {{ item.name }}</button>
        <button class="text-global1 mr-[5px]">Delete</button>
        <select name="more" id="more" class="text-global1">
          <option value="" hidden selected>More actions</option>
          <option value="">Edit</option>
          <option value="">See more details</option>
        </select>
      </template>
    </TableComponent>

    <TreeCollapse :nodes="nodes"> </TreeCollapse>
  </div>
</template>
