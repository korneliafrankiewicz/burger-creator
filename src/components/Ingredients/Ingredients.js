import React, {Component} from 'react';
import "./Ingredients.scss";
// import BottomBun from "../../assets/bottom-bun.png";
// import TopBun from "../../assets/top-bun.png";
import Cheese from "../../assets/cheese.png";
import Fish from "../../assets/fish.png";
import Lettuce from "../../assets/lettuce.png";
import Burger from "../../assets/burger.png";
import Tomato from "../../assets/tomato.png";
// import Ingredient from '../Ingredient/Ingredient';


export default class Ingredients extends Component {
    state = {
        bottomBun: 0,
        topBun: 0,
        cheese: 0,
        fish: 0,
        lettuce: 0,
        tomato: 0,
        meat: 0,
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            bottomBun,
            topBun,
            fish,
            lettuce,
            tomato,
            cheese,
            meat,
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'topBun':{
                stateValue = topBun
                break;
            }
            case 'bottomBun':{
                stateValue = bottomBun;
                break;
            }
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            case 'fish':{
                stateValue = fish;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            fish,
            meat
        } = this.state;
        let burger = [];
        
        if (burger.length <= 6){

            for (let i = 0; i < meat; i++){
                if(burger.length <= 6){
                    burger.push(<div key={burger.length} className="meatSide"></div>);
                }
                
            }
    
            for (let i = 0; i < lettuce; i++){
                if(burger.length <= 6){
                burger.push(<div key={burger.length} className="lettuceSide"></div>);
                }
            }

            for (let i = 0; i < tomato; i++){
                if(burger.length <= 6){
                burger.push(<div key={burger.length} className="tomatoSide"></div>);
            }
        }

            for (let i = 0; i < cheese; i++){
                burger.push(<div key={burger.length} className="cheeseSide"></div>);
            }
      
            for (let i = 0; i < fish; i++){
                burger.push(<div key={burger.length} className="fishSide"></div>);
            }
            if(burger.length === 0)
                burger.push(<p className="addIngredientsTitle" key="0">
                    Add items to create your burger. First item<br/> must be bottom bun. To finish your burger<br/> choose top bun
                </p>);
            
               else if(burger.length >= 6){
                   burger = [];
                    burger.push(<p className="toMuchToppingsAlert">The maximum number of items <br/> is 9 including buns</p>);
                }    
        

        } 
        return burger;
        
    
    }
    

    render(){
        return (
            <div className="ingredientsWrapper">
          
                <div className="ingredientsBlock">

                <div className="ingredient">
                    <div className="ingrBtns">
                        <button className="btn-add" onClick={() => this.addRemoveIngredient('add','tomato')}>+</button>
                        <button className="btn-remove" onClick={() => this.addRemoveIngredient('remove','tomato')}>-</button>
                    </div>
                    <div className="image-wrapper">
                    <img className="image" src={Tomato} width="150px" alt="tomato"></img>
                    </div>
                    <p>Tomato</p>
                    </div>

                    <div className="ingredient">
                    <div className="ingrBtns">
                        <button className="btn-add" onClick={() => this.addRemoveIngredient('add','meat')}>+</button>
                        <button className="btn-remove" onClick={() => this.addRemoveIngredient('remove','meat')}>-</button>
                    </div>
                    <div className="image-wrapper">
                    <img className="image" src={Burger} width="150px" alt="meat"></img>
                    </div>
                    <p>Meat</p>
                    </div>

                    <div className="ingredient">
                    <div className="ingrBtns">
                        <button className="btn-add" onClick={() => this.addRemoveIngredient('add','fish')}>+</button>
                        <button className="btn-remove" onClick={() => this.addRemoveIngredient('remove','fish')}>-</button>
                    </div>
                    <div className="image-wrapper">
                    <img className="image" src={Fish} width="150px" alt="fish"></img>
                    </div>
                    <p>Fish</p>
                    </div>


                    <div className="ingredient">
                    <div className="ingrBtns">
                        <button className="btn-add" onClick={() => this.addRemoveIngredient('add','lettuce')}>+</button>
                        <button className="btn-remove" onClick={() => this.addRemoveIngredient('remove','lettuce')}>-</button>
                    </div>
                    <div className="image-wrapper">
                    <img className="image" src={Lettuce} width="150px" alt="lettuce"></img>
                    </div>
                    <p>Lettuce</p>
                    </div>
                   
                    <div className="ingredient">
                    <div className="ingrBtns">
                        <button className="btn-add" onClick={() => this.addRemoveIngredient('add','cheese')}>+</button>
                        <button className="btn-remove" onClick={() => this.addRemoveIngredient('remove','cheese')}>-</button>
                    </div>
                    <div className="image-wrapper">
                    <img className="image" src={Cheese} width="150px" alt="cheese"></img>
                    </div>
                    <p>Cheese</p>
                    </div>
                    
                </div>

                <div className="burgerIngredients">
                    <h3 className="yourBurger">Your <br/> Burger</h3>
                    <div className="wholeBurger">
                        <div className="topSide"></div>
                        {this.burgerContent()}
                        <div className="bottomSide"></div>
                    </div>
              
                </div>
            </div>
        );
    }
}

// const Ingredients = () => {
   
//     return ( 
//         <div className="ingredients">
//             <Ingredient
//             name="bottom bun"
//             img={BottomBun}
         
//             />

//             <Ingredient
//             name="top bun"
//             img={TopBun}
//             />

//         <Ingredient
//             name="cheese"
//             img={Cheese}
//             />

//         <Ingredient
//             name="fish"
//             img={Fish}
//             />
//         </div>
//      );
// }
 
// export default Ingredients;