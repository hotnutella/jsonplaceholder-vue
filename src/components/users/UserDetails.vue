<script setup lang="ts">
import EditableField from '@/components/ui/EditableField.vue';
</script>

<template>
    <div class="user-details">
        <EditableField v-model="localUser.name" />
    </div>
</template>

<script lang="ts">

export default {
    name: 'UserDetails',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: this.user
        };
    }
}
</script>