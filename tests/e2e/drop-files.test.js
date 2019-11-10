const path = require('path')

const ORIGINAL_INPUT = 'input[name="files[]"]'
const FAKE_INPUT = 'input:not([name])'
const FILE = '.drop-files__file'
const filePath = function (filename) {
  return path.join(__dirname, 'fixtures', filename)
}

describe('Drop Files', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8080')
  })

  it('should display the label', async () => {
    await expect(page).toMatch('Drop files here or click to upload')
  })

  it('should generate the field', async () => {
    await expect(ORIGINAL_INPUT).toExist()
  })

  it('should show file uploaded', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank.pdf'))
    await expect(page).toMatch('blank.pdf')
  })

  it('should handle multiple files', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank.pdf'))
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank2.pdf'))
    await expect(page).toMatch('blank.pdf')
    await expect(page).toMatch('blank2.pdf')
    await expect(FILE).toExist(2)
  })

  it('should not upload files twice', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank.pdf'))
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank2.pdf'))
    await expect(page).toMatch('blank.pdf')
    await expect(page).toMatch('blank2.pdf')
    await expect(page).toMatch('blank2.pdf')
    await expect(FILE).toExist(2)
  })

  it('should handle file deletion', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank.pdf'))
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank2.pdf'))
    await(await page.$(FILE + ':first-child .drop-files__delete')).click()
    await page.waitFor(1000)
    await expect(FILE).toExist(1)
  })

  it('should handle removing file input', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank2.pdf'))
    await expect(page).toClick('button', { text: 'Remove input'})
    await expect(page).not.toMatchElement('#a input')
    await expect(FILE).toExist(0)
  })

  it('should move the structure when input is moved', async () => {
    await expect(page).toUploadFile(FAKE_INPUT, filePath('blank2.pdf'))
    await expect(page).toClick('button', { text: 'Move input'})
    await expect(page).not.toMatchElement('#a input')
    await expect(page).toMatchElement('#b input')
    await expect('#b ' + FILE).toExist(1)
  })

})
