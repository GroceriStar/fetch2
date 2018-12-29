// import TodaysDate     from '~/TodaysDate'
// import List           from '~/List/List'

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
  // List,
  getData
};
