import * as HomePage from '../pages/HomePage'
import * as GeneralPage from '../pages/GeneralPage'
import * as JobApplicationPage from '../pages/JobApplicationPage'

require('dotenv').config()

fixture `TC01_ApplyQAJob`
    .page(`${process.env.APP_URL}`);
const EMAIL = process.env.GG_EMAIL
const PASSWORD = process.env.GG_PASSWORD
const QAJOB = "QA QC Manual/Automation to$2k4+1Mo Bonus"
const CVFILE = '../data/CV/mycv.pdf'
const LOCATION=  "Ho Chi Minh"
const FULLNAME=  "CodeLink FN"

test('TC01_ApplyQAJob', async t => {
    //const EMAIL = process.env.GG_EMAIL
    //const PASSWORD = process.env.GG_PASSWORD
    // Login
    await t.maximizeWindow()
    //await GeneralPage.signIn("Google", EMAIL, PASSWORD)
    // + Find the job
    await HomePage.searchJob(QAJOB, LOCATION)
    // + Apply for the job with an attached CV
    await HomePage.openJob(QAJOB)
    await JobApplicationPage.applyCV(FULLNAME,EMAIL, CVFILE, "Testing Testing Testing")
    //Assert Something    
})