export default class Storage {
    setItem(key, value) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    }
  
    getItem(key) {
      if (typeof window !== "undefined") {
        const value = sessionStorage.getItem(key);
        return JSON.parse(value);
      }
      return null;
    }
  
    removeItem(key) {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(key);
      }
    }
  
    clearStorage() {
      if (typeof window !== "undefined") {
        sessionStorage.clear();
      }
    }
  }
  