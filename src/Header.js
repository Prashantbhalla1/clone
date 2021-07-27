import { useState } from "react";
import "./Header.css";
import { useHistory } from "react-router";
import { Redirect,Route } from "react-router-dom";
const Header = () => {
  const history=useHistory();
  const [c1, s1] = useState(0);
  const [c1d, s1d] = useState(0);
  const [c2d, s2d] = useState(0);
  const [c3d, s3d] = useState(0);
  const [c4d, s4d] = useState(0);
  const [c5d, s5d] = useState(0);
  const [c2, s2] = useState(0);
  const [c3, s3] = useState(0);
  const [c4, s4] = useState(0);
  const [c5, s5] = useState(0);
  
const btnhandle=()=>{
 document.querySelector(".burg").style.display="none";
 document.querySelector(".cutt").style.display="block";
history.push("/opennav");




}
const cutt=()=>{
  document.querySelector(".burg").style.display="block";
 document.querySelector(".cutt").style.display="none";

  history.push("/");
 
}
  return (
    <>
    <div className="hea">
      <nav className="head">
        <img src="https://marketpresso.com/public/upload/96/lib/26646_1580226991_lib.png"></img>
       <div className="burg" onClick={btnhandle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
     <i class="fa fa-times tick-col theme_color_txt cutt" onClick={cutt} aria-hidden="true"></i>

        <uL className="uu">
          <li>
            <a>
            <i class="fab fa-blogger-b" aria-hidden="true"></i>
              <span>Blog</span>
            </a>
          </li>

          <li>
            <a>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span>Cart</span>
            </a>
          </li>
          <li>
            <select>
              <option selected="" value="USD">
                USD
              </option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="HKD">HKD</option>
              <option value="RUB">RUB</option>
              <option value="CNY">CNY</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="MYR">MYR</option>
              <option value="SGD">SGD</option>
              <option value="PHP">PHP</option>
              <option value="COP">COP</option>
              <option value="BRL">BRL</option>
              <option value="MXN">MXN</option>
              <option value="ARS">ARS</option>
              <option value="CRC">CRC</option>
              <option value="DOP">DOP</option>
              <option value="SVC">SVC</option>
              <option value="GTQ">GTQ</option>
              <option value="HNL">HNL</option>
              <option value="NIO">NIO</option>
              <option value="PEN">PEN</option>
              <option value="UYU">UYU</option>
              <option value="NOK">NOK</option>
              <option value="SAR">SAR</option>
              <option value="THB">THB</option>
              <option value="VND">VND</option>
              <option value="SEK">SEK</option>
              <option value="XAF">XAF</option>
              <option value="AED">AED</option>
              <option value="CLP">CLP</option>
              <option value="DZD">DZD</option>
              <option value="MAD">MAD</option>
              <option value="ZAR">ZAR</option>
              <option value="TZS">TZS</option>
              <option value="KMF">KMF</option>
              <option value="ILS">ILS</option>
              <option value="UGX">UGX</option>
              <option value="ZAR">ZAR</option>
              <option value="MZN">MZN</option>
              <option value="DKK">DKK</option>
              <option value="NZD">NZD</option>
              <option value="MUR">MUR</option>
              <option value="NGN">NGN</option>
              <option value="CHF">CHF</option>
              <option value="AOA">AOA</option>
              <option value="IDR">IDR</option>
              <option value="JMD">JMD</option>
              <option value="GHC">GHC</option>
              <option value="KES">KES</option>
              <option value="BOB">BOB</option>
              <option value="XCD">XCD</option>
            </select>
          </li>
          <li className="down">
            <a>Sign In </a>
          </li>
          <li className="down"> / </li>
          <li className="down">
            <a> Register</a>
          </li>
        </uL>
      </nav>

      <nav className="head2">
        <ul className="uuuu">
          <li>
            <a
              className="1"
              onMouseOver={() => {
                s1(1);
              }}
              onMouseOut={() => {
                if (c1d == 0)
                  s1(0);
              }}
            >
              <span>Music &amp; Audio </span>
            </a>
            {c1 == 1 && (
              <div
                className="open"
                onMouseOver={() => {
                  s1(1);
                  s1d(1);
                }}
                onMouseOut={() => {
                  s1(0);
                  s1d(0);
                }}
              >
                <ol>
                  <li>
                    <a>Voice Over</a>
                  </li>
                  <li>
                    <a>Podcast</a>
                  </li>
                </ol>
              </div>
            )}
          </li>
          <li>
            <a
              onMouseOver={() => {
                s2(1);
              }}
              onMouseOut={() => {
                if (c2d == 0)
                  
                    s2(0);
                 
              }}
            >
              <span>Programming &amp; Tech </span>
            </a>
            {c2 == 1 && (
              <div
                className="open"
                onMouseOver={() => {
                  s2(1);
                  s2d(1);
                }}
                onMouseOut={() => {
                  s2(0);
                  s2d(0);
                }}
              >
                <ol>
                  <li><a>Web Development</a></li>
                  <li><a>Tech Marketing</a></li>
                </ol>
              </div>
            )}
          </li>
          <li>
            <a
              onMouseOver={() => {
                s3(1);
              }}
              onMouseOut={() => {
                if (c3d == 0)
                  
                    s3(0);
                 
              }}
            >
              <span>Digital Marketing </span>
            </a>
            {c3 == 1 && (
              <div
                className="open"
                onMouseOver={() => {
                  s3(1);
                  s3d(1);
                }}
                onMouseOut={() => {
                  s3(0);
                  s3d(0);
                }}
              >
                <ol>
                  <li>
                    <a>Social Media Marketing</a>
                  </li>

                  <li>
                    <a>Video Marketing</a>
                  </li>
                  <li>
                    <a>Influencer Marketing</a>
                  </li>
                </ol>
              </div>
            )}
          </li>
          <li>
            <a
              onMouseOver={() => {
                s4(1);
              }}
              onMouseOut={() => {
                if (c4d == 0)
                 
                    s4(0);
               
              }}
            >
              <span>Writing &amp; Translation </span>
            </a>
            {c4 == 1 && ( 
              <div
                className="open"
                onMouseOver={() => {
                  s4(1);
                  s4d(1);
                }}
                onMouseOut={() => {
                  s4(0);
                  s4d(0);
                }}
              >
                <ol>
                  <li>
                    <a>Articles Blog Posts</a>
                  </li>
                 
                </ol>
              </div>
            )}
          </li>
          <li>
            <a
              onMouseOver={() => {
                s5(1);
              }}
              onMouseOut={() => {
                if (c5d == 0)
                 
                    s5(0);
                 
              }}
            >
              <span class="hide-menu">Graphics &amp; Design </span>
            </a>
            {c5 == 1 && (
              <div
                className="open"
                onMouseOver={() => {
                  s5(1);
                  s5d(1);
                }}
                onMouseOut={() => {
                  s5(0);
                  s5d(0);
                }}
              >

<ol>
<li>
                    <a>Logo &  Brand Identity</a>
                  </li><li>
                    <a>Packaging & Labels</a>
                  </li><li>
                    <a>Art & Illustration</a>
                  </li><li>
                    <a>Visual Design</a>
                  </li><li>
                    <a>Print Design</a>
                  </li>



</ol>


              </div>
            )}
          </li>
        </ul>
      </nav>
      </div>
      <div className="head3">
        <ul>
          <li className="down">
            <a>Home</a>
          </li>
          <li className="down">/</li>

          <li className="down">
            <a>Professional Business Card Design</a>
          </li>
        </ul>
      </div>
      
    </>
  );
};
export default Header;
