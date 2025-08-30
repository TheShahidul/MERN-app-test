import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../api';
import signupImage from '../assets/signup.avif';

// PasswordStrengthIndicator component remains the same...
const PasswordStrengthIndicator: React.FC<{ validation: { [key: string]: boolean } }> = ({ validation }) => {
  const requirements = [
    { key: 'minLength', text: 'At least 8 characters' },
    { key: 'uppercase', text: 'An uppercase letter' },
    { key: 'lowercase', text: 'A lowercase letter' },
    { key: 'number', text: 'A number' },
    { key: 'specialChar', text: 'A special character' },
  ];

  return (
    <div className="mt-2 space-y-1">
      {requirements.map(req => (
        <div key={req.key} className={`flex items-center text-sm ${validation[req.key] ? 'text-green-600' : 'text-red-600'}`}>
          {validation[req.key] ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
          )}
          {req.text}
        </div>
      ))}
    </div>
  );
};

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [shops, setShops] = useState(['', '', '']);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  const passwordValidation = useMemo(() => ({
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[^A-Za-z0-9]/.test(password),
  }), [password]);

  const isPasswordValid = Object.values(passwordValidation).every(Boolean);

  const handleShopChange = (index: number, value: string) => {
    const newShops = [...shops];
    newShops[index] = value;
    setShops(newShops);
  };

  const addShopInput = () => setShops([...shops, '']);
  const removeShopInput = (index: number) => setShops(shops.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (shops.filter(shop => shop.trim() !== '').length < 3) {
      setMessage({ type: 'error', text: 'Please provide at least 3 shop names.' });
      return;
    }
    if (!isPasswordValid) {
      setMessage({ type: 'error', text: 'Please ensure your password meets all requirements.' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await signupUser({ username, password, shops: shops.filter(s => s.trim() !== '') });
      setMessage({ type: 'success', text: 'Signup successful! Redirecting to login...' });
      setTimeout(() => navigate('/signin'), 2000);
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg md:flex">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Username and Password fields remain the same... */}
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input id="username" name="username" type="text" autoComplete="username" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="relative">
                <label htmlFor="password"className="sr-only">Password</label>
                <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  {/* SVG icons for show/hide password... */}
                </button>
              </div>
            </div>
            {password && <PasswordStrengthIndicator validation={passwordValidation} />}

            {/* Shops fields remain the same... */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Shops</label>
              <p className="text-xs text-gray-500">Name at least 3 shops to get started.</p>
              <div className="mt-2 space-y-2">
                {shops.map((shop, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="text" placeholder={`Shop ${index + 1}`} value={shop} onChange={(e) => handleShopChange(index, e.target.value)} className="flex-grow w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    {shops.length > 3 && (
                      <button type="button" onClick={() => removeShopInput(index)} className="p-1 text-red-500 rounded-full hover:bg-red-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button type="button" onClick={addShopInput} className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">+ Add another shop</button>
            </div>

            <div>
              <button type="submit" disabled={loading || !isPasswordValid} className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
                {loading ? 'Signing up...' : 'Sign up'}
              </button>
            </div>
            {message.text && <p className={`mt-2 text-sm text-center ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{message.text}</p>}
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img className="object-cover w-full h-full rounded-lg" src={signupImage} alt="Person working on a laptop" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

