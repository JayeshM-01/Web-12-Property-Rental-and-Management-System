import React from "react";
import Search from "../../components/searchbar/search";
import './properties.css'
import useProperty from "../../hooks/useProperty";
import { PuffLoader } from "react-spinners";
import Propertycard from "../../components/propertycard/propertycard";
const Properties = () => {
  const {data , isError, isLoading} = useProperty()
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
    return(
      <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <Search/>
        <div className="paddings flexCenter properties">
          {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            // data
            //   .filter(
            //     (property) =>
            //       property.title.toLowerCase().includes(filter.toLowerCase()) ||
            //       property.city.toLowerCase().includes(filter.toLowerCase()) ||
            //       property.country.toLowerCase().includes(filter.toLowerCase())
            //   )
              data.map((card, i) => (
                <Propertycard card={card} key={i} />
              ))
          }
        </div>
      </div>
      </div>
    )
}

export default Properties