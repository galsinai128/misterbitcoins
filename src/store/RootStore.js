
import UserStore from './UserStore';

import UserService from '../services/UserService';


class RootStore {
  constructor() {
    this.userStore = new UserStore(this, UserService);
  }
}
export default RootStore;
