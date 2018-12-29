import React, { Fragment } from "react";
import DefaultList from '~/List/DefaultList';

const IngredientList = ({ items }) => {
  return (
    <Fragment>
      <DefaultList items={items} />
    </Fragment>
  )
}


export default IngredientList
