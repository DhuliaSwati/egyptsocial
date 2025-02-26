import { supabase } from './supabaseClient';

const Logout = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return <button onClick={handleLogout} className="bg-red-500 text-white p-2">Logout</button>;
};

export default Logout;
