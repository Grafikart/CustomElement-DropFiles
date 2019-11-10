/**
 * @jest-environment jsdom
 */
import { arrayToFileList, diffFiles } from './files'

const fakeFile = (filename: string): File => {
  return new File([''], filename, { type: 'application/pdf' })
}

const fakeFileList = (...files: File[]): FileList => {
  return {
    length: files.length,
    item: (index: number): File => files[index]
  }
}

describe.skip('helpers/files.test', () => {

  describe('arrayToFileList', () => {

    it('should convert an array', () => {
      const f1 = new File([''], 'file1.pdf', { type: 'application/pdf' });
      const f2 = new File([''], 'file2.pdf', { type: 'application/pdf' });
      const fileList = arrayToFileList([f1, f2])
      expect(fileList).toBeInstanceOf(FileList)
    })

  })

  describe('diff', () => {

    it('should detect new Elements', () => {
      const f1 = fakeFile('1.pdf')
      const f2 = fakeFile('2.pdf')
      const [added, removed] = diffFiles(fakeFileList(), fakeFileList(f1, f2))
      console.log(added, removed)
      expect(added).toHaveLength(2)
      expect(removed).toHaveLength(0)
    })

    it('should detect added Elements', () => {
      const f1 = fakeFile('1.pdf')
      const f2 = fakeFile('2.pdf')
      const [added, removed] = diffFiles(fakeFileList(f2), fakeFileList(f1, f2))
      expect(added).toHaveLength(1)
      expect(removed).toHaveLength(0)
    })

    it('should detect added Elements', () => {
      const f1 = fakeFile('1.pdf')
      const f2 = fakeFile('2.pdf')
      const f3 = fakeFile('3.pdf')
      const [added, removed] = diffFiles(fakeFileList(f2, f3), fakeFileList(f1, f2))
      expect(added).toHaveLength(1)
      expect(added[0]).toEqual(f1)
      expect(removed).toHaveLength(1)
      expect(removed[0]).toEqual(f3)
    })

  })

})
