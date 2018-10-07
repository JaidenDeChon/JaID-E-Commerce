
<template>
    <div id="hero-image">
        <div id="center">
            <div id="module">
                <p class="stack">Les Paul</p>
                <button>shop now</button>
            </div>
        </div>
    </div>

    <!-- Thanks to Chris Eisenbraun for text stacking idea -->
    <!-- https://codepen.io/chriseisenbraun -->

</template>

<script>

    import categories from '../assets/data.json';
    var data = JSON.parse(JSON.stringify(categories))

    export default {
        name: 'VueHero',
        data: function() {
            return {
                data
            }
        },

        mounted: function() {

            $(document).ready(function() {
                $(".stack").lettering();
            });

        }
    }

</script>

<style scoped>

#hero-image {
  background-image: url(https://goo.gl/u6QqAh);
  background-size: cover;
  background-position: center;
  
  width: 90vw;
  height: 80vh;
  
  margin: 0 auto 5vh;

  border-radius: 10px;
}

#center {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
}

P {
  margin: 0;
}

#module {
    /* Stacking, shadows should be fixed */
    border: 2px solid red;
    box-sizing: border-box;

    width: 600px;

    margin: 0 100px -70px 200px;
    padding: 0;

    float: right;

    text-align: center;
}

.stack {
/*   border: solid red; */
  
  font-family: 'Righteous', serif;
/*   text-transform: uppercase; */
/*   text-align: left; */
  font-size: 15em;
  line-height: 0.7em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  color: silver;
}

#module button {
  border: 3px solid silver;
  outline: none;
  
  margin: 80px auto;
  
  width: 60%;
  height: 50px;
  
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 170%;
  color: silver;
  
  background-color: #333;
  
  transition: all .3s;
  
  cursor: pointer;
  
  z-index: 100 !important;
  
  border-radius: 2px;
}

#module button:hover {
  border: 3px solid #333;
  color: #333;
  background-color: silver;
}

.char1 {
/*   margin-left: -.2em; */
  z-index: 4;
  text-shadow: 0.05em 0.05em 0.2em rgba(10,10,10,0.9);
}

.char2 {
 z-index: 3; 
 margin-left: -.1em;
  top: 0.08em;
    text-shadow: -0.02em 0.02em 0.2em rgba(10,10,10,0.9);

}

.char3 {
  z-index: 9;
  margin-left: -.1em;
  text-shadow: -0.05em 0.05em 0.2em rgba(10,10,10,0.9);
  
}

.char4 {
  z-index: 5;
  text-shadow: 0.02em -0.02em 0.2em rgba(10,10,10,0.9);
}

.char5 {
  z-index: 2;
  margin-left: -.125em;
  top: 0.08em;
  text-shadow: -0.05em 0.05em 0.2em rgba(10,10,10,0.9);
}

.char6 {
  z-index: 10;
    margin-left: -.1em;
  top: -0.04em;
  text-shadow: 0em 0em 0.2em #333;
  
}

.char7 {
  z-index: 8;
  margin-left: -.1em;
  top: .03em;
  text-shadow: -0.05em 0.05em 0.2em rgba(10,10,10,0.9);
  
}

.char8 {
  z-index: 6;
  margin-left: -.08em;
  top: -0.05em;
  text-shadow: 0.02em -0.01em 0.2em rgba(10,10,10,0.9);
}

@media screen and (max-width: 960px) {
  #hero-image {
    background-image: url(https://goo.gl/gTC46P);
    margin-top: 40px;
  }
  
  #center {
    justify-content: center;
  }
  
  #module {
    margin: 0 0 -20% 0;
    
    font-size: 70%;
    
    width: 90%;
  }
  
  .stack {
    font-size: 20vw;
    color: #fff;
  }
  
  button {
    color: #fff;
    border: 3px solid #fff;
  }
  
  button:hover {
    background-color: #fff;
    color: #000;
    border: 3px solid #000;
  }

}

</style>
