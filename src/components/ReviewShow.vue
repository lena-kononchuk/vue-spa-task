<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header class="flex h-16 items-center justify-between py-8">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/google.svg" alt="Logo" />
        </router-link>
      </div>
    </header>
    
    <div class="py-14">
      <div v-if="loading">{{ $t('message.loading') }}.</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div class="grid grid-cols-1 gap-6">
          <div
            v-for="review in reviews"
            :key="review.id"
            class="bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div class="flex items-center mb-4">
              <img :src="review.avatar" alt="avatar" class="w-[40px] h-[40px] rounded-full mr-3" />
              <div class="flex">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="text-xl"
                  :class="i <= review.rating ? 'text-yellow-500' : 'text-gray-400'"
                >★</span>
              </div>
            </div>
            <p class="pb-2"><strong>{{ review.name }}</strong></p>
            <p class="text-sm text-gray-600 pb-2">{{ review.reviews }}</p>
            <p class="text-xs text-gray-400">{{ formatDate(review.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const reviews = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch reviews from the API using axios
const fetchReviews = async () => {
  try {
    const response = await axios.get('https://67951133aad755a134eb1e31.mockapi.io/reviews');
    const data = response.data;
    // Sort reviews by creation date, last comment first
    reviews.value = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (err) {
    error.value = 'Failed to load reviews';  
  } finally {
    loading.value = false;
  }
};

// Format date to 'uk-UA' locale
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString('uk-UA');
  const formattedTime = date.toLocaleTimeString('uk-UA', { hour12: false });
  return `${formattedDate} ${formattedTime}`;
};

onMounted(() => {
  fetchReviews();
});
</script>
