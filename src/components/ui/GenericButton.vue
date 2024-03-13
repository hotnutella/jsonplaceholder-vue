<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);

const handleClick = () => {
    emit('click');
};
</script>

<template>
    <button class="button" type="button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<style>
.button {
    background-color: var(--color-primary);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.secondary {
    background-color: var(--color-secondary);
    border: var(--color-primary) 1px solid;
    color: var(--color-primary);
}
</style>