<script setup>
    defineProps ({
        text: {
            type: String
        },
        image_data: {
            type: Image
        }
    })
</script>

<template>
    <div>
        <img src="profile2.png" alt="">
        <p>{{ text }}</p>
    </div>
</template>