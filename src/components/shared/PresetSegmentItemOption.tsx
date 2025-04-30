import { forwardRef } from 'react'
import classNames from 'classnames'
import { HiCheckCircle } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'

interface PresetSegmentItemOptionProps extends CommonProps {
    active: boolean
    customCheck?: string | React.ReactNode
    defaultGutter?: boolean
    disabled?: boolean
    hoverable?: boolean
    onSegmentItemClick?: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => void
}

const PresetSegmentItemOption = forwardRef<
    HTMLDivElement,
    PresetSegmentItemOptionProps
>((props, ref) => {
    const {
        active,
        children,
        className,
        customCheck,
        defaultGutter = true,
        disabled,
        hoverable,
        onSegmentItemClick,
    } = props

    return (
        <div
            ref={ref}
            className={classNames(
                'flex',
                !customCheck && 'justify-between',
                'items-center',
                'border',
                'rounded-md ',
                'border-gray-200 dark:border-gray-600',
                defaultGutter && 'py-5 px-4',
                'cursor-pointer',
                'select-none',
                'w-100',
                active && `ring-1 ring-primary border-primary`,
                hoverable &&
                    `hover:ring-1 hover:ring-primary hover:border-primary`,
                disabled && 'opacity-50 cursor-not-allowed',
                className,
            )}
            onClick={onSegmentItemClick}
        >
            {children}
            {active && !customCheck && (
                <HiCheckCircle className="text-2xl text-primary" />
            )}
            {active && customCheck}
        </div>
    )
})

PresetSegmentItemOption.displayName = 'PresetSegmentItemOption'

export default PresetSegmentItemOption
