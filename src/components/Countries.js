import React, { Component } from "react";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

export default class Countries extends Component {
  countries = []

  constructor() {
    super();
    this.state = {
        countries: this.countries,
        loading: true
    }
  }

  async componentDidMount() {
    let url = "https://restcountries.com/v3.1/all"
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
        countries: parsedData,
        loading: false
    })
  }

  render() {
    console.log("render called!");
    return (
      <div className="container my-5">
        <h1 className="text-center">Countries Data</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.countries.map((element) => {
            return <div className="col-md-4 mt-3">
            <CountryItem
              title={element.name.common}
              description={`Population: ${element.population}`}
              imageUrl={element.flags.png}
              detailUrl={element.name.common}
            />
          </div>
          })}  
        </div>
      </div>
    );
  }
}
