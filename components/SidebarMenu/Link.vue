<template>
    <div>
        <li class="mb-1 py-2 px-2 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700">
            <NuxtLink :to="to" class="flex items-center">
                <Icon :name="icon" class="w-6 h-6" />
                <span class="ml-2">{{ $t(title) }}</span>
            </NuxtLink>
        </li>
    </div>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
})

</script>

<style scoped></style>