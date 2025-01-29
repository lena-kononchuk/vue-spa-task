<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" @click="handleBackgroundClick">
    <div class="bg-white p-5 rounded-lg max-w-[400px] w-full relative" @click.stop>
      <button @click="closeModal" class="absolute top-2 right-2 bg-transparent border-none text-2xl text-black cursor-pointer hover:text-red-500">
        <i class="fas fa-times"></i>
      </button>
      <h2> {{ $t('message.writeReviewTitle') }}</h2>
      <textarea v-model="reviewText" :placeholder="$t('message.placeholderText')" class="w-full h-[100px] mb-3 p-2"></textarea>
      <div class="flex justify-between">
        <button @click="submitReview" class="px-4 py-2 text-sm text-white bg-gradient-to-r from-[#3CB9A0] to-[#1786AC] border rounded-lg hover:from-teal-400 hover:via-teal-500 hover:to-teal-600 transition duration-300 ease-in-out">
          {{ $t('message.submitButton') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

const emit = defineEmits(['review-added', 'close-modal']);

const reviewText = ref('');

const submitReview = async () => {
  if (reviewText.value.trim() === '') return;

  try {
    const reviewUrl = `https://67951133aad755a134eb1e31.mockapi.io/reviews`;

    const response = await axios.post(reviewUrl, {
      reviews: reviewText.value,
    });

    reviewText.value = '';
    emit('review-added', response.data);
    closeModal();
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

const closeModal = () => {
  emit('close-modal');
};

onMounted(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  window.addEventListener('keydown', handleEsc);

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEsc);
  });
});

const handleBackgroundClick = (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
};
</script>
