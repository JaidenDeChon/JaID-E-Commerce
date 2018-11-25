<template>
    <div id="about-goals">
        <div id="background">
            <div id="goals">
            <div class="goal">
                <h3 class="content">This is a header. </h3>
                <p class="content">This is some example text. This is some example text. This is some example text. This is some example text. This is some example text. </p>
            </div>
            <div class="goal">
                <h3 class="content">This is a header. </h3>
                <p class="content">This is some example text. This is some example text. This is some example text. This is some example text. This is some example text. </p>
            </div>
            <div class="goal">
                <h3 class="content">This is a header. </h3>
                <p class="content">This is some example text. This is some example text. This is some example text. This is some example text. This is some example text. </p>
            </div>
            <div class="goal">
                <h3 class="content">This is a header. </h3>
                <p class="content">This is some example text. This is some example text. This is some example text. This is some example text. This is some example text. </p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

#about-goals #background {
  width: 100vw;
  margin: 0;
  padding: 0;
  background: url(https://goo.gl/USLUAB) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

#about-goals #background #goals {
  width: 100vw;
  margin: 0;
  padding: 40px 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}

#about-goals #background #goals .goal {
  width: 90vw;
  background: white;
  padding: 20px;
  margin: 40px 20px;
}

#about-goals #background #goals .goal p {
  font-size: 120%;
}

#about-goals #background #goals .goal h3 {
  font-size: 180%;
  font-weight: bold;
}

#about-goals #background #goals .goal .content {
  margin: 15px 0;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  color: #333;
}

@media (min-width: 750px) {
  #about-goals #background #goals .goal {
    width: 35vw;
  }
}

@media (min-width: 1000px) {
  #about-goals #background #goals .goal {
    max-width: 600px;
    margin: 60px 20px;
  }

  #about-goals #background #goals .goal p {
    font-size: 130%;
  }
}
</style>
