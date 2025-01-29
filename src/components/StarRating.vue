<template>
  <div class="inline-flex text-gray-300 text-3xl">
    <span
      v-for="i in 5"
      :key="i"
      :class="['star relative cursor-pointer transition-all duration-200 ease-in-out', {
        'text-yellow-400': i <= fullStars,
        'text-gray-300': i > fullStars,
        'text-gray-300': i === fullStars + 1 && !hasHalfStar, 
      }]"
      @click="setRating(i)"
    >
      ★
      <span
        v-if="i === fullStars + 1 && hasHalfStar"
        class="absolute inset-0 w-1/2 text-yellow-400 overflow-hidden"
      >
        ★
      </span>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    default: 0
  }
});

const fullStars = Math.floor(props.rating); 
const hasHalfStar = props.rating - fullStars >= 0.5; 
</script>
