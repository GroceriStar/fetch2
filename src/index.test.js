import index from './index'
import { search } from '@groceristar/groceristar-fetch'

describe("testing can we use raw files from fetch plugin", () => { 

});


describe("testing search getAttribute method", () => { 
 
  const testAttributes = ( attribute ) => {
 
    test('getAttribute("${attribute}")', () => {
      var stream = search.getAttribute(attribute)
      expect(stream).not.toBe('')
    })
  } 
  
  testAttributes('allergy')
  testAttributes('diet')
  testAttributes('holliday')
 
 
  
});
