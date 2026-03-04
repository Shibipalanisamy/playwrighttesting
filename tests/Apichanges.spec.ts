import {test,expect,request} from '@playwright/test'
import {ApiUtils} from '../Utils/Apiutils'

let response:any;
const loginPayload={userEmail: "dummytestshibi@gmail.com", userPassword: "Testtest11"}
const OrderPayLoad={orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}

let orderid:any;
let token:any;
test.beforeAll(async()=>{

  const Apirequest= await request.newContext({ignoreHTTPSErrors: true})

  /*const postresponse =await Apirequest.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    {data:loginPayload}
  )
   const jsonvalue= await postresponse.json();
   token=await jsonvalue.token;

  console.log(token)
   */
  const Api=new ApiUtils(Apirequest)
   
  console.log( token)
   response=await Api.getOrderId()

})

test.only('Launch browser',async({page})=>{

 

    await page.addInitScript(value=>{
       window.localStorage.setItem('token',value)},response.token)

       await page.goto('https://rahulshettyacademy.com/client/')

      await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders',{waitUntil:'load',timeout:2000})
      await page.pause()
})