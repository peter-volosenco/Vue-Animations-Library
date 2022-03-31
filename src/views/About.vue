<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="parallax-overlay">
      <img src="@/img/ice-bg.jpg"/>
    </div>
    <div class="parallax-overlay">
      <img src="@/img/ice-bg2.jpg"/>
    </div>
    <div class="parallax-overlay">
      <img src="@/img/ice-bg3.jpg"/>
    </div>
      <div class="parallax-overlay">
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
    background-repeat: repeat-x;
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
        var scroll = scrollAmount * 0.1;

        if (scroll <= offset) {
          self.size = "auto";
          self.position = "right " + (offset - scroll) + "px";
        }
           if (window.innerWidth > 1024) {
        } else {
          self.size = "auto";
          self.position = "right center";
          self.attachment = "initial";
        }
      }
    }
  }
    

</script>
