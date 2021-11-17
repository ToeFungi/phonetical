/**
 * Predicate for whether it is the only test to run or not
 */
const onlyPredicate = (flag?: boolean) => (flag ? it.only : it)

export { onlyPredicate }
