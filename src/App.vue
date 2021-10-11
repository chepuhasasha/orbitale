<template lang='pug'>
  #app
    Navbar
    router-view
</template>
<script>

export default {
  name: 'App',
  components: {
    Navbar: () => import('@/blocks/Navbar.vue')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;900&display=swap');
.ROW {
  display: flex;
  gap: 10px;
}
.COL {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ROW_L {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ROW_C {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.ROW_R {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
}

.FILL_WIDTH {
  width: 100%;
}
.FILL_HEIGHT {
  height: 100%;
}
.HUG_WIDTH {
  width: max-content;
  min-width: max-content;
  max-width: max-content;
}
.HUG_HEIGHT {
  height: max-content;
  min-height: max-content;
  max-height: max-content;
}

.grid {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(15, 1fr);
  grid-gap: 10px;
  padding: 10px;
}

.text {
  color:  var(--text_0);
  font-size: var(--text_size_0);
}
.subtext {
  color:  var(--text_100);
  font-size: var(--text_size_100);
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: radial-gradient(83.65% 214.48% at 94.79% 88.49%, #E9E6F7 23.74%, rgba(255, 255, 255, 0) 85.89%), radial-gradient(67.63% 270.52% at 12.27% 89.17%, #DEEEFD 23.74%, rgba(255, 255, 255, 0) 45.67%), radial-gradient(77.81% 132.19% at 16.95% 22.19%, #F8DFFC 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
}
*::-webkit-scrollbar {
  background-color: var(--background_100);
  height: 5px;
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--background_0);
}
body {
  font-family: Montserrat;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0;
  background: var(--background_0);
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  h3 {
    font-family: Roboto Mono;
    color: #243441;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }
  h1 {
    color: #243441;
    font-size: 70px;
  }
  h5 {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.52);
    font-size: 20px;
  }
  section {
    font-size: 12px;
    color: #4A4A4A;
  }
}
</style>
