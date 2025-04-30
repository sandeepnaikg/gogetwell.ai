import { forwardRef } from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface ThProps extends ComponentPropsWithRef<'th'> {
    asElement?: ElementType
}

const Th = forwardRef<HTMLTableCellElement, ThProps>((props, ref) => {
    const { asElement: Component = 'th', children, ...rest } = props

    return (
        <Component {...rest} ref={ref}>
            {children}
        </Component>
    )
})

Th.displayName = 'Th'

export default Th
