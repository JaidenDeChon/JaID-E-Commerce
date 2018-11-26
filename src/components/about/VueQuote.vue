<template>
    <div id="about-hero-followup">
        <div id="content">
            <div id="text"> 
            <p>"Spicy jalapeno bacon ipsum dolor amet rump pork loin turducken, cupim drumstick bacon biltong ball tip pastrami sirloin shankle pork chop. Swine beef ribs frankfurter short ribs, landjaeger burgdoggen tri-tip. Turducken pig beef ribs, pork chop short ribs landjaeger swine chicken flank. Alcatra pork belly chuck ribeye beef ribs rump shank turkey tenderloin boudin sausage. "</p>
            <p id="quoted">- Our founder</p>
            </div><img src="https://goo.gl/L34e6F"/>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

#about-hero-followup {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  box-shadow: inset 0 0 15px darkgray;
}

#about-hero-followup #content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
}

#about-hero-followup #content #text {
  width: 50vw;
  padding: 10vw;
  margin: 20px 0;
  font-family: "Quicksand", sans-serif;
  color: #333;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 15px darkgray;
}

#about-hero-followup #content #text #quoted {
  width: 100%;
  text-align: right;
  margin-top: 20px;
}

#about-hero-followup #content img {
  width: 70vw;
  box-shadow: 0 0 15px lightgray;
  object-fit: cover;
}

@media (min-width: 1200px) {
  * {
    overflow: hidden;
  }

  #about-hero-followup {
    flex-direction: row;
    height: 80vh;
  }

  #about-hero-followup #content {
    flex-direction: row;
    height: 400px;
    width: 50vw;
    box-shadow: 0 0 15px lightgray;
  }

  #about-hero-followup #content * {
    box-shadow: none;
  }

  #about-hero-followup #content #text {
    padding: 0 100px;
    height: 100%;
  }

  #about-hero-followup #content img {
    height: 100%;
    width: auto;
  }
}
</style>
