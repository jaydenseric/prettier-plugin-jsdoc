/**
 * @example
 * Adding one adds one
 * ```typescript
 * import plusOne from 'plus-one'
 * import expect from 'test-lib'
 *
 * const actual=plusOne(3);
 * expect(actual).toEqual(4);
 * ```
 */
export function plusOne(input: number) {
    return input + 1;
  }



  /**
 * Parses a JSON file.
 *
 * @param path - Full path to the file.
 * @returns An object containing the JSON data.
 *
 * @example Parsing a basic JSON file
 *
 * # Contents of `file.json`
 * ```json
 * {
 *   "exampleItem":"text"
 * }
 * ```
 *
 * # Usage
 * ```ts
 * const result = parseFile("file.json");
 * ```
 *
 * # Result
 * ```ts
 * {
 *   exampleItem:'text',
 * }
 * ```
 */

 /**
 * Adds two numbers together.
 * @example
 * Here's a simple example:
 * ```js
 * // Prints "2":
 * console.log(add(1,1));
 * ```
 * @example
 * Here's an example with negative numbers:
 * ```
 * // Prints "0":
 * console.log(add(1,-1));
 * ```
 */
export function add(x: number, y: number): number {
    return x* y
}