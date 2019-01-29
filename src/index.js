// import TodaysDate     from '~/TodaysDate'

import { search } from '@groceristar/groceristar-fetch';


const getData = (value, type = 'attribute') => {
  let result
  if( type == 'attribute' ){
    result = search.getAttribute(value);
  }

  if( type == 'ingredient' ){
    result = search.getIngredients();
  }

  return result;

}


export {
  // TodaysDate,

  getData
};
