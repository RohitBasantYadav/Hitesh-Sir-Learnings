import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost ({title, slug, status, content, featuredImage, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,status,content,userId,featuredImage
            })
            
        } catch (error) {
            console.log("CreatePost Error::", error)
        }
    }

    async updatePost(slug,{title, status, content, featuredImage}){
        try {

            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,status,content,featuredImage
            })
            
        } catch (error) {
            console.log("Appwrite::UpdatePost Error::", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
            return true;
            
        } catch (error) {
            console.log("Appwrite::DeletePost Error::", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries);
            
        } catch (error) {
            console.log("Appwrite::GetPosts Error::", error)
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
            
        } catch (error) {
            console.log("Appwrite::GetPost Error::", error)
            return false;
        }
    }


    //File Upload Services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
            
        } catch (error) {
            console.log("Appwrite::UploadFile Error::", error)
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
            
        } catch (error) {
            console.log("Appwrite::DeleteFile Error::", error);
            return false;
        }
    }

     getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
            
        } catch (error) {
            console.log("Appwrite::GetFile Error::", error)
        }
    }
}


const service = new Service();

export default service