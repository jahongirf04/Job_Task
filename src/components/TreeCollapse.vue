<template>
  <div class="tree-view">
    <ul>
      <li class="cursor-pointer" v-for="node in nodes" :key="node.id">
        <tree-node :node="node" />
      </li>
    </ul>
  </div>
</template>

<script>
import TreeNode from "./TreeNode.vue";

export default {
  props: {
    nodes: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeNode,
  },
};
</script>
