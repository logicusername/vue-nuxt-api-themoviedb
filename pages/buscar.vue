<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const API_KEY = "39071bb70f38b7a46e253dc6bd866949";
const movies = ref([]);

const fetchMovies = async () => {
  if (route.query.movie) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${route.query.movie}`
      );
      const data = await response.json();
      movies.value = data.results;
    } catch (error) {
      console.error("Error fetch:", error);
    }
  }
};
fetchMovies();

watch(
  () => route.query.movie,
  (newMovie) => {
    console.log(`ha cambiado: ${newMovie}`);
    fetchMovies();
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <div v-if="movies.length > 0">
      <div class="grid place-content-center mt-36 ms-8 me-8">
        <section class="grid grid-cols-4 gap-5 grid-cards">
          <div
            v-for="movie in movies"
            :key="movie.id"
            class="cards flex flex-col"
          >
            <p>{{ movie.original_title }}</p>
            <div class="invisible">
              {{
                (path =
                  "https://image.tmdb.org/t/p/original/" + movie.poster_path)
              }}
            </div>
            <img :src="path" alt="" />
            <p>
              {{ movie.overview }}
            </p>
            <br />
            {{ movie.release_date }}
            <h1 class="text-xl">fecha de lanzamiento:</h1>
            <div class="mb-0">
              <NuxtLink :to="`/detail/${movie.id}`">
                <Button label="Ver Más" severity="info" raised />
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-else>
      <h1>NO HAY DATOS</h1>
    </div>
  </div>
</template>
