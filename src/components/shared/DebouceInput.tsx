import { forwardRef } from 'react'
import Input from '@/components/ui/Input'
import useDebounce from '@/utils/hooks/useDebounce'
import type { ChangeEvent } from 'react'
import type { InputProps } from '@/components/ui/Input'

type DebouceInputProps = InputProps & {
    wait?: number
}

const DebouceInput = forwardRef<HTMLInputElement, DebouceInputProps>(
    (props, ref) => {
        const { wait = 500, ...rest } = props

        function handleDebounceFn(value: ChangeEvent<HTMLInputElement>) {
            props.onChange?.(value)
        }

        const debounceFn = useDebounce(handleDebounceFn, wait)

        const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            debounceFn(e)
        }

        return <Input ref={ref} {...rest} onChange={handleInputChange} />
    },
)

DebouceInput.displayName = 'DebouceInput'

export default DebouceInput
