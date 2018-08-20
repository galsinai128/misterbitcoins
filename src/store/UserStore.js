import { observable, action, computed } from 'mobx';

class UserStore {
    @observable
    user = null

    constructor(rootStore, apiService) {
        this.rootStore = rootStore;
        this.apiService = apiService;

        this.user = apiService.getUser();
    }
    // add some observables here...

    @action
    addMove(contact,amount){
        var ans = this.apiService.addMove(contact,amount,this.user)
        return ans;
    }

    @action
    signUp(name){
        this.user = this.apiService.signUp(name)
    }
  }
  export default UserStore;
  