<script lang="ts" setup>
import { ref } from 'vue';

const url = ref('');
const shortUrl = ref('');

const createUrl = () => {
  console.log('Create the url...');
};
</script>

<template>
  <div class="container">
    <div class="grid">
      <article>
        <header>
          <h3>URLShortener</h3>
        </header>
        <form @submit.prevent="createUrl">
          <fieldset>
            <label for="url">
              <font-awesome-icon icon="fa-solid fa-link" />
              <span class="ml-1">Shorten a long URL</span>
            </label>
            <input
              class="border-radius-10"
              v-model="url"
              id="url"
              placeholder="Enter long link here"
              required
              type="text"
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
                required
              >
                <option selected value="">urlshortener.com</option>
              </select>
              <input
                class="border-radius-10"
                v-model="url"
                id="url"
                placeholder="Enter alias"
                required
                type="text"
              />
            </div>
          </fieldset>
        </form>
        <footer>
          <input
            type="submit"
            value="Shorten URL"
            class="border-radius-10 btn-green"
          />
        </footer>
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
    <div class="grid">
      <div v-if="shortUrl">
        <p>Shortened URL: {{ shortUrl }}</p>
      </div>
    </div>
  </div>
</template>
