<script setup lang="ts">
import GenericButton from '@/components/ui/GenericButton.vue'
import UserDetails from '@/components/users/UserDetails.vue'
import { useUsersStore } from '@/stores/users'
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface User {
  id: number,
  name: string
}

const route = useRoute();
const router = useRouter();

const store = useUsersStore()
const user = ref<User | undefined>(undefined);
onMounted(async () => {
  await router.isReady();
  user.value = store.userById(Number(route.params.id));
})

</script>

<template>
  <h1>Detail view</h1>
  <UserDetails v-if="user" :user="user" />
  <GenericButton @click="handleClick">Back to users</GenericButton>
</template>

<script lang="ts">
export default {
  name: 'DetailView',
  methods: {
    handleClick() {
      this.$router.push('/')
    }
  }
}
</script>