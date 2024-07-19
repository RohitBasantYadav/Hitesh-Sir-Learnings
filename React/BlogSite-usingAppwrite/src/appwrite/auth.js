import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const user = await this.account.create(ID.unique(), email, password, name);
            if(user){
                return this.login({email, password});
            }
        }
        catch(err){
            return err;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(err){
            return err;
        }
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }
        catch(err){
            return err;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(err){
            return err;
        }
    }

}

const authService = new AuthService();

export default authService;