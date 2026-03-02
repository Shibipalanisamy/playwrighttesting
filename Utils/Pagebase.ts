import { test as base} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
type pages={
   testdataforOrder:{username:string,password:string,productname:string}
   loginpage:LoginPage
}

const testpage=base.extend<pages>({

    // Loginpage: async({page},use)=>{
    //     await use(new LoginPage(page))
    // }

    testdataforOrder:{
        username:"Shibi",
        password:"Shibi",
        productname:"productname"

    },
    
})

export const test=testpage;
export const expect =test.expect;