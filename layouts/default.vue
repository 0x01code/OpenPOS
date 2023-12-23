<template>
    <div>
        <div class="fixed left-0 top-0 bg-white w-64 h-full p-4 border border-r z-50 transition-transform"
            :class="[isOpen ? 'md:-translate-x-full' : '-translate-x-full md:translate-x-0']">
            <NuxtLink to="/" class="flex items-center pb-4 border-b">
                <img src="https://placehold.co/32x32" class="w-8 h-8 rounded-md" alt="">
                <span class="text-gray-700 pl-2 text-xl">OpenPOS</span>
            </NuxtLink>

            <SidebarMenu>
                <SidebarMenuLink to="/" icon="icon-park-outline:dashboard" title="Dashboard" />
                <SidebarMenuLink to="/" icon="icon-park-outline:shopping-cart-one" title="Sell" />
                <SidebarMenuDropdown icon="icon-park-outline:box" title="Product Manager">
                    <SidebarMenuDropdownLink to="/" title="Import Product" />
                    <SidebarMenuDropdownLink to="/" title="Category" />
                </SidebarMenuDropdown>
                <SidebarMenuLink to="/" icon="icon-park-outline:logout" title="Logout" />
            </SidebarMenu>
        </div>
        <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden" :class="{ 'hidden': !isOpen }"
            @click="toggle"></div>

        <main class="md:w-[calc(100%-256px)] bg-gray-50 min-h-screen transition-all"
            :class="[isOpen ? 'md:w-full md:ml-0' : 'w-full md:ml-64']">
            <div class="flex justify-between px-2 py-2 bg-white border-b">
                <Icon v-if="isOpen" name="icon-park-outline:hamburger-button" class="w-6 h-6 cursor-pointer"
                    @click="toggle" />
                <Icon v-else name="icon-park-outline:close" class="w-6 h-6 cursor-pointer" @click="toggle" />

                <span>Administrator</span>
            </div>
            <div class="px-4 py-4">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
let isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped></style>