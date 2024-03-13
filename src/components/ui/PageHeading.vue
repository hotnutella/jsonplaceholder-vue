<script setup lang="ts">
</script>

<template>
    <h1 class="page-heading">
        <slot></slot>
    </h1>
</template>

<style>
.page-heading {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0 1rem;
    text-transform: uppercase;
    color: var(--primary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>