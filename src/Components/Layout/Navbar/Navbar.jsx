import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faExpand, faGear, faLanguage, faXmark } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
    const [selectedLang, setSelectedLang] = useState('en');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { id: 'en', flag: '', name: 'English' },
        { id: 'es', flag: '', name: 'Español' },
        { id: 'fr', flag: '', name: 'Français' },
        { id: 'de', flag: '', name: 'Deutsch' },
        { id: 'it', flag: '', name: 'Italiano' }
    ];

    const handleLanguageSelect = (langId) => {
        setSelectedLang(langId);
        setDropdownOpen(false);
        console.log('Idioma seleccionado:', langId);
    };

    return (
        <>
            <nav className=" navbar flex justify-between items-center fixed top-0 z-50 w-full 
        py-5 px-8 text-sm font-light border-2">
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <div>
                            DataCloth
                        </div>
                    </li>
                    <li>
                        <button className="text-white px-4 py-2 rounded bg-[#74C0FC]" onClick={() => setIsOpen(prev => !prev)}>
                            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="xl" />
                        </button>
                    </li>
                </ul>
                <ul className="flex items-center gap-3">
                    <li >
                        <button className=' px-2 py-2 hover:bg-gray-100'>
                            <FontAwesomeIcon icon={faExpand} size="xl" style={{ color: "#74C0FC", }} />
                        </button>
                    </li>
                    <li className="relative">
                        <button
                            onClick={() => setDropdownOpen(prev => !prev)}
                            className=" font-semibold text-lg flex items-center gap-2 px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                        >
                            <FontAwesomeIcon icon={faLanguage} size="2xl" style={{ color: "#74C0FC", }} />
                            <span className="capitalize">{selectedLang}</span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => handleLanguageSelect(lang.id)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                    <li>
                        <div>
                            <button className=' px-2 py-2 hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faBell} size="xl" style={{ color: "#74C0FC", }} />
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <img
                                className="rounded-full"
                                style={{ width: "50px", height: "50px" }}
                                src={`https://avatar.iran.liara.run/public/boy`}
                                alt="avatar"
                            />
                            <div className='mx-3'>
                                <p className='font-semibold'>Jose Gonzales </p>
                                <span className=''>Administrator</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <button className=' px-2 py-2 hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faGear} size="xl" style={{ color: "#74C0FC", }} />
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
            <Sidebar isOpen={isOpen} />
        </>
    );
}

export default Navbar;
