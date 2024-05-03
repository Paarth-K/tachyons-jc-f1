<template>
  <div class="container" :class="fadeInShow ? 'lvisible' : 'lhidden'">
    <div id="tachyons-logo" :class="showBar ? 'lvisible' : 'lhidden'">
      <SiteLogo></SiteLogo>
    </div>
    <div class="nav-links-container">
      <div class="nav-links-div visible">
        <nav-link
          class="nav-links"
          v-for="data in navLinkData"
          :to="data.to"
          :key="data"
        >
          {{ data.display }}
        </nav-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavLink from "./Link.vue";
import SiteLogo from "./SiteLogo.vue";
const navLinkData = ref([
  {
    to: "#about",
    display: "About Us",
  },
  {
    to: "#sponsors",
    display: "Sponsors",
  },
  {
    to: "#partners",
    display: "Partners",
  },
  {
    to: "#socials",
    display: "Socials",
  },
]);

const showBar = ref(false);
const fadeInShow = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      showBar.value = true;
    } else {
      showBar.value = false;
    }
  });
  if (window.scrollY > 200) {
    showBar.value = true;
  } else {
    showBar.value = false;
  }
  fadeInShow.value = true;
});
</script>

<style scoped>
.lhidden {
  opacity: 0;
}

.lshow {
  opacity: 1;
}
.container {
  position: fixed;
  width: 100%;
  font-family: "Poppins", sans-serif;

  /* background-color: #f7fdf9;
   */
  background-image: radial-gradient(rgba(0, 0, 0, 0) 1px, #eeeeee 1px);
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  z-index: 9000;
  height: auto;
  text-align: right;
  padding: 7px;
  box-shadow: 0px 2px 20px var(--background);
}

.nav-links {
  margin-left: 17px;
  /* cursor: pointer; */
}
.nav-links-div {
  display: inline-block;
  padding-bottom: 10px;
  transition: all 2s ease;
  /* cursor: pointer; */
}
.arrow {
  /* position: absolute;
  right: 20px;
  top: 14px; */
  display: inline-block;
  /* padding-left: 20px; */
  margin-top: 0px !important;
}

.floatright {
  float: right;
  margin: 0px !important;
  padding-right: 20px;
  padding-top: 2px;
}
.hidden {
  display: none;
}
.arrow {
  display: none;
}
.extendedContainer {
  height: 100px !important;
}

@media (max-width: 735px) {
  .container {
    padding: 0px;
    padding-top: 7px !important;
    height: 55px;
  }
  #tachyons-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .arrow {
    display: inline-block;
  }
  .hidden {
    display: inline-block;
  }
  .visible {
    display: none;
  }
  .nav-links-container {
    display: none !important;

    width: 100%;
    position: absolute;
    /* padding-right: 25px; */
    text-align: center;
    margin: 0px;
    margin-top: 9px !important;
  }

  .nav-links {
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media (max-width: 410px) {
  .nav-links {
    margin-left: 5px;
    margin-right: 5px;
  }

  .nav-links-container {
    margin-right: 0px !important;
  }
}

@media (max-width: 384px) {
}
.nav-links-container {
  margin-right: 30px;
  margin-top: 3px;
  /* cursor: pointer; */
}
#tachyons-logo {
  padding: 10px;
  float: left;
  color: black;
  font-size: 25px;
  transition: opacity 0.3s ease-out;
}
@media (max-width: 420px) {
  .arrow {
    padding-left: 0px;
  }
}
</style>
