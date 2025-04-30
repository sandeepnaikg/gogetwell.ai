import { forwardRef } from 'react'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface TFootProps extends ComponentPropsWithRef<'tfoot'> {
    asElement?: ElementType
}

const TFoot = forwardRef<HTMLElement, TFootProps>((props, ref) => {
    const { asElement: Component = 'tfoot', children, ...rest } = props

    return (
        <Component {...rest} ref={ref}>
            {children}
        </Component>
    )
})

TFoot.displayName = 'TFoot'

export default TFoot
