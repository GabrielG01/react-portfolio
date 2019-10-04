import React, { Component } from "react";
import axios from 'axios';


import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();



        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handlerFilter = this.handlerFilter.bind(this)


    }




    handlerFilter(filter) {
        this.setState({
            data: this.state.data.filter(item  => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://gabrielgarcia.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success

        this.setState({
            data: response.data.portfolio_items
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      };





    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem
            key={item.id} 
            item={item}  
            

                         
                         />;
        });
    }

componentDidMount() {
    this.getPortfolioItems();

}

//                                                                                          Render
    render() {


        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        
        return (
            <div>
                <h2>
                    {this.state.pageTitle}
                </h2>

                <button onClick={() => this.handlerFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handlerFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handlerFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}



            </div>
        )
    }
}