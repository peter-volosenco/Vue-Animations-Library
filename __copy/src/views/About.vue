<template>
  <div class="about">
    <h1><span>This is an </span><span>about page</span></h1>

    <div v-for="n in 3" :key="n" class="relative">
      <div class="parallax-overlay"></div>
      <img :src="'@/img/ice-bg'+ n +'.jpg'"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /* eslint-disable */
  .about {
    padding-bottom: 900px;
    min-height: 100vh;
  }
  h1 {
    margin-bottom: 5vh;
    position: relative;
    z-index: 5;
    transform: rotate(15deg);

    span {
      display: inline-block; padding: 2px 4px;
    }

    span:nth-child(odd) {
      background-color: white;
      padding-left: 6px;
      transform: skewX(-15deg);
    }

    span:nth-child(even) {
      background-color: black;
      padding-right: 6px;
      transform: skewX(-15deg);
    }
  }

  .relative {
    position: relative;
    margin: -5vh 0;
  }

  img {
    width:100%;
  }

  .relative:nth-child(odd) {
    // animation: imgRotateAnim 5000ms ease infinite alternate;
  }

  .relative:nth-child(even) {
    // animation: imgRotateAlterAnim 5000ms ease infinite alternate;
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
    background-image: url("~@/img/Festive-Pattern.svg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    // animation: repeatBG 3200ms ease infinite alternate;
    box-shadow: 0 12px 24px rgba(0,0,0, 0.3);
    border: 8px solid #F3F3F5;
    position: absolute;
    left: 0;
    top:0;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    z-index: 2;
  }

  @keyframes repeatBG {
    0% {
      background-repeat: repeat-x;
    }
    50% {
      background-repeat: repeat-y;
    }
    100% {
      background-repeat: repeat;
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
      // document.addEventListener("scroll", onscroll);

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
