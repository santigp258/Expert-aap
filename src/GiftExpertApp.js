import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";
//import { Fragment } from "react";

const GiftExpertApp = () => {
  //const categories = ['One punch', 'Samurai x', "Dragon Ball"]
  const [categories, setCategories] = useState([
    "One punch",
  ]);
  /* const handleAdd = () =>{
      setCategories([...categories, 'HunterXHunter']); //spread operator, clonar el array y añadirle el otro elemento
     // setCategories(cats => [...cats, 'HunterXHunter']);
    } */

  return (
    <div id="container">
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ul>
        {
          categories.map(category =>(
            <GiftGrid category={category}
            key={category}
            />
          )
          )
           //tranform each element for array
        }
       
      </ul>
    </div>
  );
};

export default GiftExpertApp;
