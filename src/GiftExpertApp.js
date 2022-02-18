import { Fragment, useState } from "react";
import React from 'react';
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {
 const [categories,setCategories] = useState([]);
  return (
    <Fragment>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <br/>
      <button onClick={()=>setCategories([])}>Reset</button>
      <hr />
        <ol>
          {
            categories.map(category => (<GifGrid 
                                            key={category}
                                            category={category}
                                            />))
          }
        </ol>
    </Fragment>
  );
};

export default GiftExpertApp;
