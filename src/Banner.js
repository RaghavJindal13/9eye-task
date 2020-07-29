import React from "react";
import "./App.css";

class Banner extends React.Component {

    render() {
        return (
<div>
            
            <div class="container" id="section-1-gradient">
            <div class="row">
              <div class="col-6">
                <div class="leftSide-col">
                  <h1 class="large">Crazy Radness</h1>
                  <h1 class="large">Made for Devslopers</h1>
                </div>
                <form>
                  <div class="leftSide-col">
                    <h2>Username</h2>
                    <input class="inputbox" name="username" type="text" placeholder="Username"></input>
                    <h2>Password</h2>
                    <input class="inputbox" name="password" type="text" placeholder="Password"></input>
                  </div>
                </form>
              </div>
              <div class="col-6">
                <div class="rightSide-col">
                  <div class="videoContainer">
                    <iframe width="560" height="315" src="https://9eye.in/static/media/logo.16a1b852.svg" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

  
        );
    }

}
export default Banner;