
import React, { useState, useEffect, FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

enum FormStatus {
    Idle,
    Submitting,
    Success,
    Error,
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);

    useEffect(() => {
        if (!isOpen) {
            // Reset form on close
            setTimeout(() => {
                setName('');
                setEmail('');
                setMessage('');
                setStatus(FormStatus.Idle);
            }, 300); // Wait for closing animation
        }
    }, [isOpen]);
    
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            onClose();
         }
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    }, [onClose]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus(FormStatus.Submitting);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Simulate success/error
        if (email.includes('error')) {
            setStatus(FormStatus.Error);
        } else {
            setStatus(FormStatus.Success);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
          onClick={onClose}
        >
            <div 
              className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8 relative transform transition-all duration-300 scale-95"
              onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {status === FormStatus.Success ? (
                    <div className="text-center py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-slate-800 mt-4">{t.contactModal.success}</h3>
                        <button onClick={onClose} className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">Close</button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">{t.contactModal.title}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">{t.contactModal.name}</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder={t.contactModal.namePlaceholder} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">{t.contactModal.email}</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t.contactModal.emailPlaceholder} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">{t.contactModal.message}</label>
                                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder={t.contactModal.messagePlaceholder} rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                            </div>
                            {status === FormStatus.Error && <p className="text-sm text-red-600">{t.contactModal.error}</p>}
                            <button type="submit" disabled={status === FormStatus.Submitting} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-slate-400 flex justify-center items-center">
                                {status === FormStatus.Submitting ? t.contactModal.submitting : t.contactModal.submit}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
