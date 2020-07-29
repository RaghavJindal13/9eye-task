import React from "react";
import "./App.css";
import Navbar from "./Navbar"
import Banner from "./Banner"

import RingLoader from "react-spinners/RingLoader";

const axios = require("axios");



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      drinks: []
    };
  }

  axCall() {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "1449ea4641msh88c1f86bb1da891p1911eajsnbc0f722ea8f4"
      },
      params: {
        i: "list"
      }
    };

    var drinksTemp = [];

    return new Promise((resolve, reject) => {
      axios
        .get("https://the-cocktail-db.p.rapidapi.com/list.php", options)
        .then(response => {
          console.log(response);
          for (var i = 0; i < response.data.drinks.length; i++) {
            drinksTemp.push({
              drinkName: response.data.drinks[i].strIngredient1
            });
            resolve(this.setState({ drinks: drinksTemp, loading: false }));
          }
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

  componentDidMount() {
    this.axCall();
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
          <Banner></Banner>
        <div className="App-header">
          <hr></hr>
          <h1>List of available Liquors</h1>
        </div>
        <div>
          <RingLoader
            
            sizeUnit={"px"}
            size={150}
            color={"#00e68a"}
            loading={this.state.loading}
          />
        </div>
        <div className="list">
          <table style={{ borderSpacing: "30px" }}>
            
            <tbody>
              {this.state.drinks.map((drink, index) => {
                return (
                  <React.Fragment>
                    {index % 4 === 0 ? (
                      <React.Fragment>
                        <tr></tr> <td key={index}>{drink.drinkName}</td>
                      </React.Fragment>
                    ) : (
                      <td key={index}>{drink.drinkName}</td>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
            
          </table>
        </div>
        <hr></hr>
        <div class="container">
    <div class="row">
      <div class="col-7">
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </article>
      </div>
      <div class="col-5">
        <div class="slopeIcon">
        <iframe width="560" height="315" src="https://9eye.in/static/media/logo.16a1b852.svg" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
        <footer class="footsy">
    <div class="row">
      <div class="col-3 mobileStack">
        <h1>Company</h1>
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="col-3 mobileStack">
        <h1>Company</h1>
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="col-3 mobileStack">
        <h1>Company</h1>
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Careers</li>
        </ul>
      </div>
      <div class="col-3 mobileStack">
        <h1>Company</h1>
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  </footer>
      </div>
    
    );
  }
}
export default App;


