import makeNetworkCall from "./Api-Client.js";
import { URL } from "../utils/config.js";
import Pizza from "../models/pizza-model.js";

const pizzaOperations = {
    pizzas:[],
    searchPizza(pizzaId){
        const pizzaObject = this.pizzas.find((pizza)=>pizza.id==pizzaId);
        pizzaObject.isAddedInCart = true;
    },
     async  getPizzas(){
        //Api client(object((Pizza)))
        const data = await makeNetworkCall(URL);
        const pizzaJSON = data['Vegetarian'];
        const pizzas=pizzaJSON.map(singlePizza => {
            const pizzaObject = new Pizza(singlePizza.id,
                singlePizza.name,
                singlePizza.price,
                singlePizza.assets.product_details_page[0].url,
                singlePizza.menu_description);
        return pizzaObject;
        }) 
        // data map to model
        this.pizzas = pizzas;
        return pizzas;
        //return model
    }
}
/*
export async function getPizzas(){
    //Api client(object((Pizza)))
    const data = await makeNetworkCall(URL);
    const pizzaJSON = data['Vegetarian'];
    const pizzas=pizzaJSON.map(singlePizza => {
        const pizzaObject = new Pizza(singlePizza.id,
            singlePizza.name,singlePizza.price,
            singlePizza.assets.product_details_page[0].url,
            singlePizza.menu_description);
    return pizzaObject;
    }) 
    // data map to model
    return pizzas;
    //return model
}*/
export default pizzaOperations;