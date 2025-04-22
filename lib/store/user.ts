import { create } from "zustand";

interface User {
  email?: string | null;
  name?: string | null;
  image?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  shortName?: string | null;
}

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;

  // Actions
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => {
    if (!user) {
      set({ user: null });
      return;
    }
    const parts = user?.name?.split(" ");

    const firstInitial = parts?.length > 0 ? parts[0]?.charAt(0) : "";
    const lastInitial = parts?.length > 0 ? parts[1]?.charAt(0) : "";

    set({
      user: {
        ...user,
        firstName: parts && (parts[0] ?? ""),
        lastName: parts && (parts[1] ?? ""),
        shortName: firstInitial + lastInitial,
      },
      isAuthenticated: !!user,
    });
  },
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
