// Sample selenimum-webdriver script that visits google.com
// This uses the selenium-webdriver 3.4 package.
// Docs: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html
// $browser = webdriver session
// $driver = driver libraries
// console.log will output to AWS Lambda logs (via Cloudwatch)

console.log('About to visit blackboard...');
$browser.get('https://staging-blackboard.elearning.uq.edu.au/webapps/login/?action=default_login');
$browser.findElement($driver.By.name('btnK')).click();
$browser.wait($driver.until.titleIs('Blackboard Learn'), 1000);
$browser.getTitle().then(function(title) {
    console.log("title is: " + title);
    console.log('Finished running script!');
});
