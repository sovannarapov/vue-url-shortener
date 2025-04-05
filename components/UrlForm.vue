<script lang="ts" setup>
import { ref } from 'vue';
import type { UrlFormData } from '@/domain/interface';

const emit = defineEmits<{
  createUrl: [form: UrlFormData];
}>();

const url = ref('');
const alias = ref('');

async function formSubmit() {
  emit('createUrl', {
    url: url.value,
  });
}
</script>

<template>
  <form @submit.prevent="formSubmit">
    <fieldset>
      <label for="url">
        <font-awesome-icon icon="fa-solid fa-link" />
        <span class="ml-1">Shorten a long URL</span>
      </label>
      <input
        v-model="url"
        name="url"
        class="border-radius-10"
        id="url"
        placeholder="Enter long link here"
        required
      />
    </fieldset>
    <fieldset>
      <label for="customize">
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
        <span class="ml-1">Customize your link</span>
      </label>
      <div class="grid">
        <select
          class="border-radius-10"
          name="favorite-cuisine"
          aria-label="Select your favorite cuisine..."
        >
          <option selected value="">urlshortener.com</option>
        </select>
        <input
          v-model="alias"
          name="alias"
          class="border-radius-10"
          id="alias"
          placeholder="Enter alias"
          type="text"
        />
      </div>
    </fieldset>
    <button type="submit" class="border-radius-10 btn-green">
      Shorten URL
    </button>
  </form>
</template>
