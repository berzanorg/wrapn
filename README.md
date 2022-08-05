# wrapn
🚄 Create amazing React components using Tailwind, only 143 bytes.
- Minified version is only 143 bytes. Proof: `import a,{forwardRef as b}from"react";export function wrapn(c){return d=>b((b,e)=>a.createElement(c,{ref:e,...b,className:d+" "+b.className}))}`

```jsx
import { wrapn } from 'wrapn'
  
const MyButton = wrapn('button')`
   h-12 px-4
   bg-sky-400
`
```
```html
<MyButton>Sign In</MyButton>
```

<br/>

## Installation
```
npm add wrapn
```
or
```
yarn add wrapn
```

<br/>

## Development
##### Clone the repo
```
git clone https://github.com/wrapn/wrapn.git
```
Install dependencies
```
yarn install
```

<br/>

Or copy & paste this line
```
git clone https://github.com/wrapn/wrapn.git && cd wrapn && yarn install
```

<br/>

## Roadmap
### Solve A Typing Error
There is no error while using this library expect a typing error that occurs with `useRef`
> The first goal is to solve this typing error.

```jsx
import { wrapn } from 'wrapn'
import { useRef } from 'react'


const MyDiv = wrapn('div')`
   flex flex-col
`

const MyButton = wrapn('button')`
   h-12 px-4
   bg-sky-400
`


function Page() {
   const buttonRef = useRef<HTMLButtonElement>(null)
   return (
      <MyDiv>
         <MyButton ref={buttonRef}>Press</MyButton>
      </MyDiv>
   )
}
```
The typing error:
```txt
Type 'MutableRefObject<HTMLButtonElement | undefined>' is not assignable to type 'Ref<((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined> | undefined'.
Type 'MutableRefObject<HTMLButtonElement | undefined>' is not assignable to type 'RefObject<((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined>'.
Types of property 'current' are incompatible.
Type 'HTMLButtonElement | undefined' is not assignable to type '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined'.
Type 'HTMLButtonElement' is not assignable to type '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined'.ts(2322)
```

