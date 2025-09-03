
interface SignupUserData {
  username?: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const BASE_URL = 'http://localhost:5000/api/auth';

async function request(url: string, options: RequestInit = {}) {
  options.credentials = 'include';
  options.headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${url}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.msg || 'An API error occurred');
  }

  return data;
}

export async function signupUser(userData: SignupUserData) {
  return request('/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

export async function loginUser(credentials: LoginCredentials) {
  return request('/signin', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export async function getProfile() {
  return request('/profile');
}

export async function logoutUser() {
  return request('/logout', {
    method: 'POST',
  });
}
