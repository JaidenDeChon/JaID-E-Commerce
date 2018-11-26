<template>
    
    <div id="about-team">

        <div id="background">

            <div class="team-member"><img src="https://goo.gl/L34e6F"/>
                <p class="name">Guy Dudeson</p>
                <p class="position">CEO / CTO</p>
            </div>

            <div class="team-member"><img src="https://goo.gl/L34e6F"/>
                <p class="name">Guy Dudeson</p>
                <p class="position">CFO</p>
            </div>

            <div class="team-member"><img src="https://goo.gl/L34e6F"/>
                <p class="name">Guy Dudeson</p>
                <p class="position">Designer</p>
            </div>

            <div class="team-member"><img src="https://goo.gl/L34e6F"/>
                <p class="name">Guy Dudeson</p>
                <p class="position">Developer</p>
            </div>

            <div class="team-member"><img src="https://goo.gl/L34e6F"/>
                <p class="name">Guy Dudeson</p>
                <p class="position">Accounting</p>
            </div>

            <div class="team-member"><img src="https://goo.gl/L34e6F"/>
                <p class="name">Guy Dudeson</p>
                <p class="position">Receptionist</p>
            </div>

        </div>

    </div>

</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

#about-team #background {
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #e8e8e8;
  box-shadow: inset 0 0 15px darkgray;
}

#about-team #background .team-member {
  background: white;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 15px lightgray;
}

#about-team #background .team-member img {
  height: 120px;
  width: 120px;
  margin: 30px;
  border-radius: 50%;
  object-fit: cover;
}

#about-team #background .team-member p {
  color: #333;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 30px;
}

#about-team #background .team-member p.name {
  font-weight: bold;
}
</style>
