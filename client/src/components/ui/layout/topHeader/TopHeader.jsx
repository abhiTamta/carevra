import { MailIcon, PhoneCall } from 'lucide-react'

function TopHeader() {
  return (
    <div className='w-full bg-cyan-900 py-3 hidden md:block px-5 xl:px-0'>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-1.5 text-white items-center text-sm font-semibold"><PhoneCall size={16} />Call support: (123) 456-789</div>
            <div className="flex gap-1.5 text-white items-center text-sm font-semibold"><MailIcon size={16} />Email support: support@carevra</div>
        </div>
    </div>
  )
}

export default TopHeader
