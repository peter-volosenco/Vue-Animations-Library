<template>
  <div class="about">
    <h1><span>This is an </span><span>about page</span></h1>

    <div class="relative">
      <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: size }"></div>
      <img src="@/img/ice-bg2.jpg"/>
    </div>

    <div class="relative">
      <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: sizeAlter }"></div>
      <img src="@/img/ice-bg3.jpg"/>
    </div>

    <div class="relative">
      <div class="parallax-overlay" :style="{ backgroundPosition: position, backgroundSize: size }"></div>
      <img src="@/img/ice-bg4.jpg"/>
    </div>

    <div class="relative">
      <div class="parallax-overlay overlayBgAnim"></div>
      <img src="@/img/ice-bg.jpg"/>
    </div>

  </div>
</template>

<style scoped>
  .about {
    padding-bottom: 900px;
  }
  h1 {
    margin-bottom: 300px;
    position: relative;
    z-index: 5;
    transform: rotate(15deg);
  }
  h1 span {display: inline-block; padding: 2px 4px;}
  h1 span:nth-child(odd) {
    background-color: white;
    padding-left: 6px;
    transform: skewX(-15deg);
  }
   h1 span:nth-child(even) {
    background-color: black;
    padding-right: 6px;
    transform: skewX(-15deg);
  }

  .relative {
    position: relative;
    margin: -300px 0;
  }

  img {
    width:100%;
  }

  .relative:nth-child(odd) {
    animation: imgRotateAnim 5000ms ease infinite alternate;
  }

  .relative:nth-child(even) {
    animation: imgRotateAlterAnim 5000ms ease infinite alternate;
  }

  @keyframes imgRotateAnim {
    0% {
      transform:scale(1) rotate(15deg);
    }
    50% {
      transform:scale(1.1) rotate(15deg);
    }
    100% {
      transform:scale(1) rotate(15deg);
    }
  }

  @keyframes imgRotateAlterAnim {
    0% {
      transform:scale(1) rotate(-15deg);
    }
    50% {
      transform:scale(1.01) rotate(-15deg);
    }
    100% {
      transform:scale(1) rotate(-15deg);
    }
  }

  .parallax-overlay {
    background-image: url("~@/img/Festive-Pattern-blue.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    overflow: hidden;
    animation: repeatBG 3200ms ease infinite alternate;
    box-shadow: 0 12px 24px rgba(0,0,0, 0.3);
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    height: 100%;
    z-index: 2;
  }

  @keyframes repeatBG {
    0% {
      background-repeat: repeat-x;
      /* transform: skew(0deg, 0.2deg); */
    }
    50% {
      background-repeat: repeat-y;
      /* transform: skew(0deg, 0deg); */
    }
    100% {
      background-repeat: repeat;
      /* transform: skew(0deg, 0.2deg); */
    }
  }

  .overlayBgAnim {
    background-repeat: repeat;
    animation: repeatBG2 12000ms ease infinite;
  }

    @keyframes repeatBG2 {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: -2000px 2000px;
    }
    50% {
      background-position: -2000px 0px;
    }
    100% {
      background-position: 0 0;
    }
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
