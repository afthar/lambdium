// Sample selenimum-webdriver script that visits google.com
// This uses the selenium-webdriver 3.4 package.
// Docs: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html
// $browser = webdriver session
// $driver = driver libraries
// console.log will output to AWS Lambda logs (via Cloudwatch)

console.log('About to visit blackboard...');
$browser.get('https://staging-blackboard.elearning.uq.edu.au/webapps/login/?action=default_login');

// login
$browser.findElement($driver.By.name('user_id')).sendKeys('uqc_admin');
$browser.findElement($driver.By.name('password')).sendKeys('NH8#UGcbUQ@CamLA');
$browser.findElement($driver.By.name('login')).click();
$browser.wait($driver.until.titleIs('Welcome, UQCollege – Blackboard Learn'), 10000);
$browser.getTitle().then(function(title) {
    console.log("title is: " + title);
    console.log('Finished running script!');
});

//_choose_course

$browser.findElement($driver.By.partialLinkText('AUTOMATION_TESTING')).click();


//_navigate
$browser.findElement($driver.By.id('controlpanel.users.and.groups_groupExpanderLink')).click();
$browser.findElement($driver.By.id('menuPuller')).click();

$browser.findElement($driver.By.xpath('//*[@id="controlpanel.users.and.groups_groupContents"]/li[3]/a')).click();
//enroll
$browser.findElement($driver.By.css('#nav > li > a')).click();
$browser.findElement($driver.By.id('userName')).sendKeys('100000009');
$browser.findElement($driver.By.name('bottom_Submit')).click();
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
