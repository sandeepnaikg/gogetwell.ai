import { forwardRef, useState, useImperativeHandle } from 'react'
import Drawer from '@/components/ui/Drawer'
import NavToggle from './NavToggle'
import type { DrawerProps } from '@/components/ui/Drawer'

export type ToggleDrawerProps = Omit<DrawerProps, 'isOpen'>

export type ToggleDrawerRef = {
    handleCloseDrawer: () => void
    handleOpenDrawer: () => void
}

const ToggleDrawer = forwardRef<ToggleDrawerRef, ToggleDrawerProps>(
    (props, ref) => {
        const { children, placement = 'left', ...rest } = props

        const [toggled, setToggled] = useState(false)

        const handleCloseDrawer = () => {
            setToggled(false)
        }

        const handleOpenDrawer = () => {
            setToggled(true)
        }

        useImperativeHandle(
            ref,
            () => {
                return {
                    handleCloseDrawer,
                    handleOpenDrawer,
                }
            },
            [],
        )

        return (
            <>
                <button
                    className="close-button text-xl"
                    type="button"
                    onClick={() => setToggled(!toggled)}
                >
                    <NavToggle toggled={toggled} />
                </button>
                <Drawer
                    isOpen={toggled}
                    width={330}
                    placement={placement}
                    onClose={() => setToggled(false)}
                    onRequestClose={() => setToggled(false)}
                    {...rest}
                >
                    {children}
                </Drawer>
            </>
        )
    },
)

ToggleDrawer.displayName = 'ToggleDrawer'

export default ToggleDrawer
