<template>
  <a :target="target" :href="to">
    <div class="nav-link-container">
      <div class="nav-link">
        <slot />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: { to: "", target: "_self" },
};
</script>

<style scoped>
.nav-link-container {
  display: inline-block;
  height: 100%;
  list-style-type: none;
  text-align: center;
  /* border-radius: 30px; */
  border: 1px solid black;
  transition: border 0.1s;
  /* cursor: pointer; */
}
.nav-link-container:hover {
  transition: border 0.1s;
  /* border: 1px white solid; */
}
@media (max-width: 385px) {
  .nav-link-container {
    margin-left: 5px;
  }
}

.nav-link-container:hover .nav-link {
  /* background-color: var(--background); */
  background-color: black;
  color: white;
}
.nav-link {
  /* filter: invert(); */
  color: black;
  display: inline-block;
  padding: 13px 17px;
  font-size: 10pt;
  cursor: pointer;
  /* border-radius: 30px; */
  border: none;
  text-transform: uppercase;
  transition: background-color 0.25s, border 0.25s;
  /* transition: all 0.25s; */
  /* background-color: var(--accent); */
  /* pointer-events: none; */
}
</style>
