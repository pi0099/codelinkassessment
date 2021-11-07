import {t, Selector, ClientFunction} from 'testcafe'

export async function select(sourceSelector, value){
    var option = sourceSelector.find('option')
    await t
        //.click(sourceSelector)
        .click(option.withText(value))
}