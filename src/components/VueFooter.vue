
<template>

    <div id="footer-container">

        <div id="footer-top">
            <div id="navigate">
                <h3>Navigate</h3>
                <router-link target="_self" to="/">Home</router-link><br>
                <router-link target="_self" to="/faq">FAQ</router-link><br>
                <router-link target="_self" to="/legal">Legal</router-link><br>
                <router-link target="_self" to="/our-story">Our Story</router-link><br>
                <router-link target="_self" to="/site-map">Site Map</router-link><br>
            </div>

            <hr>

            <div id="contact">

                <h3>Contact</h3>

                <a target="_self" href="tel:+1-123-867-5309">
                    <i class="fa fa-phone" aria-hidden="true"></i><br>123.867.5309
                </a>

                <br>

                <a target="_self" href="mailto:fake@fake.com">
                    <i class="fa fa-envelope" aria-hidden="true"></i><br>fake@fake.com
                </a>

                <br>

                <a target="_self" href="javascript:void(0)">
                    <i class="fa fa-map-marker" aria-hidden="true"></i><br>
                    <p>JaID Headquarters</p>
                    <p>123 Sesame St</p>
                    <p>Surprise, AZ 85379</p>
                </a>

            </div>

            <hr>

            <div id="connect">
                <h3>Connect</h3>

                <div id="social">

                    <a target="_self" href="javascript:void(0)"><i class="fab fa-instagram fa-lg"></i></a>
                    <a target="_self" href="javascript:void(0)"><i class="fab fa-facebook fa-lg"></i></a>
                    <a target="_self" href="javascript:void(0)"><i class="fab fa-twitter fa-lg"></i></a>
                    <a target="_self" href="javascript:void(0)"><i class="fab fa-youtube fa-lg"></i></a>

                </div>

                <div id="email-signup">

                    <h4>No spam, we promise!</h4>

                    <input type="email" 
                        class="email-field" 
                        placeholder="He's looking at you, kid"
                        title="Must be an email address"
                        required />

                    <button type="submit" class="email-submit">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>

                </div>

            </div>

        </div>

        <div id="footer-bottom">
            <p id="copyright">Jaiden DeChon &copy; 2018</p>
        </div>

    </div>

</template>

<script>
export default {
  name: "VueFooter"
};
</script>

<style scoped>
/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */

@media (min-width: 280px) {
  /*reset for mobile browsers */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  #footer-container {
    /*border: 1px solid blue;*/
    font-family: "Proza Libre", sans-serif;
    margin: 50px 0 0 0;
  }
  #footer-top {
    padding: 5vw 10vw;
    margin: 0;
    background-color: #333;
    color: #777;
  }
  #footer-top a {
    display: inline-block;
    margin: 4px 0;
    color: #777;
    text-decoration: none;
  }
  #footer-top #navigate,
  #footer-top #contact,
  #footer-top #connect {
    text-align: center;
  }
  #footer-top #navigate h3,
  #footer-top #contact h3,
  #footer-top #connect h3 {
    text-transform: uppercase;
  }
  #footer-top #contact h3,
  #footer-top #contact a {
    margin: 15px 0;
  }
  #footer-top #contact p {
    margin: 0;
  }
  #footer-top #contact i {
    margin: 5px 0;
  }
  #footer-top #connect div {
    margin: 15px 0;
  }
  #connect #social a {
    margin: 0 15px;
  }
  #footer-bottom {
    background-color: #777;
    color: #333;
    text-align: center;
    padding: 1vw 10vw;
    margin: 0;
  }
  #connect input {
    display: inline-block;
    margin: 0;
    padding: 0 0 0 5px;
    background-color: #777;
    border: none;
  }
  .email-field {
    width: 80%;
    height: 40px;
  }
  .email-field::placeholder {
    opacity: 1;
    color: #333;
  }
  #email-signup button {
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background-color: #777;
    color: #333;
    cursor: pointer;
  }
}

/* landscape standard tablets, lo-res laptops and desktops */

@media (min-width: 801px) {
  #footer-top {
    display: flex;
    padding: 2vw 10vw;
  }
  #footer-top #navigate,
  #footer-top #contact,
  #footer-top #connect {
    flex: 1;
  }
  #footer-top hr {
    display: none;
  }
  #footer-top #navigate {
    text-align: left;
  }
  #footer-top #contact {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #footer-top #connect {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #footer-top #contact h3 {
    margin: 0;
  }
  #footer-bottom {
    text-align: left;
    /* height: 50px; */
    /* line-height: 50px; */
    padding: 1px 10vw;
    margin: 0;
  }
}
</style>
