const path = require('path')

const ORIGINAL_INPUT = 'input[name="files[]"]'
const FAKE_INPUT = 'input:not([name])'
const FILE = '.drop-files__file'
const filePath = function (filename) {
  return path.join(__dirname, 'fixtures', filename)
}

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should display the label', async () => {
    await expect(page).toMatch('Drop files here or click to upload')
  })

  it('should generate the field', async () => {
    await expect(ORIGINAL_INPUT).toExist()
  })

  it('should show file uploaded', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank.pdf')
    )
    await expect(page).toMatch('blank.pdf')
  })

  it('should handle multiple files', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank.pdf'))
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank2.pdf'))
    await expect(page).toMatch('blank.pdf')
    await expect(page).toMatch('blank2.pdf')
    await expect(FILE).toExist(2)
  })

})
