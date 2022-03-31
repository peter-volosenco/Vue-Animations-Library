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
    mounted() {
      document.addEventListener("scroll", onscroll);

      function onscroll() {
        
      }
    }
  }
    
  //$(document).ready(function(){
  //    $(".home-slide-image").css("background-position", "center 150px");
  //    checkbackground();
  //});

  //$(window).scroll(function () {

  //    checkbackground();
      

  //});

  //function checkbackground() {
  //    var scroll = $(window).scrollTop() * 0.1;
  //    var offset = 150;
  //    if (scroll <= offset) {
  //        $(".home-slide-image").css("background-size", "auto");
  //        $(".home-slide-image").css("background-position", "right " + (offset - scroll) + "px");
  //    }

  //    //    if ($(window).width() > 1024) {
  //    //} else {
  //    //    $(".home-slide-image").css("background-position", "right center");
  //    //    $(".home-slide-image").css("background-attachment", "initial");
  //    //}
  //}


</script>
