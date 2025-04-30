import StackedSideNav from '@/components/template/StackedSideNav'
import Header from '@/components/template/Header'
import MobileNav from '@/components/template/MobileNav'
import UserProfileDropdown from '@/components//template/UserProfileDropdown'
import LayoutBase from '@/components//template/LayoutBase'
import useResponsive from '@/utils/hooks/useResponsive'
import { LAYOUT_STACKED_SIDE } from '@/constants/theme.constant'
import type { CommonProps } from '@/@types/common'

const StackedSide = ({ children }: CommonProps) => {
    const { larger, smaller } = useResponsive()

    return (
        <LayoutBase
            type={LAYOUT_STACKED_SIDE}
            className="app-layout-stacked-side flex flex-auto flex-col"
        >
            <div className="flex flex-auto min-w-0">
                {larger.lg && <StackedSideNav />}
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow dark:shadow-2xl"
                        headerStart={
                            <>
                                {smaller.lg && <MobileNav />}
                            </>
                        }
                        headerEnd={
                            <>
                                <UserProfileDropdown hoverable={false} />
                            </>
                        }
                    />
                    <div className="h-full flex flex-auto flex-col">
                        {children}
                    </div>
                </div>
            </div>
        </LayoutBase>
    )
}

export default StackedSide
