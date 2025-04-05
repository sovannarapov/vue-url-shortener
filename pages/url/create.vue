<script lang="ts" setup>
import { ref } from 'vue';
import UrlForm from '@/components/UrlForm.vue';
import UrlService from '@/services/url.service.ts';
import type { UrlFormData } from '@/domain/interface';

const shortUrl = ref('');
const error = ref('');
const loading = ref(false);

const service = new UrlService();

async function createUrl(formData: UrlFormData) {
  try {
    loading.value = true;
    error.value = '';
    const { data } = await service.create(formData);
    shortUrl.value = data.shortUrl;
  } catch (err) {
    error.value = 'Failed to create short URL. Please try again.';
    console.error('Error creating URL:', err);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="container">
    <div class="grid">
      <article>
        <header>
          <h3>URLShortener</h3>
        </header>

        <UrlForm @create-url="createUrl" />

        <div v-if="error" role="alert" class="error">
          {{ error }}
        </div>
      </article>
      <div class="view-sell">
        <div class="view-sell-container">
          <h3>The Original URL Shortener</h3>
          <p>Create shorter URLs with URLShortener.</p>
          <p>
            Want more out of your link shortener? Track link analytics, use
            branded domains for fully custom links, and manage your links with
            our paid plans.
          </p>
          <div class="grid">
            <button class="outline border-radius-8">View Plans</button>
            <button class="border-radius-8">Create Free Account</button>
          </div>
          <div class="mt-4">
            <p>URLShortener plans include:</p>
            <div class="grid">
              <div>
                <div>
                  <font-awesome-icon icon="fa-solid fa-chart-line" />
                  <span class="ml-3">Detailed Link Analytics</span>
                </div>
                <div>
                  <font-awesome-icon icon="fa-solid fa-globe" />
                  <span class="ml-3">Fully Branded Domains</span>
                </div>
              </div>
              <div>
                <div>
                  <font-awesome-icon icon="fa-solid fa-link" />
                  <span class="ml-3">Bulk Short URLs</span>
                </div>
                <div>
                  <font-awesome-icon icon="fa-solid fa-share-nodes" />
                  <span class="ml-3">Link Management Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid" v-if="shortUrl">
      <div class="result">
        <p>Your shortened URL:</p>
        <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      </div>
    </div>
  </div>
</template>
