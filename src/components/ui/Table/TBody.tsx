import { forwardRef } from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface TBodyProps extends ComponentPropsWithRef<'tbody'> {
    asElement?: ElementType
}

const TBody = forwardRef<HTMLElement, TBodyProps>((props, ref) => {
    const { asElement: Component = 'tbody', children, ...rest } = props

    return (
        <Component {...rest} ref={ref}>
            {children}
        </Component>
    )
})

TBody.displayName = 'TBody'

export default TBody
