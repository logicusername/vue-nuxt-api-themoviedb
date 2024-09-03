<script setup>
const ruta = useRoute();
const API_KEY = "39071bb70f38b7a46e253dc6bd866949";
const response = await fetch(
  `https://api.themoviedb.org/3/movie/${ruta.params.id}?api_key=39071bb70f38b7a46e253dc6bd866949&language=en-US`
);
const data = await response.json();
const movie = data;
let calificacion = movie.vote_average.toString();
calificacion = calificacion.slice(0,3)
</script>
<template>
  <div class="grid place-content-center mt-36 ms-8 me-8">
    <section>
      <div :key="movie.id">
        <p>{{ movie.original_title }}</p>
        <div class="invisible">
          {{
            (path = "https://image.tmdb.org/t/p/original/" + movie.poster_path)
          }}
        </div>
        <div class="flex">
          <div>
            <img :src="path" alt="" />
          </div>
          <div class="m-8">
            <p class="m-0">
              {{ movie.overview }}
            </p>
            <br />
            <h1 class="text-xl">fecha de lanzamiento:</h1>
            <h1 >{{movie.release_date}}</h1>
            <h1>Calificacion:</h1>
            <h1 >{{calificacion}} / 10</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
