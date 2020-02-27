import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
        <div class="w3-third">
        
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img src="siap.jpg" style={{width:"100%"}} alt="Avatar"></img>
                <div class="w3-display-bottomleft w3-container w3-text-black">
                  <h2 style={{color: "#f0f8ff",padding: 1,backgroundColor: "#000000",opacity: 0.8}}>Krisna Widianggara</h2>
                </div>
              </div>
              <div class="w3-container">
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                <hr/>
      
                <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                <p>Adobe Photoshop</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:90}}>90%</div>
                </div>
                <p>Photography</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:90}}>
                    <div class="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>Illustrator</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
                </div>
                <p>Media</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:90}}>50%</div>
                </div>
                <br></br>
      
                <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                <p>English</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{height:24,width:100}}></div>
                </div>
                <p>Spanish</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{height:24,width:100}}></div>
                </div>
                <p>German</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal" style={{height:24,width:100}}></div>
                </div>
                <br></br>
              </div>
            </div>
        </div>
        );
    }
}

export default Sidebar;