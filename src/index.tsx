import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react"

// Props is the type for the component props

type Props<C extends ElementType> =
    JSX.IntrinsicAttributes &
    JSX.LibraryManagedAttributes<C, { className?: string } & Omit<ComponentPropsWithRef<C>, 'className'>>



// Refs is the type for ForwardedRef's
// It returns both a RefObject & a RefCallback
// So there is a typing error while assigning a RefObject
// If you know how to solve it, please open a pull request

type Refs<C extends ElementType> = ComponentPropsWithRef<C>['ref']



// "wrapn()" function takes any HTML tag as an argument
// It return another function which takes a TemplateStringsArray argument
// TemplateStringsArray includes the TailwindCSS classes you passed
//
// For example;
//
//    const MyButton = wrapn('button')`
//        bg-sky-400 text-white
//   `
//
// It assigns (TemplateStringsArray + ' ' + className) to className prop of the component

export const wrapn = <C extends ElementType>(Tag: C) =>
    (tw: TemplateStringsArray) => forwardRef<Refs<C>, Props<C>>(
        (props, ref) => <Tag ref={ref} {...props} className={tw + ' ' + props.className || ''} />
    )
