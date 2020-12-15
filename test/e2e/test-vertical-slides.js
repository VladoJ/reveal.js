const { Builder, By, Key, util } = require("selenium-webdriver");
const fs = require("fs");

async function wait(ms) {
  console.log("⏰ Waited");
  return new Promise(resolve => setTimeout(resolve, ms));
}


function logger(status, step){
  if(status == true){
    console.log("✔️  Step " + step + " : successful");
  }else{
    console.log("❗ Step " + step + " Error: failed");
  }
}

var succesCounter = 0;
var failedCounter = 0;

async function scrollAllVerticalSlides() {
  var driver = await new Builder().forBrowser("firefox").build();
  var currentStep = 0;

  console.log("\n  TEST SCROLL ALL VERTICAL SLIDES STARTED\n");
  
  try {
    currentStep++;
    driver.get("http://localhost:8000/");
    logger(true, currentStep);
    succesCounter++;
  } catch (error) {
    logger(false, currentStep);
    failedCounter++;
  }

    wait(3000);
  

  var i = 0;
  while(i<4){
    /** Click down button */
    i++;
    try {
      currentStep++;
      driver.findElement(By.className("navigate-down enabled")).click();
      logger(true, currentStep);
      succesCounter++;
    } catch (error) {
      logger(false, currentStep);
      failedCounter++;
      break;
    }
  }

  console.log("\nTEST FINISHED\n✔️ PASSED STEPS: " + succesCounter + "\n❗FAILED STEPS: " + failedCounter);

}

scrollAllVerticalSlides();