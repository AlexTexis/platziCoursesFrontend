export const normalizeData = (array) => {
  let normalizedData = {}
  
   array.forEach( element => {
       normalizedData = {
           ...normalizedData,
           [element._id] : element
       }
   })
 
   return normalizedData
 }
 