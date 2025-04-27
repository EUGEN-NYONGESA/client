import * as SecureStore from 'expo-secure-store';

// Token Storage (separate if you want to be specific)
export const tokenStorage = {
  setItem: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  },
  getItem: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    return value ?? null;
  },
  removeItem: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

// General App Storage (same SecureStore, just logically separated)
export const storage = {
  setItem: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  },
  getItem: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    return value ?? null;
  },
  removeItem: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

// mmkvStorage equivalent
export const mmkvStorage = {
  setItem: async (key: string, value: string) => {
    await storage.setItem(key, value);
  },
  getItem: async (key: string) => {
    const value = await storage.getItem(key);
    return value ?? null;
  },
  removeItem: async (key: string) => {
    await storage.removeItem(key);
  },
};
