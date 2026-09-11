import { PlaywrightTestConfig } from '@playwright/test'

const headed = process.argv.includes('--headed')

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: 'tests/e2e',
  workers: headed ? 1 : undefined,
  use: {
    headless: !headed,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
    launchOptions: {
      slowMo: headed ? 400 : 0,
    },
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
}

export default config
