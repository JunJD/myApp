
import axios from 'axios'


export enum Methods{
  head="head",
  options="options",
  put="put",
  post="post",
  patch="patch",
  delete="delete",
  get="get",
}

interface aixosSuperProps{
    url:string,
    data?:Object,
    config?:any,
    method?:Methods,
    success?:any,
    error?:any,

}


/**
 * 封装aixos,其中配置了请求成功的钩子和请求失败的钩子
 * 
 * @param props 
 */
const AxiosSuper=(props:aixosSuperProps):void=>{
    const {
        url,
        data,
        config,
        method,
        success,
        error
    }=props
       if(method){
            axios[method](url,data,config)
             .then(
                res=>{success(res)},
                err=>{error(err)}
            )
       }else{
            axios.get(url,config)
             .then(
                 res=>{success(res)},
                 err=>{error(err)}
             )
       }

}
export default AxiosSuper

