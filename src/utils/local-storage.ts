

// set anything to local storage 
export const setToLocalStorage = (key:string, value:string) =>{
    if (!key || typeof window === "undefined") {
        return "";
      }

      return localStorage.setItem(key,value)
};



// get value from local storage
export const getFromLocalStorage = (key:string) =>{
    if (!key || typeof window === "undefined") {
        return "";
      }

      return localStorage.getItem(key)
}


// remove value from local storage
export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};