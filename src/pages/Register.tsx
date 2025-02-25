import React, { useState } from 'react';
import { submitFormToWebhook } from '../utils/submitForm';
import { checkDuplicateRegistration } from '../utils/checkDuplicates';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ward: '',
    supportType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Check for duplicates first
      const duplicateCheck = await checkDuplicateRegistration(formData.email, formData.phone);
      
      if (duplicateCheck.exists) {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrorMessage(
          duplicateCheck.field === 'email' 
            ? 'This email is already registered.' 
            : 'This phone number is already registered.'
        );
        return;
      }

      const success = await submitFormToWebhook({
        formType: 'campaign',
        data: {
          ...formData,
          submittedAt: new Date().toISOString(),
          formName: 'Campaign Registration',
          formVersion: '1.0'
        },
        timestamp: new Date().toISOString()
      });

      setIsSubmitting(false);
      setSubmitStatus('success');
      setShowSuccessModal(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ward: '',
        supportType: ''
      });
      
      setTimeout(() => {
        setShowSuccessModal(false);
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Campaign</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto">
            Be part of the movement to transform Kianjai Ward
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            {showSuccessModal && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/95 rounded-lg z-10 transition-all duration-500">
                <div className="text-center p-6 animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you {formData.firstName} for joining our campaign!
                    We will reach out to you with more information soon.
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 animate-[shrink_5s_linear]"></div>
                  </div>
                </div>
              </div>
            )}

            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Register to Support</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ward" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Ward
                </label>
                <input
                  type="text"
                  id="ward"
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  placeholder="e.g., Kianjai"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="supportType" className="block text-sm font-medium text-gray-700 mb-1">
                  How would you like to support?
                </label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.supportType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="donor">Donor</option>
                  <option value="supporter">General Supporter</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {errorMessage && (
                <div className="flex items-center justify-center gap-2 text-red-600 mt-4">
                  <AlertCircle className="w-5 h-5" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary btn-shine inline-flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                      Submitting...
                    </>
                  ) : (
                    'Register Now'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}