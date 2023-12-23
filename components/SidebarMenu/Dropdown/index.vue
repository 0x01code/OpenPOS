<template>
    <div>
        <li class="mb-1 py-2 px-2 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700">
            <div class="flex items-center justify-between cursor-pointer" @click="isOpen = !isOpen">
                <div>
                    <Icon :name="icon" class="w-6 h-6" />
                    <span class="ml-2">{{ $t(title) }}</span>
                </div>
                <Icon v-if="isOpen" name="icon-park-outline:down" class="w-6 h-6" />
                <Icon v-else name="icon-park-outline:right" class="w-6 h-6" />
            </div>
            <ul class="pl-7 mt-2" :class="{ 'hidden': !isOpen }">
                <slot />
            </ul>
        </li>
    </div>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

let isOpen = ref(false)

</script>

<style scoped></style>