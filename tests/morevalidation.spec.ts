import {test,expect} from '@playwright/test'
import { count } from 'node:console'

test('test all partices method',async({page,browser})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()

    page.on('dialog',d=>{
        if(d.message().includes('hhdhdhd your knowledge')){
            d.accept();
        }
        else{
            d.dismiss();
        }

    })
    await page.locator('#alertbtn').click()
    await page.locator('#mousehover').hover();

    const mouseloactor= page.locator('div.mouse-hover-content a');
    const count=await mouseloactor.count()

    await Promise.all(
        Array.from({length:count},(_,i)=>mouseloactor.nth(i).textContent().then(text=>console.log(text)))
    )
    const frameloctor=await page.frameLocator('#courses-iframe')
    
    await frameloctor.locator('[href*="lifetime-access"]:visible').click();

})

test('Screenshot Demo',async({page,browser})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#displayed-text').screenshot({path:'SreenshotOfLoacator.png'})
    await page.locator('#hide-textbox').click()
    await page.screenshot({path:'screenshot.png'})
    await expect(page.locator('#displayed-text')).toBeHidden()
    
})
test.only('Visual test',async({page})=>{
    await page.goto('https://www.google.com/',{waitUntil:'load',timeout:2000})
     expect(await page.screenshot()).toMatchSnapshot('landing.png')
})