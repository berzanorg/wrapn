import React, { DetailedHTMLProps, HTMLAttributes, SVGProps, forwardRef, ElementType, ComponentPropsWithoutRef, ForwardRefExoticComponent, PropsWithoutRef } from "react"


// It extends all the keys of `JSX.IntrinsicElements`
type HTMLTag = keyof JSX.IntrinsicElements


// Type of the props of given HTMLTag
type WProps<C extends ElementType> = 
    JSX.IntrinsicAttributes & JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>


// Type of the ref of given HTMLTag
type WRef<C extends ElementType> =
    C extends HTMLTag ? 
        WProps<C> extends DetailedHTMLProps<HTMLAttributes<infer E>, infer E> ? E :
        WProps<C> extends SVGProps<infer S> ? S : never
    : never


// Type of the `wrapn` function
type WrapnFunction = <T extends ElementType>(Tag: T) => WrapnStyleFunction<T>


// Type of the `wrapn` style function
type WrapnStyleFunction<T extends ElementType> = (tw: TemplateStringsArray) => WrapnComponent<T>


// Type of a `wrapn` component
type WrapnComponent<T extends ElementType> = ForwardRefExoticComponent<PropsWithoutRef<WProps<T>> & React.RefAttributes<WRef<T>>>


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
export const wrapn: WrapnFunction = <T extends ElementType>(Tag: T): WrapnStyleFunction<T> => {
    return (tw: TemplateStringsArray): WrapnComponent<T> => {
        return forwardRef<WRef<T>, WProps<T>>(
            (props, ref) => <Tag ref={ref} {...props} className={`${tw} ${props.className || ''}`}/>
        )
    }
}