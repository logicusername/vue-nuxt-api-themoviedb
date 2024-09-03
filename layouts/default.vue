<template>
  <div>
    <form class="grid place-content-center mt-32">
      <div class="flex">
        <NuxtLink :to="{ path: '/' }">
          <h1 class="me-20  mt-4">Inicio</h1>
        </NuxtLink>
        <input
          class="w-96 h-12 rounded-lg search-bar"
          type="search"
          v-model="pelicula"
          placeholder=" Buscar"
        />
        <NuxtLink :to="{ path: 'buscar', query: { movie: pelicula } }">
          <Button label="Buscar" icon="pi pi-check" class="ms-8"/>
        </NuxtLink>
      </div>
    </form>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pelicula: "",
    };
  },
};
</script>
