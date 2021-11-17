/**
 * Representation of a test case
 */
interface TestCase {
  only?: boolean
  [value: string]: any
}

export { TestCase }
