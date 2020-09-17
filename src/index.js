export default function classNames(...classes) {
  return classes.map(c =>
    typeof c === 'object'
      ? (itemList => itemList.map(val => val[1] ? val[0] : ''))(Object.entries(c)).join(' ')
      : c,
  )
    .join(' ').replace(/\s+/g,' ').trim();
}
