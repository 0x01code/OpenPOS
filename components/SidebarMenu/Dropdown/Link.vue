<template>
    <div>
        <li class="mb-2">
            <NuxtLink :to="to" class="text-gray-400 hover:text-gray-500">
                <span>{{ $t(title) }}</span>
            </NuxtLink>
        </li>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
})
</script>

<style scoped></style>