import React from 'react';
import { ICONS } from '../constants';

interface CertificateModalProps {
    certificate: {
        title: string;
        date: string;
    };
    userName: string;
    onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, userName, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div 
                className="bg-gray-100 rounded-lg shadow-2xl max-w-2xl w-full p-8 border-8 border-purple-300 relative text-gray-800"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center">
                    <div className="flex justify-center text-purple-600 mb-4">
                        {React.cloneElement(ICONS.CERTIFICATE, {className: "w-16 h-16"})}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 font-serif">Certificate of Completion</h2>
                    <p className="text-lg mt-4">This certificate is proudly presented to</p>
                    <p className="text-3xl font-semibold text-purple-700 my-4 border-b-2 border-gray-300 pb-2">
                        {userName}
                    </p>
                    <p className="text-lg">for successfully completing the test</p>
                    <h3 className="text-2xl font-bold my-3">{certificate.title}</h3>
                    <p className="text-sm text-gray-500">
                        Completed on: {new Date(certificate.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="mt-8 flex justify-between items-center">
                         <div className="text-left">
                            <p className="font-bold text-lg">Igacyane</p>
                            <p className="text-xs text-gray-500">Rwanda TVET Edition</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;