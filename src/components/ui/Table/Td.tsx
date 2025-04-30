import { forwardRef } from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface TdProps extends ComponentPropsWithRef<'td'> {
    asElement?: ElementType
}

const Td = forwardRef<HTMLElement, TdProps>((props, ref) => {
    const { asElement: Component = 'td', children, ...rest } = props

    return (
        <Component ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Td.displayName = 'Td'

export default Td
