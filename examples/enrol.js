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
$browser.wait($driver.until.elementLocated($driver.By.name('user_id')), 1000);
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

//_choose_course

console.log('Choosing course...');
$browser.wait($driver.until.elementLocated($driver.By.partialLinkText('AUTOMATION_TESTING')), 1000);
$browser.findElement($driver.By.partialLinkText('AUTOMATION_TESTING')).click();


 //_navigate

// $browser.findElement($driver.By.id('menuPuller')).click();
console.log('Click users and groups...');
$browser.wait($driver.until.elementLocated($driver.By.id('controlpanel.users.and.groups_groupExpanderLink')), 1000);
$browser.findElement($driver.By.id('controlpanel.users.and.groups_groupExpanderLink')).click();

console.log('Click users...');
$browser.wait($driver.until.elementLocated($driver.By.xpath('//*[@id="controlpanel.users.and.groups_groupContents"]/li[3]/a')), 1000);
$browser.findElement($driver.By.xpath('//*[@id="controlpanel.users.and.groups_groupContents"]/li[3]/a')).click();

//enroll
console.log('Enrolling...');
$browser.wait($driver.until.elementLocated($driver.By.css('#nav > li > a')), 1000);
$browser.findElement($driver.By.css('#nav > li > a')).click();

$browser.wait($driver.until.elementLocated($driver.By.id('userName')), 1000);
$browser.findElement($driver.By.id('userName')).click();
$browser.findElement($driver.By.id('userName')).sendKeys('studenta');

$browser.wait($driver.until.elementLocated($driver.By.name('bottom_Submit')), 1000);
$browser.findElement($driver.By.name('bottom_Submit')).click();
    // driver.implicitly_wait(2)
console.log('Waiting for status...');
// $browser.wait($driver.until.elementLocated($driver.By.id('goodMsg1')), 1000).then(function(webElement) {
//     console.log('Success');
//   });

$browser.wait($driver.until.elementLocated($driver.By.id('badMsg1')), 1000).then(function(webElement) {
    console.log('Failure');
});

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
