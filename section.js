import React from 'react'
import "./section.css"
import image from "../images/logo.png"
import image2 from "../images/bckgrnd.png"
import image3 from "../images/topp.png"
import image4 from "../images/bottomp.png"
import image5 from "../images/Frame 16.png"

function Section()
{

  return (
    <div className='second-section'>
      <div className='Container-home'>
        <div className='image-container-section'>
          <div className='image-container first-image'>
          <img className="image-top" src={image3}/>
            <img className="image-original rotating imagess" src={image}/>
            <img className="image-background imagess" src={image2}/>
            <img className="image-bottom" src={image4}/>
          </div>
        </div>
        <div className='text-container-section' >
          <div className='section-title'>
            <h1>What is</h1>
            <span >
              <svg  width="207" height="52" viewBox="0 0 207 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5207 34.176V18.9684C16.9974 17.7148 15.0895 16.9527 13.0749 16.9527C8.71576 16.9527 6.15536 20.2767 6.15536 26.5449C6.15536 32.54 8.552 35.8666 12.9658 35.8666C14.9257 35.8666 16.9428 35.2111 18.5207 34.176ZM26.584 38.1007L20.8653 41.2088L19.012 37.1748C17.1066 39.5182 14.2733 41.2088 10.6237 41.2088C3.64955 41.2088 0 35.4296 0 26.4903C0 16.7889 4.30459 11.5558 11.167 11.5558C14.3824 11.5558 16.8883 12.7549 18.5207 14.989V0.707448H24.4057V33.739L26.584 38.1007ZM36.8256 22.9478H50.7167C50.4438 18.6953 48.4267 16.6796 44.668 16.6796C40.5817 16.6796 37.751 19.0231 36.8256 22.9478ZM55.7804 27.0365H36.4981C36.8802 31.9964 40.7481 35.3204 46.8488 35.3204C49.9525 35.3204 53.3317 34.6675 55.6192 33.4659L53.7658 39.5182C51.8605 40.5534 48.645 41.2062 44.9409 41.2062C36.1705 41.2062 30.3973 35.2657 30.3973 26.2172C30.3973 17.114 35.8976 11.5558 44.668 11.5558C51.9151 11.5558 56.49 15.6991 56.49 22.4016C56.49 23.9284 56.2171 25.7282 55.7804 27.0365ZM70.1082 40.4988L58.9958 12.2633H65.4787L72.7232 31.9964L73.5394 34.4491H73.7578L74.574 31.9964L81.7665 12.2633H88.1402L77.0798 40.4988H70.1082ZM107.422 12.3179H120.17L119.354 16.8435H106.606L102.138 42.244C100.885 49.3289 96.1463 52 89.4997 52C86.4506 52 85.0339 51.563 83.5081 51.2353L83.3989 46.6577C84.9247 46.9308 86.7209 47.0947 89.2267 47.0947C93.2038 47.0947 95.8188 45.5133 96.4193 42.1894L100.885 16.8435H92.0055L92.8243 12.3179H101.704L102.138 9.7014C103.391 2.67113 108.075 0 114.667 0C117.773 0 119.354 0.436953 120.716 0.764668L120.822 5.45151C119.299 5.06917 117.5 4.90532 114.995 4.90532C111.072 4.90532 108.457 6.48667 107.859 9.81063L107.422 12.3179ZM127.524 22.9478H141.415C141.142 18.6953 139.125 16.6796 135.366 16.6796C131.28 16.6796 128.449 19.0231 127.524 22.9478ZM146.481 27.0365H127.196C127.578 31.9964 131.446 35.3204 137.547 35.3204C140.651 35.3204 144.03 34.6675 146.317 33.4659L144.464 39.5182C142.558 40.5534 139.343 41.2062 135.639 41.2062C126.869 41.2062 121.095 35.2657 121.095 26.2172C121.095 17.114 126.596 11.5558 135.366 11.5558C142.613 11.5558 147.188 15.6991 147.188 22.4016C147.188 23.9284 146.915 25.7282 146.481 27.0365ZM152.797 38.8082L152.415 32.4854C154.921 34.2306 159.499 35.7573 164.292 35.7573C167.942 35.7573 170.557 34.6129 170.557 32.051C170.557 26.7087 153.016 31.6687 153.016 20.7657C153.016 15.6991 156.829 11.392 165.927 11.392C171.482 11.392 175.732 12.7549 175.732 16.1334C175.732 17.1686 175.295 18.0425 174.861 18.8592C172.464 17.7148 168.706 16.8981 165.545 16.8981C161.188 16.8981 158.898 18.5315 158.898 20.3313C158.898 25.0728 176.657 20.9295 176.657 31.5594C176.657 37.4999 171.427 41.2088 163.64 41.2088C158.355 41.2088 154.378 39.5182 152.797 38.8082ZM207 34.5037L205.802 40.0098C204.385 40.608 201.552 41.2062 198.937 41.2062C191.911 41.2062 188.913 37.5545 188.913 32.3787V17.2232H180.907V12.2659H188.913V4.52558H194.798V12.2659H206.181V17.2232H194.798V30.5789C194.798 34.2306 196.704 35.8666 200.026 35.8666C201.934 35.8666 205.42 35.4296 207 34.5037Z" fill="#007A3D"/>
              </svg>
              <svg className='alama' width="23" height="52" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.158 27.234H9.176V24.743C9.176 23.2943 9.45867 22.0047 10.024 20.874C10.6247 19.7433 11.7377 18.4183 13.363 16.899C15.0237 15.3797 16.1367 14.1783 16.702 13.295C17.3027 12.4117 17.603 11.4047 17.603 10.274C17.603 8.61333 17.073 7.306 16.013 6.352C14.953 5.36266 13.522 4.868 11.72 4.868C8.646 4.868 6.56133 6.564 5.466 9.956L0.908 8.048C1.756 5.716 3.134 3.82566 5.042 2.377C6.95 0.928331 9.176 0.203997 11.72 0.203997C14.9 0.203997 17.497 1.158 19.511 3.066C21.5603 4.93867 22.585 7.34133 22.585 10.274C22.585 11.758 22.214 13.189 21.472 14.567C20.73 15.9097 19.3343 17.5173 17.285 19.39C15.2357 21.2627 14.1933 23.1177 14.158 24.955V27.234ZM15.271 35.714C15.271 36.7033 14.9177 37.5513 14.211 38.258C13.5397 38.9647 12.6917 39.318 11.667 39.318C10.6777 39.318 9.82967 38.9647 9.123 38.258C8.41633 37.5513 8.063 36.7033 8.063 35.714C8.063 34.6893 8.41633 33.8413 9.123 33.17C9.82967 32.4633 10.6777 32.11 11.667 32.11C12.6917 32.11 13.5397 32.4633 14.211 33.17C14.9177 33.8413 15.271 34.6893 15.271 35.714Z" fill="#CE1126"/>
              </svg>
            </span>
          </div>
          <div className='description-container-section'>
              DevFest: Annual GDG-powered tech celebration uniting developers worldwide. Explore
              cutting-edge trends, connect with industry experts, and ignite innovation in a collaborative
              environment. Join workshops, hackathons, and talks for a dynamic dive into the ever-
              evolving tech landscape.
          </div>
        </div>
      </div>
      <div className='Container-home'>
        <div className='image-container-section'>
          <div className='image-container first-image '>
            <img className="image-original scnd" src={image5}/>
            
          </div>
        </div>
        <div className='text-container-section'>
          <div className='section-title'>
            <h1>Who we are <span>?</span></h1>
          </div>
          <div className='description-container-section'>
          Google Developer Groups are community-driven groups that are aimed at bringing developers together to discuss and work on various Google technologies. These groups are typically run by volunteers and can be found in different cities around the world. GDGs organize events such as meetups, workshops, and hackathons, providing a platform for developers to learn

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
