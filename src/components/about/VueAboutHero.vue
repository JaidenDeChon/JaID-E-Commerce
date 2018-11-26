<template>    
    <div id="about-hero">
        <div id="background">
            <div id="text-container">
            <h1>This is our mission statement. </h1>
            <button>Call to action</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

#about-hero #background {
  height: 80vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: url(https://goo.gl/USLUAB) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

#about-hero #text-container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#about-hero #text-container h1 {
  width: 80vw;
  padding: 0;
  margin: 20px 0;
  color: #ffffff;
  font-size: 60px;
  font-family: "Quicksand", sans-serif;
  text-align: center;
  text-shadow: 0 0 20px #000000;
}

#about-hero #text-container button {
  min-width: 170px;
  padding: 10px 20px;
  margin: 20px 0;
  color: #ffffff;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Quicksand", sans-serif;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.35s;
}

#about-hero #text-container button:hover {
  box-shadow: 0 0 25px #ffffff;
}

@media (min-width: 750px) {
  #about-hero #text-container h1 {
    font-size: 80px;
  }
}

@media (min-width: 1000px) {
  #about-hero #background {
    height: calc(100vh - 168px);
  }
  #about-hero #text-container h1 {
    font-size: 100px;
  }
}
</style>
