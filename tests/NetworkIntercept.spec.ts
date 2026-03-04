import { test, expect, request } from '@playwright/test'
import { ApiUtils } from '../Utils/Apiutils'
import { json } from 'node:stream/consumers';

let response1: any;
const loginPayload = { userEmail: "dummytestshibi@gmail.com", userPassword: "Testtest11" }
const OrderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const fakepayload = { data: [], message: "No Orders" }

let orderid: any;
let token: any;
test.beforeAll(async () => {

  const Apirequest = await request.newContext({ ignoreHTTPSErrors: true })

  /*const postresponse =await Apirequest.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    {data:loginPayload}
  )
   const jsonvalue= await postresponse.json();
   token=await jsonvalue.token;

  console.log(token)
   */
  const Api = new ApiUtils(Apirequest)

  console.log(token)
  response1 = await Api.getOrderId()

})

test.only('Launch browser', async ({ page }) => {



  await page.addInitScript(value => {
    window.localStorage.setItem('token', value)
  }, response1.token)

  await page.goto('https://rahulshettyacademy.com/client/')

  await page.route('https://rahulshettyacademy.com/client/',
    async (router) => {
      const response = await page.request.fetch(router.request())
      let body = JSON.stringify(fakepayload)

      console.log(request)
      router.fulfill({
        response,
        body
      })
    }
  )

  await page.pause()
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders')








  page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakepayload);
      route.fulfill(
        {
          response,
          body,

        })
    })
})