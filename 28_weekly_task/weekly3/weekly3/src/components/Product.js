import React, {useState} from "react";
import { Link } from "react-router-dom";
import  DATA  from "../Data";


const Products = () => {
const [filter, setFilter] = useState(DATA);

const filterProduct = (cat) => {
  const updatedList = DATA.filter((x)=>x.category === cat);
  setFilter(updatedList);
}

const ShowProducts = () => {
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-3 pb-2 pt-3">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(DATA)}>ALL</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jersey")}>Jersey</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("apparel")}>Apparel</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("aksesoris")}>Aksesoris</button>
      </div>
      {filter.map((item) => {
        return (
          <>
            <div className="col-md-3 d-flex justify-content-center mb-2">
              <div class="card my-3 py-2" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title} height="200px"/>
                <div class="card-body text-center">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text lead fw-bold">
                  Rp {item.price}
                  </p>
                  <Link to={`/products/${item.id}`} class="btn btn-outline-dark">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};


  const cardItem = (item) => {
    return (
      <div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>


  )
};
export default Products;
