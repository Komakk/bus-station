import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";

interface AuthProviderProps {
  children: ReactElement;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};

// authProvider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // register a user
  const registerUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // login a user
  const loginUser = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // sign up with google
  const signInWithGoogle = async () => {};

  // logout a user
  const logout = () => {
    return signOut(auth);
  };

  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };
      }
    });

    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    loading,
    currentUser,
    registerUser,
    loginUser,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
