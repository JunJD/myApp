
import AxiosSuper,{Methods} from "../utils/http"

/**
 * 利用Promise对异步的处理进行集中管理，并使用成功钩子和失败钩子
 * 
 * @param data 
 * @returns 
 */
export const getLogin:any=(data:Object)=>{
    return (
        new Promise((resolve,reject)=>{
            AxiosSuper({
                url:'http://jsonplaceholder.typicode.com/posts',
                data,
                method:Methods.post,
                success(res:Object){
                    resolve(res)
                },
                error(err:Object){
                    reject(err)
                }
            })
        })
    )
}

