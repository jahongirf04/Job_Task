<template>
  <div class="tree-node">
    <div class="node-content" @click="toggle">
      <span v-if="node.children && node.children.length > 0">
        [{{ isOpen ? "-" : "+" }}]
      </span>
      {{ node.name }}
    </div>
    <ul v-if="node.children && node.children.length > 0" v-show="isOpen">
      <li v-for="child in node.children" :key="child.id">
        <tree-node :node="child" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
