import './App.css';
import cocktailData from "./cocktailsWithCategories.json"
import React from "react";
import ReactDOM from "react-dom/client";

class Cocktail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (prop) => {
        this.setState({show: !this.state.show});
    }
    render() {
        if (this.state.show === true) {
            return (
                <div className={"cocktail"}>
                    <div onClick={() => this.handleClick()} className={"image_holder_recipe"}>
                        <img className={"cocktail_image_recipe"} src={require("" + this.props.imagePath)} />
                        <div className={"overlay"}>
                            <div className={"overlay_title"}>{this.props.name}</div>
                            <div className={"cocktail_ingredients"}>
                                <h1 className={"overlay_headers"}>Ingredients</h1>
                                <ul>
                                    {this.props.ingredients.map((ingredient) => {
                                        return (
                                            <li>{ingredient.name}: {ingredient.quantity} {ingredient.measurement}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={"cocktail_optionals"}>
                                <h1 className={"overlay_headers"}>Optionals</h1>
                                <ul>
                                    {this.props.optional.map((option) => {
                                        return (
                                            <li>{option.name}: {option.quantity} {option.measurement}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={"cocktail_instructions"}>
                                <h1 className={"overlay_headers"}>Instructions</h1>
                                <ol>
                                    {this.props.instructions.map((instruction) => {
                                        return (
                                            <li>{instruction}</li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className={"cocktail_header"}>
                        {this.props.name}
                    </div>
                    <div className={"cocktail_description"}>
                        {this.props.description}
                    </div>

                </div>
            )
        }
        return (
            <div className={"cocktail"}>
                <div onClick={() => this.handleClick()} className={"image_holder"}>
                    <img className={"cocktail_image"} src={require("" + this.props.imagePath)} />
                </div>
                <div className={"cocktail_header"}>
                    {this.props.name}
                </div>
                <div className={"cocktail_description"}>
                    {this.props.description}
                </div>
            </div>
        )
    }
}

function NavBar(props) {
    console.log(props.categories, "navbar")
    return(
        <div className={'navbar'}>
            {props.categories.map((category) => {
                return(
                    <div className={'navButton'}>{category}</div>
                )}
            )}
        </div>);
}
class CocktailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: 'all'};
    }

    render() {
        if (this.state.category === 'all') {
            return(
                <div className={"cocktail_list"}>
                    <h1>{cocktailData.categories.map((category) => {
                        return (
                            <div>
                                <h3 className={"category_header"}><u>{category.name}</u></h3>
                                {category.cocktails.map((cocktail) => {
                                    return (
                                        <div className={"cocktail_holder"}>
                                            <Cocktail
                                                name={cocktail.name}
                                                description={cocktail.description}
                                                imagePath={cocktail.imagePath}
                                                ingredients={cocktail.ingredients}
                                                optional={cocktail.optional}
                                                instructions={cocktail.instructions}
                                            />
                                        </div>
                                    );
                                })
                                }</div>)
                    })}</h1>
                </div>
            );
        }

    }
}
/*function ListAllCocktails() {
    // loops through categories and loops through cocktails
    // in this category, displaying them
    return (
      <div className={"cocktail_list"}>
          <h1>{cocktailData.categories.map((category) => {
              return (
                  <div>
                      <h3>{category.name}</h3>
                  {category.cocktails.map((cocktail) => {
                      return (
                          <div className={"cocktail_holder"}>
                              <Cocktail
                                  name={cocktail.name}
                                  description={cocktail.description}
                                  imagePath={cocktail.imagePath}
                                  ingredients={cocktail.ingredients}
                                  optional={cocktail.optional}
                                  instructions={cocktail.instructions}
                              />
                          </div>
                      );
                  })
              }</div>)
          })}</h1>
      </div>
    );
}*/

function App() {
    let categories = []
    cocktailData.categories.map((category) => categories.push(category.name));
    //console.log(categories);
    return (
        <div className="App">
            {/*<NavBar categories={categories}/>*/}
            <CocktailList />
        </div>
    );
}

export default App;