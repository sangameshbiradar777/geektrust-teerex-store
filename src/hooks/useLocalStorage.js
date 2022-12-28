const useLocalStorage = (key) => {
  const getItemFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(key));
  }

  const setItemToLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return { getItemFromLocalStorage, setItemToLocalStorage };
}

export default useLocalStorage;