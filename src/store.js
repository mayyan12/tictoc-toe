import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
   user: null,
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