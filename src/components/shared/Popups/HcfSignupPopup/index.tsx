import { useEffect, useState } from 'react'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent, ReactElement } from 'react'
import { Alert, Button, Input } from '@/components/ui'
import { Link } from 'react-router-dom'

interface PopupProps {
    buttonChildren?: ReactElement
    popupButtonStatus?: boolean
    setIsOpenAppointment?: any
    openedFrom?: string
    hcfLogin?: boolean
    openPopupWithPhone?: boolean
    responseSecondary?: any
    userInfoSecondary?: any
    className?: string
}

const HcfSignupPopup = ({
    className,
    buttonChildren,
    popupButtonStatus,
    setIsOpenAppointment,
    openedFrom
}: PopupProps) => {
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [selectedMethod, setSelectedMethod] = useState<'hcf' | 'hospital' | ''>('')
    const [emailSent, setEmailSent] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
        if (openedFrom) {
            localStorage.setItem('popupOpenedFrom', openedFrom)
        }
    }

    const onDialogClose = (e: MouseEvent) => {
        if (setIsOpenAppointment) {
            setIsOpenAppointment(false)
        }
        setEmailSent(false)
        setIsOpen(false)
        localStorage.removeItem('storeType')
        setSelectedMethod('')
    }

    useEffect(() => {
        if (!buttonChildren) {
            openDialog()
        }
    }, [buttonChildren])

    useEffect(() => {
        if (message) {
            const timeOut = setTimeout(() => {
                setMessage('')
            }, 4000)

            return () => clearInterval(timeOut)
        }

        if (successMessage) {
            const timeOut = setTimeout(() => {
                setSuccessMessage('')
            }, 4000)

            return () => clearInterval(timeOut)
        }
    }, [message, successMessage])


    const [email, setEmail] = useState('')

    const handleEmailSignUp = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log('waiting for login logic')
        } catch (err) {
            console.log('errorMessage', err)
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        setGoogleLoading(true);
        try {
            console.log('waiting for login logic')
        } catch (err) {
            console.error('Error signing in with Google:', err);
        } finally {
            setGoogleLoading(false);
        }
    }

    return (
        <div className={`${className} w-full sm:w-auto`}>
            {buttonChildren && (
                <span
                    className={`${className} w-full sm:w-auto`}
                    onClick={() => {
                        openDialog()
                        if (openedFrom) {
                            localStorage.setItem('popupOpenedFrom', openedFrom)
                        }
                    }}
                >
                    {buttonChildren}
                </span>
            )}
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                closable={!popupButtonStatus ? false : true}
            >
                {message && (
                    <Alert
                        duration={8000}
                        showIcon
                        className="mb-4"
                        type="danger"
                    >
                        <span className="break-all">{message}</span>
                    </Alert>
                )}
                {successMessage && (
                    <Alert showIcon className="mb-4" type="success">
                        <span className="break-all">{successMessage}</span>
                    </Alert>
                )}
                {
                    emailSent ? (

                        <div>
                            <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                <p className="text-gray-700 font-medium">
                                    We've sent a verification link to:
                                </p>
                                <p className="text-primary font-semibold mt-1 text-lg break-all">
                                    {email}
                                </p>
                            </div>

                            <p className="text-gray-600 mb-2">
                                Click the link in the email to verify your account.
                            </p>
                            <p className="text-gray-500 text-sm mb-6">
                                The link will expire in 24 hours.
                            </p>
                            <Button block className='!rounded-[5px]' variant='solid' onClick={() => {
                                setEmailSent(false)
                                setIsOpen(false)
                                localStorage.removeItem('storeType')
                                setSelectedMethod('')
                            }} >
                                Back To Home
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <p className="text-center mb-[15px] text-[19px] font-semibold text-black mt-2">
                                Join Wait List to Get Started
                            </p>
                            {
                                (selectedMethod || location.pathname !== '/') ? (
                                    <div className='w-full mx-auto mt-2'>
                                        <form onSubmit={handleEmailSignUp}>
                                            <Input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-[5px] mb-2' placeholder='Enter Email' type='email' />
                                            <Button loading={loading} variant='solid' className='rounded-md w-full'>Sign Up</Button>
                                        </form>
                                        <div className="flex items-center gap-2 my-3">
                                            <div className="border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]" />
                                            <p className="font-semibold heading-text">
                                                or continue with
                                            </p>
                                            <div className="border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]" />
                                        </div>
                                        <Button
                                            className="mx-auto table rounded-md w-full"
                                            type="button"
                                            onClick={handleGoogleSignIn}
                                            loading={googleLoading}
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <img
                                                    className="h-[25px] w-[25px]"
                                                    src="/img/others/google.png"
                                                    alt="Google sign in"
                                                />
                                                <span>Continue with Google</span>
                                            </div>
                                        </Button>
                                        <p className="mt-6 text-center text-sm text-gray-500 mb-2">
                                            By continuing, you agree to our Terms of Service and Privacy Policy
                                        </p>
                                    </div>
                                ) : (
                                    <div className='w-[90%] mx-auto flex flex-col gap-y-[10px] pb-3' >
                                        <Button
                                            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium rounded-[5px]"
                                            variant="solid"
                                            onClick={() => {
                                                localStorage.setItem('storeType', 'hcf')
                                                setSelectedMethod('hcf')
                                            }}
                                        >
                                            Continue as HCF
                                        </Button>
                                        <Button
                                            className="w-full h-12 bg-white hover:bg-gray-50 text-primary border border-primary font-medium rounded-[5px]"
                                            onClick={() => {
                                                localStorage.setItem('storeType', 'hospital')
                                                setSelectedMethod('hospital')
                                            }}
                                        >
                                            Continue as Hospital
                                        </Button>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {!popupButtonStatus && (
                    <Link
                        to={`/`}
                        className="mt-[10px] text-center table mx-auto text-primary"
                    >
                        Back to home
                    </Link>
                )}
            </Dialog>
        </div>
    )
}

export default HcfSignupPopup
