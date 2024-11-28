class UserManager {
    constructor() {
      if (!UserManager.instance) {
        this.userData = {};
        UserManager.instance = this;
      }
  
      return UserManager.instance;
    }
  
    setUserData(key, value) {
      this.userData[key] = value;
    }
  
    getUserData(key) {
      return this.userData[key];
    }
  
    static getInstance() {
      if (!UserManager.instance) {
        new UserManager(); // Ensures instance creation on first call
      }
  
      return UserManager.instance;
    }
  }
  
  export default UserManager;