import {t, Selector} from 'testcafe'
import * as Common from "./Common"

var txtSearch = Selector('#query')
var btnSearch = Selector('[name="commit"]')
var cbbCity = Selector('[name="city"]')
var listJobs = Selector('#jobs')

export async function searchJob(keyword) {
    await t.typeText(txtSearch, keyword)
    await t.click(btnSearch)
    //Wait for Job List to be loaded
    await listJobs.with({ visibilityCheck: true })()
}

export async function openJob(jobTitle) {
    var lnkjobTitle = Selector('h2').child('a').withText(jobTitle)
    await t.click(lnkjobTitle)
}

