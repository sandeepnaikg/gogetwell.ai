import { forwardRef } from 'react'
import classNames from '@/utils/classNames'
import { HiArrowUp, HiArrowDown } from 'react-icons/hi'
import type { ReactNode } from 'react'

type GrowShrinkTagProps = {
    value?: number
    showIcon?: boolean
    prefix?: ReactNode | string
    suffix?: ReactNode | string
    positiveIcon?: ReactNode | string
    negativeIcon?: ReactNode | string
    positiveClass?: string
    negativeClass?: string
    className?: string
}

const GrowShrinkValue = forwardRef<HTMLDivElement, GrowShrinkTagProps>(
    (props, ref) => {
        const {
            value = 0,
            className,
            prefix,
            suffix,
            positiveIcon,
            negativeIcon,
            showIcon = true,
            positiveClass,
            negativeClass,
        } = props

        return (
            <span
                ref={ref}
                className={classNames(
                    'flex items-center',
                    value > 0
                        ? classNames('text-success', positiveClass)
                        : classNames('text-error', negativeClass),
                    className,
                )}
            >
                {value !== 0 && (
                    <span>
                        {showIcon &&
                            (value > 0 ? (
                                typeof positiveIcon !== 'undefined' ? (
                                    positiveIcon
                                ) : (
                                    <HiArrowUp />
                                )
                            ) : typeof negativeIcon !== 'undefined' ? (
                                negativeIcon
                            ) : (
                                <HiArrowDown />
                            ))}
                    </span>
                )}
                <span>
                    {prefix}
                    {value}
                    {suffix}
                </span>
            </span>
        )
    },
)

GrowShrinkValue.displayName = 'GrowShrinkValue'

export default GrowShrinkValue
