<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>

    <div class="navbar__btns">
      <custom-button @click="$router.push('/posts')">Посты</custom-button>
      <custom-button @click="$router.push('/about')" style="margin-left: 20px"
        >О сайте</custom-button
      >
      <custom-button @click="$router.push('/store')" style="margin-left: 20px"
        >Store</custom-button
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.navbar {
  display: flex;
  align-items: center;

  height: 50px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;

  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
}

.navbar__btns {
  margin-left: auto;
}
</style>
