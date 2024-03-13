<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

interface User {
    id: number,
    name: string
}

const props = defineProps({
    user: Object as () => User
});

</script>

<template>
    <div class="item">
        <div>
            <RouterLink :to="{ name: 'detail', params: { id: props.user?.id.toString() } }">
                {{ props.user?.name }}
            </RouterLink>
        </div>
        <div class="delete">
            <a href="#">Delete</a>
        </div>
    </div>
    
</template>

<style scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    color: var(--color-primary);
}

.item:hover {
    background-color: #f4f4f4;
}

.item a {
    color: var(--color-primary);
    text-decoration: none;
}

.item .delete a {
    opacity: 0.5;
}

.item .delete a:hover {
    opacity: 1;
}
</style>