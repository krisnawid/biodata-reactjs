import React, {Component} from 'react';
import logo from './logo.svg';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import Footer from './Component/Footer';

import './App.css';

import Subheader from './Subheader';

class Header extends Component{
  render(){
    return(
      <div> <h2>Hello Ti-3G Polinema</h2> </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div>
        <div class="w3-content w3-margin-top" style={{maxWidth:1400}}>
            <div class="w3-row-padding">
              <Sidebar/>
              <Content/>
            </div>
        </div>
      </div>
      <Footer/>
      {/* <form class="p-3 raleway">
        <div class="text-center">
          <img align="middle" class="mt-5 foto-bio" src="gagal-v1.jpg" alt=""></img>
        </div>
        <div class="jumbotron m-5">
          <div class="container text-center">
            <h1 class="">My Portfolio</h1>      
            <p>Some text that represents "Me"...</p>
          </div>
        </div>
        <div class="container-fluid bg-3 text-center">
          <font color="white">
          <h3 class="">Some of my Work</h3>
          <br></br>
          <div class="row">
            <div class="col-md-4">
              <h5 class="font-white">React-JS</h5>
              <img src="https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png" class="seratus img-responsive seratus" alt="Image"></img>
            </div>
            <div class="col-md-4">
              <h5 class="font-white">Laravel</h5>
              <img src="https://static.cdn-cdpl.com/700x350/998b78e349061b4971c0a2b0e8d6be41/laravel56_1.jpg" class="seratus img-responsive seratus" alt="Image"></img>
            </div>
            <div class="col-md-4">
              <h5 class="font-white">Angular</h5>
              <img src="https://skywell.software/wp-content/uploads/2019/04/Angular-8-1024x542.jpg" class="seratus img-responsive seratus" alt="Image"></img>
            </div>
          </div>
          </font>
        </div>
      </form>
      <div class="parallax"></div>
      <div class="card m-5" width= "18rem">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
    </div>
  );
}

export default App;
