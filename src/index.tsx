import React, { DetailedHTMLProps, HTMLAttributes, SVGProps, forwardRef } from "react"


// It extends all the keys of `JSX.IntrinsicElements`
type HTMLTag = keyof JSX.IntrinsicElements

// Type of the props of given HTMLTag
type WProps<C extends HTMLTag> = JSX.IntrinsicElements[C]

// Type of the ref of given HTMLTag
type WRef<C extends HTMLTag> =
    WProps<C> extends DetailedHTMLProps<HTMLAttributes<infer E>, infer E> ? E :
    WProps<C> extends SVGProps<infer S> ? S : never


/**
 * # wrapn
 * Wrap any HTML Element into a styled component
 * - The function takes an HTML tag
 * - Returns another function which takes Tailwind classes
 * - Returns a component which has Tailwind classes embedded
 * 
 * ## Usage
 * ```jsx
 * // To get a styled button
 * <Button>Click Me!</Button>
 * 
 * // Do the same
 * const Button = wrapn('button')`
 *     h-12 px-6
 *     text-white
 *     bg-red-600
 *     hover:bg-red-500
 * `
 * ```
 * Visit [the repo](https://github.com/wrapn/wrapn).
 */
export const wrapn = <T extends HTMLTag>(Tag: T) => {
    return (tw: TemplateStringsArray) => {
        return forwardRef<WRef<T>, WProps<T>>(
            ({ className, ...props }, ref) => <Tag ref={ref} {...props} className={`${tw} ${className || ''}`}/>
        )
    }
}