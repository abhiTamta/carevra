import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-white p-6 rounded-sm shadow-md'>
                <h2 className="text-2xl font-bold mb-4">Find Services provider</h2>
                <div className="mb-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <h3 className="font-semibold text-gray-700 mb-1">Your Current Location</h3>
                </div>
            </div>
            <div>
                <div className='bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4'></div>
            </div>
        </div>
    </main>
  )
}

export default page