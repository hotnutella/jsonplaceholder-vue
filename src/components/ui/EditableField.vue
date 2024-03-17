<template>
  <div class="editable-field">
    <input
      v-if="isEditing"
      ref="inputRef"
      type="text"
      v-model="value"
      @keydown.enter="handleSave"
      @keydown.escape="handleCancel"
      @blur="handleCancel"
    />
    <span v-else @click="handleEdit">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { nextTick } from 'vue'

export default {
  name: 'EditableField',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const value = ref(props.modelValue)
    const isEditing = ref(false)
    const inputRef = ref(null)

    const handleEdit = () => {
      isEditing.value = true
    }

    const handleSave = () => {
      isEditing.value = false
      emit('update:modelValue', value.value)
    }

    const handleCancel = () => {
      isEditing.value = false
      value.value = props.modelValue
    }

    onMounted(() => {
      nextTick(() => {
        if (isEditing.value && inputRef.value) {
          ;(inputRef.value as HTMLInputElement).focus()
        }
      })
    })

    return {
      value,
      isEditing,
      inputField: inputRef,
      handleEdit,
      handleSave,
      handleCancel
    }
  },
  watch: {
    isEditing(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          ;(this.$refs.inputRef as HTMLInputElement).focus()
        })
      }
    }
  }
}
</script>
