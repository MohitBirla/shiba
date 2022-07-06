import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <>
           <div className="p-5" style={{background:"#1f1e29"}}>

            
           <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shiba</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Link</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex"><ul><li>sadhg</li></ul>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>
      
            <div className="row up_div h-100">
                <div className="col-lg-7 col-md-7 p-5 col-12 decentralized">
                    <h1>A Decentralized Meme Token that Evolved into a Vibrant Ecosystem </h1>
                    <p>SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — The Shiba Incubator — And more. 585k+ Community Members and Growing Fast!</p>
                    <div>
                        <button className="how_to">How to Buy</button>
                        <button className="read_woof">Read WoofPaper v2</button>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 cartoon_div">
                    <img src="https://shibatoken.com/images/hero-shib.png" alt="" className="shiba_cartoon" />
                    <img src="/image/moon.png" loading="eager" alt="" className="moon" ></img>
                </div>
            </div>
            <div className="our_project">
            <div className="row h-100">
                <div className="col-lg-6 p-5 col-12 our_project_1">
                    <h1>Our Project & Ecosystem</h1>
                    <p>From its inception, Shiba Inu has done things differently. Starting with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in Uniswap, then “burned” the other half to Ethereum co-founder Vitalik Buterin for safekeeping.
                        <br /><br />
                        To help reverse the devastating spread of Covid-19 in India, VB has since utilized SHIB in the largest crypto donation in history, and then actually burned 40% of its total supply to a dead wallet, ensuring our long-term success and stability. In the words of Ryoshi, “Thank you to the woofmeister for enabling true decentralization. Now we truly begin.”
                    </p>
                </div>
                <div className="col-lg-6 col-12 card_div">
                        <div className="row p-5">
                            <div className="col-12 col-lg-3 mini_card">
                                <img className="p-2" src="image/horse.svg" alt="" />
                                <p>Starting with a supply</p>
                            </div>
                             <div className="col-12 col-lg-3 mini_card">
                             <img className="p-2" src="image/horse.svg" alt="" />
                             <p>Starting with a supply</p>
                            </div>
                            <div className="col-12 col-lg-3 mini_card">
                            <img className="p-2" src="image/horse.svg" alt="" />
                            <p>Starting with a supply</p>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <div className="big_card_div">
                <div className="row p-5 bd">
                    <div className="col three_big m-3">
                        <div className="big_card_image p-5">
                            <img src="image/shib.png" alt="" />
                        </div>
                        <div className="txt">
                            <div>
                                <h2>Shiba</h2><span></span>
                            </div>
                            <p>The Shiba Inu token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets. <br /> <br />Between its international recognition and its legitimate utility, SHIB is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on ShibaSwap, our proprietary DEX.</p>
                            <button className="buy_coin">Buy Shiba</button>
                        </div>
                    </div>
                    <div className="col three_big m-3">
                        <div className="big_card_image p-5">
                            <img src="image/shib.png" alt="" />
                        </div>
                        <div className="txt">
                        <h2>LEASH</h2>
                        <p>The Shiba Inu token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets. <br /> <br />Between its international recognition and its legitimate utility, SHIB is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on ShibaSwap, our proprietary DEX.</p>
                        <button className="buy_coin">Buy Shiba</button>
                        </div>                    
                    </div>
                    <div className="col three_big m-3">
                        <div className="big_card_image p-5">
                            <img src="image/shib.png" alt="" />
                        </div>
                        <div className="txt">
                        <h2>LEASH</h2>
                        <p>The Shiba Inu token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets. <br /> <br />Between its international recognition and its legitimate utility, SHIB is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on ShibaSwap, our proprietary DEX.</p>
                        <button className="buy_coin">Buy Shiba</button>
                        </div>                   
                    </div>
                </div>
            </div>
            <div className="how_buy p-5">
                <div className="row rio">
                    <div className="col-12 col-lg-6 col-md-6">
                        <h1 className="mb-5">How to Buy</h1>
                        <p>SHIB and LEASH are best purchased and sold through ShibaSwap, but can also be found on Uniswap and an ever-growing list of CEXs. Please note that, outside of ShibaSwap, exchanges which support one may not support the other.
                            <br /><br />
                            SHIB is a decentralized experiment and, as such, we always incentivize the use of DEXs. If you choose to utilize a CEX instead, remember to research it first to ensure it is both safe and secure.
                        </p>
                        <div className="three_btn">
                            <button>Buy SHIBA</button>
                            <button>Buy LEASH</button>
                            <button>Buy BONE</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 buy_img">
                        <img className="img_11" src="https://shibatoken.com/images/gc1.png" alt="" />
                        <img className="img_22" src="https://shibatoken.com/images/gc2.png" alt="" />
                        <img className="circle_img" src="https://shibatoken.com/images/circle-dashes.svg" alt="" />
                        <img className="buy_img_img som"  src="http://localhost:3000/image/buyshib.png" alt="" />
                        <img className="img_33" src="https://shibatoken.com/images/gc4.png" alt="" />
                    </div>
                </div>
                <div className="mb-5">
                <h1 style={{color:"white"}}>Quick Start Guide</h1>
                <div className="four_flot row">
                    <div className="col-lg-3 col-12">
                       <center> <h1>1 <span style={{color:"#f06500"}}>______</span></h1></center>
                       
                    </div>
                    <div className="mini col-lg-9 col-12">
                        <h2>Create MetaMask wallet</h2><br/>
                        <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.</p>
                    </div>
                </div>
                <div className="mt-5 four_flot row">
                    <div className="col-lg-3 col-12">
                       <center> <h1>2 <span style={{color:"#f06500"}}>______</span></h1></center>
                    </div>
                    <div className="mini col-lg-9 col-12">
                        <h2>Create MetaMask wallet</h2><br/>
                        <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.</p>
                    </div>
                </div>
                <div className="mt-5 four_flot row">
                    <div className="col-lg-3 col-12">
                       <center> <h1>3 <span style={{color:"#f06500"}}>______</span></h1></center>
                    </div>
                    <div className="mini col-lg-9 col-12">
                        <h2>Create MetaMask wallet</h2><br/>
                        <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.</p>
                    </div>
                </div>
                <div className="mt-5 four_flot row">
                    <div className="col-lg-3 col-12">
                       <center> <h1>4 <span style={{color:"#f06500"}}>______</span></h1></center>
                    </div>
                    <div className="mini col-lg-9 col-12">
                        <h2>Create MetaMask wallet</h2><br/>
                        <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive SHIB or LEASH.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="photo_div">
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 p-5 photo_m_div">
                        <img src="https://shibatoken.com/images/ss-img2x.png" alt="" />
                        <center>
                            <button className="mt-5 use_shiba">Use Shiba</button>
                        </center>
                    </div>
                    <div className="col-12 col-lg-6 p-5 photo_m_div">
                        <h1 style={{color:"white"}}>Use ShibaSwap</h1>
                        <div className="certik mt-4 row">
                        <div className="col-12 col-lg-6" style={{display:"flex"}}>
                            <h3 className="mt-1">CERTIK</h3>
                            <input className="ms-5" type="radio" />
                        </div>
                        <div className=" col-12 col-lg-6">
                            <button className=" ">Total Report</button>
                        </div>
                        </div>
                        <p className="mt-5">SHIB, LEASH, and BONE, come together to create ShibaSwap, the next evolution in DeFi platforms. ShibaSwap gives users the ability to DIG (provide liquidity), BURY (stake), and SWAP tokens to gain WOOF Returns through our sophisticated and innovative passive income reward system. <br /><br />Our platform also allows the ShibArmy to access upcoming NFTs and additional tools, such as portfolio trackers, to make navigating the crypto world simple and intuitive.</p>
                    </div>
                </div>
            </div>


            <div className="art_main pt-5">
                <center className="art_text">
                <h1>ART</h1>
                <p>We are proud to support ingenuity in all its forms with the Shiba Inu Incubator. The ShibArmy is made up of talented individuals who have united to build something remarkable, and we support this by cultivating an environment which encourages creativity and growth. Through the power of the Shiba Inu Incubator, we help holders find the tools they need to bring their inspiration and unique perspectives to life. This as just another way to encourage others to step outside of preconceived limits and regulations and experience what it means to be part of our decentralized movement.</p>
                </center>.

                    {/* <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <h2>Shiba coin is the best coin in future</h2>
                            </div>
                            <div class="carousel-item">
                                <h2>111111111111111111111111111</h2>
                            </div>
                            <div class="carousel-item">
                            <h2>22222222222222222222222222</h2>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div> */}

                    <div className="row mt-5 p-5">
                        <div className="col-lg-6 col-12 rescue_div">
                            <h1 >Rescue</h1>
                            <p>
                            From the tips of their noses to the ends of their tails, Shiba Inu are intelligent, brave, and independent, with an equal propensity for loyalty and mischief. Sadly, the characteristics which make them extraordinary are the same ones which make them a challenging pet. Inexperienced owners can find themselves unprepared for a dog that’s known for its bold (i.e. stubborn) personality.
                            <br /><br />
                            Luckily, we are helping these dogs in real life! We use Amazon Smile to collect and donate a percentage of your Amazon purchases to the Shiba Inu Rescue Association. Joining is easy and free! Just use smile.amazon.com when placing orders and select Shiba Inu Rescue Association (a 501(c)3, preferred non-profit organization). You’re seconds away from helping Shibs in need. Start funding shelters today.
                            </p>
                        </div>
                        <div className="col-lg-6 col-12 rescue_div">
                            <center className="rescue_center">
                                <img className="img_1" src="image/shib.png" alt="" />
                                <button>Rescue</button>
                                <img className="img_2" src="image/shib.png" alt="" />

                            </center>
                        </div>
                    </div>
            </div>
            <center>
                <div className="community_div mt-5 pb-5">
                        <h1>Community</h1>
                        <p>If you'd like to donate to the <span>Devs</span>,<span>send</span>  <span>ETH</span>,<span>SHIB</span> , <span>LEASH</span> or <span></span>BONE here. Thank you for your support! WOOF!</p>
                    <div className="community_div_mini mt-3">
                        <strong>0xc351155C80aCD043BD5F8FE7ffc8536af1fF937</strong><button className="copy_btn">Copy Here</button>
                    </div>
                </div>

                <div className="social_icons mt-5">
                    <div className="social_icon_box p-5">
                        <p>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate SHIB information</p>
                        <h1><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-telegram"></i><i class="fa-brands fa-discord"></i><i class="fa-brands fa-reddit"></i></h1>
                    </div>      
                </div>
                <div className="col-lg-6 col-12 ">
                        <div className="row p-5">
                            <div className="col-12 col-lg-3">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-3 col-md-3 rio">
                                    {/* <img className="p-2" src="image/horse.svg" alt="" /> */}
                                    </div>
                                    <div className="col-lg-12 col-sm-9 col-md-9 pt-2">
                                    <p style={{color:"white"}}>Starting with a supply</p>
                                    </div>
                                </div>

                            </div>
                             <div className="col-12 col-lg-3 ">
                             <img className="p-2" src="image/horse.svg" alt="" />
                             <p style={{color:"white"}}>Starting with a supply</p>
                            </div>
                            <div className="col-12 col-lg-3 ">
                            <img className="p-2" src="image/horse.svg" alt="" />
                            <p style={{color:"white"}}>Starting with a supply</p>
                            </div>
                        </div>
                </div>
            </center>
            
</>
           
        )
    }
}
export default Navbar