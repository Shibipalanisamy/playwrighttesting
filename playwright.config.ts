import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries:2, // once it's failed it will automatically it will executed for 2 time
  workers:3, //m=number of windows will be open
  timeout:4*10000,
  reporter:'html',
  
  expect:{
    timeout:5*10000,
    
  },
  use:{
    headless:true,
    browserName:'chromium',
    screenshot:'only-on-failure',
    trace:'on',

  },
  projects:[
    {name:"chrome",
      use:{
      
        browserName:'chromium',
      }
    },
    {
      name:'edge',
      use:{
        browserName:'webkit'
      }
    }
  ]
  
 
});
