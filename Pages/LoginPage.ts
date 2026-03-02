import {Locator, Page} from '@playwright/test'

export class LoginPage{
logininbutton:Locator
logoutbutton:Locator
page:Page

constructor(page:Page){
    this.page=page
    this.logininbutton= page.getByRole('textbox', { name: 'Username' });
    this.logoutbutton= page.getByRole('textbox', { name: 'Password' });
}
async launchUrl(url:string){
await this.page.goto(url)
}
}