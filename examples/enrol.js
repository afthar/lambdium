// Sample selenimum-webdriver script that visits google.com
// This uses the selenium-webdriver 3.4 package.
// Docs: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html
// $browser = webdriver session
// $driver = driver libraries
// console.log will output to AWS Lambda logs (via Cloudwatch)

console.log('About to visit blackboard...');
$browser.get('https://staging-blackboard.elearning.uq.edu.au/webapps/login/?action=default_login');

// login
console.log('Loggin in...');
console.log('enter username...');
$browser.wait($driver.until.elementLocated($driver.By.name('user_id')), 5000);
$browser.findElement($driver.By.name('user_id')).click();
$browser.findElement($driver.By.name('user_id')).sendKeys('uqc_admin');
console.log('enter password...');
$browser.findElement($driver.By.name('password')).click;
$browser.findElement($driver.By.name('password')).sendKeys('NH8#UGcbUQ@CamLA');
console.log('Click login...');
$browser.findElement($driver.By.id('entry-login')).click();
$browser.getTitle().then(function(title) {
    console.log("title is: " + title);
    // console.log('Finished running script!');
});
try {
  $browser.wait($driver.until.titleIs('Welcome, UQCollege – Blackboard Learn'), 5000);
}
catch(err){

}

//_choose_course


$browser.wait($driver.until.elementLocated($driver.By.partialLinkText('AUTOMATION_TESTING')), 5000);
$browser.findElement($driver.By.partialLinkText('AUTOMATION_TESTING')).click();


 //_navigate

// $browser.findElement($driver.By.id('menuPuller')).click();
$browser.wait($driver.until.elementLocated($driver.By.id('controlpanel.users.and.groups_groupExpanderLink')), 5000);
$browser.findElement($driver.By.xpath('//*[@id="controlpanel.users.and.groups_groupContents"]/li[3]/a')).click();

$browser.wait($driver.until.elementLocated($driver.By.id('controlpanel.users.and.groups_groupExpanderLink')), 5000);
$browser.findElement($driver.By.xpath('//*[@id="controlpanel.users.and.groups_groupContents"]/li[3]/a')).click();

//enroll
// $browser.findElement($driver.By.css('#nav > li > a')).click();
// $browser.findElement($driver.By.id('userName')).sendKeys('100000009');
// $browser.findElement($driver.By.name('bottom_Submit')).click();
    // driver.implicitly_wait(2)
    // try:
    //     status = driver.find_element_by_id('goodMsg1').text.split(':', 1)[0]
    //     error = ''
    // except NoSuchElementException:
    //     pass
    //
    // try:
    //     error = driver.find_element_by_id('badMsg1').text.split(':', 1)[0]
    // except NoSuchElementException:
    //     pass
    //
    //
    // if error == framework_config.ALREADY_ENROLLED:
    //     status = 'NA'
