declare namespace jest {
  interface Matchers<R> {
    toExist: (i?: number) => void
  }
}
