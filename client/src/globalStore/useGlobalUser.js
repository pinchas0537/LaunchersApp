import { create } from "zustand"

export const useGlobalToken = create((set) => ({
    token: "",
    setToken: (token) => set({ token })
}))

export const useGlobalUser = create((set) => ({
    user: {},
    setUser: (user) => set({ user })
}))