import { UserStore } from './UserStore';
//  import { ProductStore } from './ProductStore';
//  import UserApi from '../apis/UserApi';
//  import ProductApi from '../apis/ProductApi';

 export class RootStore {
     userStore;

    constructor() {
        this.userStore = new UserStore(this);
    }
}