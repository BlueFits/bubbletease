import Accent1Img from "./assets/images/accent1.png";
import bbteaseLogo from "./assets/images/BubbleTeaseLogo.png";
import home1 from "./assets/images/homei.png";
//Specialties Image
import f1 from "./assets/images/f1.jpg";
import f2 from "./assets/images/f2.jpg";
import f3 from "./assets/images/f3.jpg";
import f4 from "./assets/images/f4.jpg";
//Established
import accent3 from "./assets/images/accent3.png";
import img6 from "./assets/images/6.jpg";
import accent4 from "./assets/images/accent4.png";
//pgallery
import o1Img from "./assets/images/o(1).jpg";
import o2Img from "./assets/images/o(2).jpg";
import o3Img from "./assets/images/o(3).jpg";
import o4Img from "./assets/images/o(4).jpg";
import qutoesImg from "./assets/images/quotes.png";

const App = () => {
  
  const findUsOnClick = (projectUrl) => {
    window.open(projectUrl, '_blank').focus();
  }

  return (
    <div>
      <section id="home">
        <img src={Accent1Img} class="accent1"/>
        <a class="navbar-brand high" href="#">
            <img src={bbteaseLogo} alt="BubbleTease" class="bubbletease-logo"/>
        </a>
        <nav class="navbar navbar-expand-md navbar-light bg-none text-center container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <a class="nav-link nav-text" href="#">Menu<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link nav-text" href="#">Stories<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                        <span onClick={findUsOnClick.bind(this, "https://goo.gl/maps/qjAJeMHdZdbEix867")} class="nav-link" href="#"><button class="btn rounded-pill text-white">Find Us Now</button><span class="sr-only"></span></span>
                    </li>     
                </ul>  
            </div>
        </nav>
        <div class="container">
            <div class="just row">
                <div class="homeCont">
                    {/* <p>Proudly serving Toronto the highest quality bubble tea since 2000</p> */}
                    <h1 class="Providing">Proudly serving Toronto</h1>
                    <h1 class="high">the highest quality</h1>
                    <h1 class="Providing">bubble tea since 2000</h1>
                    <p style={{marginTop: 45}}> 4.8 &nbsp;&nbsp;——————————&nbsp;&nbsp; Foods for Life </p>
                </div>
                <img src={home1} alt="" class="homei img-fluid" width="500" height="500"/>
            </div>
        </div>
      </section>

      <section id="specialties">
        <div class="container">
          <div class="row" id="specialties-container">
            <div class="col-3">

                <h4 class="pt-4">Specialties</h4>
                <h6 class="pt-2 dark-grey" id="specialties-copy">
                    We use award winning tea purveyors and source the finest teas to use in our drinks.
                </h6>
            </div>
            <div class="col-3 pt-4" id="specialties-columns">
                <h4 class="dark-grey">01</h4>
                <h6>
                    Fresh cream and fresh milk
                </h6>
            </div>
            <div class="col-3 one pt-4 mt-0">
                <div class="text-white">
                    <h4>02</h4>
                    <h6>
                        High quality real fruits
                    </h6>
                    <p class="pt-4" id="specialties-copy">
                        Best local farmers send us their besties.
                    </p>    
                </div>
            </div>

            <div class="col-3 pt-4" id="specialties-columns">
                <h4 class="dark-grey">03</h4>
                <h6>
                    Handpicked top recipes
                </h6>
            </div>
        </div>
      </div>
    </section>

      <br/>
      <br/>
      <br/>

      <section id="featured">
        <div class="container ff">
            {/* <div class="row">
                <div class="col-6">
                  <h1 class="col-md" id="section-header">Featured flavours that people like</h1>
                </div>
                <img src="images/accent2.png" class="accent2"/>
                <div class="col-5">
                    <p>Made with our beautiful ingredients where texture, flavour, and harmony is paramount.</p>
                </div>
            </div> */}
        </div>

        <br/>
        <br/>
        <br/>

        <div class="container-fluid">
            <div class="row">
                <div class="col-3 overlay-container">
                    <img src={f1} class="ff-images img-fluid col-xs-12" alt="..." width="400px"/>
                    <div class="overlay"></div>
                </div>
                <div class="col-3 overlay-container blueBorder">
                    <img src={f2} class="ff-images img-fluid col-xs-12" alt="..." width="400px"/>
                    <div class="overlay"></div>
                </div>
                <div class="col-3 overlay-container blueBorder">
                    <img src={f3} class="ff-images img-fluid col-xs-12" alt="..." width="400px"/>
                    <div class="overlay"></div>
                </div>
                <div class="col-3 overlay-container blueBorder">
                    <img src={f4} class="ff-images img-fluid col-xs-12" alt="..." width="400px"/>
                    <div class="overlay"></div>
                </div>
            </div>
        </div>
      </section>

      {/* <section id="established">
        <img src={accent3} class="accent3"/>
        <div class="row">
          <div class="col-sm-6">
              <img src={img6} alt="" class="bbtese img-fluid" width="500px" height="500px" />
              <img src={accent4} class="accent4" />
          </div>
          <div class="col-sm-6">
                  <h1 class="col-5" id="section-header"><br/><br/>Established in 2000.</h1>
                  <hr class="hr col-3"/>
                  <p class="text-xs-left col-10">We started our first location in Toronto in the summer of 2000 with the goal of bringing bubble tea to the amin stream Canadian market.</p>
          </div>
        </div>
      </section> */}

      <section id="pgallery">
      <img src={accent3} class="accent3"/>
        <div class="container-fluid">
          <div class="row">
              <div class="col-4">
                  <img src={o1Img} alt="" class="lobby1 photo-col1 img-fluid" width="700px"/>
                  <img src={o2Img} alt="" class="lobby4 photo-col1 img-fluid" width="700px"/>
              </div>

              <div class="col-4">
                  <img src={o3Img} alt="" class="lobby2 photo-col2 img-fluid" width="700px"/>
              </div>

              <div class="col-4">
                  <img src={o4Img} alt="" class="lobby3 photo-col2 img-fluid" width="700px" height="450px"/>
                  <div class="card shadow" style={{ width: "18rem" }}>
                      <div class="card-body">
                        <p class="card-text">I love this place, it's nice and chill, what more could you ask for?</p>
                        <span class="circle text-centered shadow"><img src={qutoesImg} id="quotes"/></span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section id="final">
        <div class="container">
          <div class="row">
          <div class="col-sm-6">
            <h1 class="col-10" id="section-header">Today we are pioneering all natural pure milk teas.</h1>
          </div>
          <div class="col-sm-6">
          <br/>
            <p>Today we are pioneering all natural PURE milk teas, made with fresh milk and cream, and high quality 
                premium loose leaf teas and no artificial flavourings or powders. We've made it our goal to provide our bubble tea in the purest way we possibly can. </p>
          </div>
          </div>
        </div>
      </section>

      <footer>
      <hr/>
      <div class="footer">
          <p>ALL RIGHT RESERVED 2020 | BubbleTease </p>
      </div>
    </footer>

    </div>
  );
}

export default App;
