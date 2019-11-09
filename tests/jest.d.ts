declare global {
  namespace jest {
    interface Matchers<R> {
      toExist(i: number): R;
    }
  }
}
