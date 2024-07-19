export const isAuthentication = () => {
  if (typeof window !== 'undefined') { 
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(token ? token : "");
    }
  }
  return null;
};