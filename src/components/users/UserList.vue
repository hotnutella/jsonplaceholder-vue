<script setup lang="ts">
import UserListItem from '@/components/users/UserListItem.vue';
import { useUsersStore } from '@/stores/users';
import { ref, onMounted } from 'vue';

interface User {
    id: number,
    name: string
}

const store = useUsersStore();
const users = ref<User[]>([]);

onMounted(async () => {
    users.value = await store.latestUsers;
});
</script>

<template>
    <UserListItem v-for="user in users" v-bind:key="user.id" v-bind:user="user" />
</template>