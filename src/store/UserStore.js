import { observable, runInAction, action, computed } from 'mobx';

import { RootStore } from './RootStore';

export class UserStore {
    rootStore;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable.ref user = [];
    @observable signInStatus = "initial";
    @observable checkIfSignIn = false;
    @observable userId = '';
    @observable token = '';
    

    @action
    login = async (model) => {
        try {
            const response = await this.rootStore.userApi.login(model);
            if (response) {
                runInAction(() => {
                    this.signInStatus = "success";
                    this.userId = response.user.id;
                    this.token = response.token;
                })
            } else {
                this.signInStatus = "error";
            }
        } catch (error) {
            runInAction(() => {
                this.signInStatus = "error";
            });
        }
    };

    @action
    getUserDetails = async (userId) => {
        try {
            const response = await this.rootStore.userApi.getUser(userId);
            if (response) {
                runInAction(() => {
                    this.status = "success";
                    this.user = response.user;
                    this.checkIfSignIn = true;
                    this.userId = response.user._id;
                })
            } else {
                this.status = "error";
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    @action
    signOut = () => {
        this.checkIfSignIn = false;
    }
}