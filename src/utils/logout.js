import { account } from "../lib/appwrite";

const logout = async (navigate) => {
  try {
    await account.deleteSession('current');
    window.location.href = '/';
  } catch (error) {
    console.error("Logout failed:", error);
  }

  return navigate('/login');
}

export default logout;