<script setup lang="ts">
import GenericButton from '@/components/ui/GenericButton.vue';
</script>

<template>
  <h1>Detail view</h1>
  <GenericButton @click="handleClick">Back to users</GenericButton>
</template>

<script lang="ts">
export default {
  name: 'DetailView',
  methods: {
    handleClick() {
      this.$router.push('/');
    }
  }
}

</script>