import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly signInButton: Locator
  readonly searchBox: Locator
  readonly linkFeedback: Locator
  readonly brandLogo: Locator
  readonly homeMenu: Locator
  readonly onlineBankingMenu: Locator
  readonly carousel: Locator
  readonly onlineBankingFeatures: Locator
  readonly accountActivityLink: Locator
  readonly transferFundsLink: Locator
  readonly moneyMapLink: Locator

  constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
    this.linkFeedback = page.locator('#feedback')
    this.brandLogo = page.locator('.brand')
    this.homeMenu = page.locator('#homeMenu')
    this.onlineBankingMenu = page.locator('#onlineBankingMenu')
    this.carousel = page.locator('#carousel')
    this.onlineBankingFeatures = page.locator('#online_banking_features')
    this.accountActivityLink = page.locator('#account_activity_link')
    this.transferFundsLink = page.locator('#transfer_funds_link')
    this.moneyMapLink = page.locator('#money_map_link')
  }

  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/')
  }

  async clickOnSignIn() {
    await this.signInButton.click()
  }

  async clickOnFeedbackLink() {
    await this.linkFeedback.click()
  }

  async searchFor(phrase: string) {
    await this.searchBox.type(phrase)
    await this.page.keyboard.press('Enter')
  }

  async assertTitle() {
    await expect(this.page).toHaveTitle(
      'Zero - Personal Banking - Loans - Credit Cards'
    )
  }

  async assertUrl() {
    await expect(this.page).toHaveURL('http://zero.webappsecurity.com/')
  }

  async assertHomePageLoaded() {
    await expect(this.brandLogo).toBeVisible()
    await expect(this.brandLogo).toContainText('Zero Bank')
    await expect(this.signInButton).toBeVisible()
    await expect(this.signInButton).toContainText('Signin')
    await expect(this.searchBox).toBeVisible()
    await expect(this.searchBox).toBeEnabled()
    await expect(this.carousel).toBeVisible()
  }

  async assertNavbarLinks() {
    await expect(this.homeMenu).toBeVisible()
    await expect(this.homeMenu).toContainText('Home')
    await expect(this.onlineBankingMenu).toBeVisible()
    await expect(this.onlineBankingMenu).toContainText('Online Banking')
    await expect(this.linkFeedback).toBeVisible()
    await expect(this.linkFeedback).toContainText('Feedback')
  }

  async assertOnlineBankingFeatures() {
    await expect(this.onlineBankingFeatures).toBeVisible()
    await expect(this.accountActivityLink).toBeVisible()
    await expect(this.transferFundsLink).toBeVisible()
    await expect(this.moneyMapLink).toBeVisible()
  }

  async assertSearchPlaceholder() {
    await expect(this.searchBox).toHaveAttribute(
      'placeholder',
      'Search'
    )
  }
}
