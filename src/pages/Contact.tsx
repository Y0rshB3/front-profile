import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(t('contact.success'));
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-6">
        <Mail size={28} className="text-gameboy-green-1" />
        <h1 className="text-2xl font-bold">{t('contact.title')}</h1>
      </div>

      <div className="gameboy-container mb-8">
        <div className="gameboy-screen">
          <p className="mb-6 pixel-text">
            {t('contact.intro')}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gameboy-green-4 border-2 border-gameboy-green-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gameboy-green-4 border-2 border-gameboy-green-1"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-bold">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-2 bg-gameboy-green-4 border-2 border-gameboy-green-1"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="pixel-button flex items-center gap-2"
            >
              {isSubmitting ? t('contact.sending') : (
                <>
                  <Send size={16} />
                  {t('contact.send')}
                </>
              )}
            </button>

            {submitMessage && (
              <p className="mt-4 text-gameboy-green-1 font-bold">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
