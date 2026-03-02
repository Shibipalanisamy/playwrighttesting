
export class ApiUtils{

    Apicontext;
   
    constructor (Apicontext:any){
        this.Apicontext=Apicontext
    }
   public async gettoken():Promise<any>{

        const loginPayload={userEmail: "dummytestshibi@gmail.com", userPassword: "Testtest11"}
          const postresponse =await this.Apicontext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {data:loginPayload}
          )
           const jsonvalue= await postresponse.json();
           return await jsonvalue.token;
    }

    public async getOrderId():Promise<any>{

    let response:any={};
          
    response.token= await this.gettoken()
    console.log(response.token)
       
       const OrderPayLoad={orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
       const OrderIdresponse= await this.Apicontext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
            data:OrderPayLoad,
            headers:{
                'authorization':response.token,
                'content-type':'application/json'
            }
        })
        
    const orderidjson= await OrderIdresponse.json()
    const orderId=orderidjson.orderId;
    response.orderId=orderId
        return response
    }
}
