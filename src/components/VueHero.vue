
<template>
  <div id="hero-container">
    <div id="hero-text">
      <h1 id="hero-big">yosemite</h1>
      <p id="hero-small">open-source e-commerce by Jaiden DeChon</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Advent+Pro|Raleway");
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

#hero-container {
  background-image: url(https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0a5c81634f9e5cebb8062f676e6d74a&auto=format&fit=crop&w=1950&q=80);
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  width: 90vw;
  margin: 0 auto 35px auto;
  display: flex;
}

#hero-text {
  width: 100%;
  height: 100%;
  margin: 0 10vw;
  text-shadow: 0 0 20px black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#hero-big {
  font-family: Advent Pro, sans-serif;
  font-size: 80px;
  letter-spacing: -5px;
  color: white;
  margin: 10px 0;
}

#hero-small {
  color: white;
  font-family: "Raleway", sans-serif;
  text-align: center;
  margin: 10px 0;
}

@media (min-width: 280px) {
  #hero-container {
    height: 650px;
  }
}
@media (min-width: 568px) {
  #hero-big {
    font-size: 100px;
  }
}
@media (min-width: 750px) {
  #hero-big {
    font-size: 125px;
    letter-spacing: -8px;
  }
}
@media (min-width: 801px) {
  #hero-big {
    font-size: 150px;
  }
}
@media (min-width: 1000px) {
  #hero-big {
    font-size: 170px;
  }

  #hero-container {
    height: 780px;
  }
}
@media (min-width: 1920px) {
  #hero-big {
    font-size: 200px;
  }
}
</style>
