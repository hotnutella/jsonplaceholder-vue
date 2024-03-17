<script setup lang="ts">

export interface User {
    id: number,
    name: string
}

</script>

<template>
    <div class="item" @click="openDetail">
        <div>
            {{ user?.name }}
        </div>
        <div class="delete">
            <a href="#" @click="deleteItem">Delete</a>
        </div>
    </div>
    
</template>

<script lang="ts">
export default {
    name: 'UserListItem',
    props: {
        user: {
            type: Object as () => User,
            required: true
        }
    },
    methods: {
        openDetail() {
            this.$router.push({ name: 'detail', params: { id: this.user.id.toString() } });
        },
        deleteItem(e: Event) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}
</script>

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