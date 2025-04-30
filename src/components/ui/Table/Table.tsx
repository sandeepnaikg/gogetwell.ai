import { forwardRef } from 'react'
import classNames from 'classnames'
import type { ComponentPropsWithRef, ElementType } from 'react'

export interface TableProps extends ComponentPropsWithRef<'table'> {
    asElement?: ElementType
    cellBorder?: boolean
    compact?: boolean
    hoverable?: boolean
    overflow?: boolean
}

const Table = forwardRef<HTMLElement, TableProps>((props, ref) => {
    const {
        asElement: Component = 'table',
        cellBorder,
        children,
        className,
        compact = false,
        hoverable = true,
        overflow = true,
        ...rest
    } = props

    const tableClass = classNames(
        Component === 'table' ? 'table-default' : 'table-flex',
        hoverable && 'table-hover',
        compact && 'table-compact',
        cellBorder && 'table-border',
        className,
    )

    return (
        <div className={classNames(overflow && 'overflow-x-auto')}>
            <Component className={tableClass} {...rest} ref={ref}>
                {children}
            </Component>
        </div>
    )
})

Table.displayName = 'Table'

export default Table
