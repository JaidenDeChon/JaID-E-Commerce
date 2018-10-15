
// Apply the below router-link stuff to the new nav bar
// Navbar can be put in this file because it will be a global thing
// Just do the footer as it's own component though

<!--
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
-->

<template>
    <div id="app">
        <div id="header">
            <a href="#" id="hamburger">
                <div>
                    <i class="fas fa-bars"></i>
                </div>
            </a>
            <div id="header-brand">
                <router-link to="/">
                    <div id="brand-title">
                        <h1>yosemite</h1>
                    </div>
                    <div id="brand-subtitle">
                        <p>open e-commerce by Jaiden DeChon</p>
                    </div>
                </router-link>
            </div>
            <div id="nav">
                <ul id="nav-links-left">
                    <router-link to="/"><li>Home</li></router-link>
                    <li v-for="category in data.categories" :key="category.name" class="has-dropdown"><a href="javascript:void(0)">{{ category.name }}</a><i class="fas fa-angle-down"></i>
                    <ul class="dropdown">
                        <router-link :to="{ name: 'category', params: { categoryName: category.name } }"><li>all {{ category.name }}</li></router-link>
                        <router-link :to="{ name: 'item', params: { categoryName: category.name, itemTitle: item.title } }" v-for="item in category.items" :key="item.title"><li>{{ item.title }}</li></router-link>
                    </ul>
                    </li>
                </ul>
                <ul id="nav-links-right">
                    <li><a href="javascript:void(0)">Sign Up</a></li>
                    <li><a href="javascript:void(0)">Sign In</a></li>
                    <li><a href="javascript:void(0)">Cart</a></li>
                </ul>
            </div>
            <router-view>
                <router-view />
            </router-view>
        </div>
    </div>
</template>


<script>
// Import JavaScript affiliated with header. Component can interact with this JS if it were ever needed
import "./assets/header.js";
import categories from "./assets/data.json";
var data = JSON.parse(JSON.stringify(categories));

export default {
  // name: 'VueHeader',
  data: function() {
    return {
      data
    };
  },

  mounted: function() {
    $("#header #nav")
      .find(".dropdown")
      .hide();

    $("ul li").hover(
      function() {
        $(this)
          .children(".dropdown")
          .stop()
          .fadeIn(250);
      },
      function() {
        $(this)
          .children(".dropdown")
          .stop()
          .fadeOut(250);
      }
    );

    $(function() {
      $("#hamburger").click(function() {
        $("#nav").toggle();
      });
    });

    $(document).ready(function() {
      $(".stack").lettering();
    });

    // console.log('The route is: ' + this.$route);
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400i|Raleway:400|Righteous|Proza+Libre");

.char1 {
  z-index: 4;
  text-shadow: 0.05em 0.05em 0.2em rgba(10, 10, 10, 0.9);
}

.char2 {
  z-index: 3;
  margin-left: -0.1em;
  top: 0.08em;
  text-shadow: -0.02em 0.02em 0.2em rgba(10, 10, 10, 0.9);
}

.char3 {
  z-index: 9;
  margin-left: -0.1em;
  text-shadow: -0.05em 0.05em 0.2em rgba(10, 10, 10, 0.9);
}

.char4 {
  z-index: 5;
  text-shadow: 0.02em -0.02em 0.2em rgba(10, 10, 10, 0.9);
}

.char5 {
  z-index: 2;
  margin-left: -0.125em;
  top: 0.08em;
  text-shadow: -0.05em 0.05em 0.2em rgba(10, 10, 10, 0.9);
}

.char6 {
  z-index: 10;
  margin-left: -0.1em;
  top: -0.04em;
  text-shadow: 0em 0em 0.2em #333;
}

.char7 {
  z-index: 8;
  margin-left: -0.1em;
  top: 0.03em;
  text-shadow: -0.05em 0.05em 0.2em rgba(10, 10, 10, 0.9);
}

.char8 {
  z-index: 6;
  margin-left: -0.08em;
  top: -0.05em;
  text-shadow: 0.02em -0.01em 0.2em rgba(10, 10, 10, 0.9);
}

body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none !important;
}

#header {
  width: 100%;
  margin: 0;
  padding: 0;
}

#header-brand {
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #fafafb;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
}

#header-brand a {
  color: #555;
  display: inline-block;
  margin: 10px;
}

#header-brand a * {
  margin: 0;
}

#header-brand h1 {
  font-family: "IBM Plex Serif", serif;
  font-size: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#header-brand p {
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}

#nav {
  display: none;
  color: #555;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size: 14px;
  text-transform: uppercase;
  max-width: 90vw;
  margin: 20px auto;
}

#nav a {
  color: #555;
}

#nav .fas {
  text-align: center;
  width: 30px;
}

#nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#nav ul:hover,
#nav ul:focus {
  cursor: default;
}

@media (min-width: 1023px) {
  #header-brand {
    width: 100%;
  }

  #header-brand a {
    /* width: 100%; */
    padding: 0 20px 10px;
    margin: 0 auto;
  }

  #brand-subtitle {
    text-align: center;
  }
  #nav {
    display: block;
    height: 40px;
  }

  #nav ul li {
    font-size: 15px;
  }

  #nav #nav-links-left {
    float: left;
  }

  #nav #nav-links-left li:first-child {
    margin-left: 0;
  }

  #nav #nav-links-right {
    float: right;
  }

  #nav #nav-links-right li:last-child {
    margin-right: 0;
  }
}

#nav li {
  display: block;
  margin: 10px 0;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0;
  position: relative;
  text-decoration: none;
  background: #e8e8e8;
  transition: all 0.25s ease;
  cursor: pointer;
}

#nav li .fas {
  -webkit-transition: -webkit-transform 0.25s ease-in-out;
  transition: transform 0.25s ease-in-out;
}

@media (min-width: 1023px) {
  #nav li {
    display: inline-block;
    margin: 0 10px;
  }
}

#nav li:hover,
#nav li:focus {
  background: lightgray;
}

#nav li:hover .fas,
#nav li:focus .fas {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

#nav .dropdown {
  border-top: 5px solid transparent;
  border-radius: 3px;
  position: relative;
  left: 0;
  min-width: 100%;
  margin-top: 10px;
}

#nav .dropdown li {
  margin: 10px auto;
  max-width: 90%;
  clear: both;
}

@media (min-width: 1023px) {
  #nav .dropdown li {
    min-width: 200px;
    margin: 0;
    text-align: left;
    border-radius: 0px;
  }

  #nav .dropdown li:first-child {
    border-radius: 3px 3px 0 0;
  }

  #nav .dropdown li:last-child {
    border-radius: 0 0 3px 3px;
  }
}

@media (min-width: 1023px) {
  #nav .dropdown {
    position: absolute;
  }
}

#hamburger {
  width: 30px;
  height: 30px;
  margin-top: 15px;
  position: absolute;
  top: 25px;
  left: 5vw;
  border-radius: 3px;
  color: #555;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1023px) {
  #hamburger {
    display: none;
  }
}
</style>
