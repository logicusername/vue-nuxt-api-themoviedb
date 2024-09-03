<script setup>
const API_KEY = "39071bb70f38b7a46e253dc6bd866949";
const response = await fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY
);
const data = await response.json();
const posts = data.results;

let images = [];
for (let i = 0; i < posts.length; i++) {
  images.push("https://image.tmdb.org/t/p/original" + posts[i].poster_path);
}
</script>

<template>
  <div class="grid place-content-center mt-36 ms-8 me-8">
    <section class="grid grid-cols-4 gap-5 grid-cards">
      <div v-for="post in posts" :key="post.id" class="cards flex flex-col">
        <p>{{ post.original_title }}</p>
        <div class="invisible">
          {{
            (path = "https://image.tmdb.org/t/p/original/" + post.poster_path)
          }}
        </div>
        <img :src="path" alt="" />
        <p class="m-0">
          {{ post.overview }}
        </p>
        <br />
        {{ post.release_date }}
        <h1 class="text-xl">fecha de lanzamiento:</h1>
        <div class="mb-0">
          <NuxtLink :to="`/detail/${post.id}`">
            <Button label="Ver Más" severity="info" raised />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
@media (max-width: 1380px) {
  .grid-cards {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media (max-width: 800px) {
  .grid-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
