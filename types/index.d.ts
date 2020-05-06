/**
 * @name Deep Confluence 🖤
 * @description Deep Confluence is a Javascript Utility Method to deeply merge objects.
 * - meant for: legibility, simplicity, testability, and utility
 * - not meant for: complex {object}/[array] merging with very particular needs which can easily be tested
 * - use-case/audience: I want to use a bare-bones deep extend method that I can understand
 */
declare type Item = any
/**
 * @name deepConfluence
 * @param {item}
 * @param {otherItem} obj(s)
 */
export default function deepConfluence(item: Item, otherItem: Item): any
export {}
