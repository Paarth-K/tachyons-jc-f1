<template>
  <div class="site-logo-cont">
    <img
      src="https://wsrv.nl/?url=https://res.cloudinary.com/dce66e96q/image/upload/f_png,w_150,q_auto/favicon.png"
      alt="Tachyons Logo"
      class="tachyons-logo-image"
    />
    <span class="team-name"> TACHYONS </span>
  </div>
</template>

<style scoped>
.tachyons-logo-image {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
}
.site-logo-cont {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
}
.team-name {
  text-align: center;
  font-weight: 500;
  font-style: italic;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  /* opacity: 0; */
  /* transition: opacity 0.3s ease-out; */
  user-select: none;
  font-size: 16pt;
}
</style>
