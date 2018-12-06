import React, { Component } from 'react';
import { Grid } from 'react-bootstrap/lib';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import './App.css';
import Subtotal from './components/Subtotal/Subtotal';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            total: 100,
            PickupSavings: -2.20,
            taxes: 0,
            estimatedTotal: 0

        };

    }
    render() {
        return (
            <div className="container">
                <Grid className="purchase-card">
                  <Subtotal price={this.state.total.toFixed(2)} />
                  <PickupSavings price={this.state.PickupSavings.toFixed(2)}/>
                  <TaxesFees taxes={this.state.taxes}/>
                  <hr />
                  <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
                  <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                  <PromoCodeDiscount />
                </Grid>
            </div>

        );
    }
}

export default App;