import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe('Home Page', () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
  })

  test('Should land on the correct homepage', async () => {
    await homePage.assertUrl()
    await homePage.assertTitle()
    await homePage.assertHomePageLoaded()
    await homePage.assertNavbarLinks()
    await homePage.assertOnlineBankingFeatures()
    await homePage.assertSearchPlaceholder()
  })
})
