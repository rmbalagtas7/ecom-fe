import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

const Modal = ({ isOpen, onClose, text }) => {
  const navigate = useNavigate()
  
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-sm rounded-xl bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-2 border-yellow-600"
            >
              <DialogTitle as="h3" className="text-base font-medium text-black">
                OTP Verification
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black">
                {text}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner bg-gradient-to-r from-[#d4af37] to-[#b8860b]"
                  onClick={() => {
                    onClose()
                    navigate("/")
                  }
                }
                >
                  Proceed to Login
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}

export default Modal