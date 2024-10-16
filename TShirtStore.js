lass TShirtStore extends React.Component {

    constructor(props) {

      super(props);

      this.state = {

        tshirtsData: tshirts 

      };

    }

  

    handleBuy = (index, quantity) => {

      const updatedTShirts = [...this.state.tshirtsData];

      updatedTShirts[index].stock -= quantity; 

      this.setState({ tshirtsData: updatedTShirts }); 

    };

  

    render() {

      return (

        <div className="tshirt-store">

          <h1>Jehad's T-shirts</h1>

          {this.state.tshirtsData.map((shirt, index) => (

            <div key={index} className="tshirt-item">

              <h2>{shirt.title}</h2>

              <img src={`./images/${shirt.image}`} alt={shirt.title} />

              <p>${shirt.price}</p>

              <p>{shirt.stock > 0 ? `${shirt.stock} left!` : "Out of Stock"}</p>

  

              {shirt.stock > 0 && (

                <div>

                  <select id={`quantity-${index}`}>

                    {[...Array(shirt.stock).keys()].map(num => (

                      <option key={num + 1} value={num + 1}>

                        {num + 1}

                      </option>

                    ))}

                  </select>

                  <button

                    onClick={() =>

                      this.handleBuy(index, parseInt(document.getElementById(`quantity-${index}`).value))

                    }

                  >

                    Buy

                  </button>

                </div>

              )}

            </div>

          ))}

        </div>

      );

    }

  }

  

 

  ReactDOM.render(<TShirtStore />, document.getElementById('root'));