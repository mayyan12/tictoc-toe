import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
   user: { name: 'eden', age: 12, token: '9898' },
   login: async (formData) => {
      await new Promise(resolve => setTimeout(resolve, 5 * 1000))
      // apiReq
      const user = { name: 'eden', age: 12, token: '9898' }
      localStorage.user = JSON.stringify(user)
      localStorage.token = user.token
      set({ user })
   },
   logout: () => {
      localStorage.clear()
      set({ user: null })
   }
}))

export const useUserPrefStore = create((set, get) => ({
   playername: "mayeen",
   playerWins: 5,
   playerValue: "x",
   wins: 2,
   isValue: "o",
   setPlayername: (value) => set({ playername: value }),
   setWins: (value) => set({ wins: value }),

setIsValue: (value) => set({ isValue: value }),
}))