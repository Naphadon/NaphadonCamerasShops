<template>
  <div>
    <nav id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top">
      <a class="navbar-brand" href="#">Your Brand</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="headerImage" class="header-image"></div>
    <div id="headerBg" class="header-bg"></div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css';
export default {
  data() {
    return {
      interval: null,
    };
  },

  methods: {
    animateHeaderImages() {
      const headerImage = this.$el.querySelector("#headerImage");
      const headerBg = this.$el.querySelector("#headerBg");

      if (headerImage && headerBg) {
        const newPosition =
          (parseFloat(headerImage.style.backgroundPosition) || 0) - 1;

        headerImage.style.backgroundPosition = `${newPosition}% 0`;
        headerBg.style.backgroundPosition = `${newPosition}% 0`;
      }
    },
  },

  mounted() {
    this.interval = setInterval(this.animateHeaderImages, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style>
@import "/src/css/styles.css";

#headerImage,
#headerBg {
  background-size: 200% 100%;
}

#headerImage {
  animation: none !important;
}

#headerBg {
  animation: none !important;
}

.portfolio-item {
  display: flex;
  justify-content: center; /* จัดให้รูปภาพอยู่ตรงกลางในแนวนอน */
  flex-direction: column; /* จัดให้เนื้อหาใน .portfolio-item เรียงตามแนวตั้ง */
  
  
  
  
}

/* กำหนดขนาดของรูปภาพ */
.portfolio-item img {
  width: 100%; /* ให้รูปภาพเต็มความกว้างของ .portfolio-item */
  height: auto; /* รักษาอัตราส่วนของรูปภาพ */
  max-height: 200px; /* กำหนดขนาดสูงสุดของรูปภาพ */
  
}

#headerImage,
#headerBg {
  background-size: 200% 100%;
}

#headerImage {
  animation: none !important;
}

#headerBg {
  animation: none !important;
}


</style>
