import React, { ComponentPropsWithRef, DetailedHTMLProps, forwardRef, ForwardRefExoticComponent, HTMLAttributes, ReactHTML } from "react";


/**
 * ## ⛸️ Wrapn ([repo](https://github.com/wrapn/wrapn))
 * 
 * `WrapnTag` represents all the HTML elements.
 * 
 * For example: `"a"`, `"button"`, `"div"`, `"input"`, etc...
 */
export type WrapnTag = keyof ReactHTML


/**
 * ## ⛸️ Wrapn ([repo](https://github.com/wrapn/wrapn))
 * 
 * `Wrapn<(WrapnTag)>` represents wrapped components.
 * 
 * For example: `Wrapn<"a">`, `Wrapn<"button">`, `Wrapn<"div">`, etc...
 */
export type Wrapn<T extends WrapnTag> = ForwardRefExoticComponent<React.PropsWithoutRef<React.ComponentPropsWithRef<T>> & React.RefAttributes<WrapnRef<T>>>


/**
 * ## ⛸️ Wrapn ([repo](https://github.com/wrapn/wrapn))
 * 
 * `WrapnProps<(WrapnTag)>` represents the `props` of HTML elements.
 * 
 * For example: `WrapnProps<"a">`, `WrapnProps<"button">`, etc...
 */
export type WrapnProps<T extends WrapnTag> = ComponentPropsWithRef<T>


/**
 * ## ⛸️ Wrapn ([repo](https://github.com/wrapn/wrapn))
 * 
 * `WrapnRef<(WrapnTag)>` represents the `refs` of HTML elements.
 * 
 * For example: `WrapnRef<"a">`, `WrapnRef<"button">`, `WrapnRef<"div">`, etc...
 */
export type WrapnRef<T extends WrapnTag> = JSX.IntrinsicElements[T] extends DetailedHTMLProps<HTMLAttributes<infer R>, infer R> ? R : never



// It represents `wrapn` function itself
type WrapnFunction = <T extends WrapnTag>(Tag: T | Wrapn<T>) => WrapnStyleFunction<T>

// It represents the style function that takes a `TemplateStringsArray`
type WrapnStyleFunction<T extends WrapnTag> = (tw: TemplateStringsArray) => Wrapn<T>


/**
 * ## ⛸️ Wrapn ([repo](https://github.com/wrapn/wrapn))
 * Wrap any HTML Element into a styled component!
 * 
 * - ⏱️ Create the fastest components using Tailwind.
 * - 🎾 Autocomplete provides a joyful experience.
 * - 🌯 Only an HTML element, but a styled one.
 * 
 * 
 * ### Wrap an HTML tag
 * ```jsx
 * // <MyButton/>
 * const MyButton = wrapn('button')`
 *     h-12 px-6
 *     text-white
 *     bg-blue-500
 * `
 * ```
 * 
 * 
 * ### Wrap a component
 * ```jsx
 * // Create a base component
 * const ButtonBase = wrapn('button')`
 *     h-12 px-6
 * `
 * // <ButtonPrimary/>
 * const ButtonPrimary = wrapn(ButtonBase)`
 *     bg-blue-500
 * `
 * // <ButtonSecondary/>
 * const ButtonSecondary = wrapn(ButtonBase)`
 *     bg-gray-500
 * `
 * ```
 * 
 * 
 * ### TailwindCSS Intellisense
 * - Install Tailwind CSS IntelliSense Extension to VS Code.
 * - Press Ctrl + Shift + P keys at the same time.
 * - Type Open User Settings (JSON) in the search box.
 * - Put the content below inside the settings object.
 * 
 * `------------------------------------------------`
 * ```json
 * "editor.quickSuggestions": {
 *      "strings": true
 * },
 * "tailwindCSS.experimental.classRegex": [
 *      "wrapn\\(.*?\\)`([^`]*)"
 * ],
 * ```
 * `------------------------------------------------`
 * 
 * - Done! You can now use Tailwind CSS IntelliSense.
 * 
 * ### Made with ❤️ by Wrapn contributors...
 */

export const wrapn: WrapnFunction = <T extends WrapnTag>(Tag: T | Wrapn<T>): WrapnStyleFunction<T> => {
    return (tw: TemplateStringsArray): Wrapn<T> => {
        return forwardRef<WrapnRef<T>, WrapnProps<T>>(
            (props, ref) => <Tag {...{ref,  className: `${tw} ${props.className || ''}`, ...props} as any}/>
        )
    }
}