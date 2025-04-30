import { forwardRef } from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface TrProps extends ComponentPropsWithRef<'tr'> {
    asElement?: ElementType
}

const Tr = forwardRef<HTMLElement, TrProps>((props, ref) => {
    const { asElement: Component = 'tr', children, ...rest } = props

    return (
        <Component ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Tr.displayName = 'Tr'

export default Tr
