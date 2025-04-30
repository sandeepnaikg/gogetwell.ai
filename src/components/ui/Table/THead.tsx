import { forwardRef } from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface THeadProps extends ComponentPropsWithRef<'thead'> {
    asElement?: ElementType
}

const THead = forwardRef<HTMLElement, THeadProps>((props, ref) => {
    const { asElement: Component = 'thead', children, ...rest } = props

    return (
        <Component {...rest} ref={ref}>
            {children}
        </Component>
    )
})

THead.displayName = 'THead'

export default THead
