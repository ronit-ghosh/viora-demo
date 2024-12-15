import { useState } from 'react';
import { MapPin, X } from 'lucide-react';

export default function LocationList() {
    const [isOpen, setIsOpen] = useState(false);

    const locations = [
        'Hyderpora',
        'Sanatnagar',
        'HMT',
        'Soura',
        'Jawaharnagar',
        'Raibagh'
    ];

    return (
        <div className="fixed z-50 bottom-4 right-4" >
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer text-white border border-[#7800ff] hover:border-transparent hover:bg-[#7800ff]/40 p-2 rounded-full"
                >
                    <MapPin className='text-black dark:text-white' />
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-3 w-52">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                            Currently Delivering in
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <ul className="">
                        {locations.map((location, index) => (
                            <li
                                key={index}
                                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors"
                            >
                                {location}
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div >
    );
}