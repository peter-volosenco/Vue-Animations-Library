<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: sizeAlter }">
      <img src="@/img/ice-bg.jpg"/>
    </div>

    <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: size }">
      <img src="@/img/ice-bg2.jpg"/>
    </div>

    <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: sizeAlter }">
      <img src="@/img/ice-bg3.jpg"/>
    </div>

    <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: size }">
      <img src="@/img/ice-bg4.jpg"/>
    </div>

  </div>
</template>

<style scoped>
  img {width:100%; opacity: 0.6;}

  .parallax-overlay {
    background-image: url("~@/img/Festive-Pattern-blue.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    margin: 100px 0;
  }
  .parallax-overlay:nth-child(2n) {
    background-position: -100%;
  }
</style>

<script>
/*  eslint-disable */

  export default {
    data() {
      return {
        size: "auto",
        sizeAlter: "auto",
        attachment: "fixed",
        position: "center",
      }
    },
    mounted() {
      let self = this;
      document.addEventListener("scroll", onscroll);

      function onscroll() {
        console.log(window.scrollY);
        let scrollAmount = window.scrollY;
        let offset = 0;
        var scrollPozition = scrollAmount * 0.1;
        var scrollSize = scrollAmount * 0.001;

        if (window.innerWidth > 1024) {
          if (scrollAmount >= offset) {
            self.size = (100 + (20 * scrollSize))  + "%";
            self.sizeAlter = (100 - (20 * scrollSize))  + "%";
            self.position = "center " + (scrollPozition) + "px";
          }
        } else {
          self.size = "auto";
          self.position = "right center";
          self.attachment = "initial";
        }
      }
    }
  }
    

</script>
