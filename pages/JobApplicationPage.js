import {t, Selector} from 'testcafe'

var btnApply = Selector('.job-details__apply-btn')
var txtFullName = Selector('#job_application_fullname')
var txtEmail = Selector('#job_application_email')
var txtYourCV = Selector('#job_application_cv_local')
var txtIntroduction = Selector('#job_application_advantages')
var btnSendMyCV = Selector('.btn-block')

export async function applyCV(fullName, email, cvFile, introduction) {
    await t
        .click(btnApply)
        .typeText(txtFullName, fullName)
        .typeText(txtEmail, email)
        .setFilesToUpload(txtYourCV, [cvFile])
        .typeText(txtIntroduction, introduction)
        .click(btnSendMyCV)
}