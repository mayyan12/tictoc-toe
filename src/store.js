import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
   user: { name: 'eden', age: 12, token: '9898', avatar:"https://s3-alpha-sig.figma.com/img/3ad0/5ae1/ddb42a7f2f78e7634eba900a5c0db41d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=igjQfuBtGigIGaMsFpVj9bPNpEAKqqHjleI-Tzh8nhq4ZS047o250NKlU2kSjP6IARrl1pelqgHm1PagCNAh0o1EjVMHB5v2ATb8lDSd8rLzGn3pTUzVzJn0JOz4xVqx39tkjuilURZA4zB7rwsABBhYvGFmDjjupVAjLNIYZSxsOtGBvgEKLMmwJHXsC1ndAVpwlshVGUKxRQJemA9vPEJieBubXsW69XDEOOkSq4lcdrSDrNRkhdvAOLrqK~Ri15DM1sZVe876v6pAmiJf08h~EzImYj9Fb4LbaSDa0nP5onpvWy27NJ-DvIb5y~Dt451IPEvuC15aGgvYqEUhWw__" },
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
   playerValue: "o",
   playerAvatar : "https://s3-alpha-sig.figma.com/img/6986/c585/8da5aa2f326d0116725399a65e784c2e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmDZjX9fwBK-Szu8TFzdB~cDHSk3g4GpEJkskS7Mj5NwAjqlic0Y9400sQiHqvL5wj5eq~ru06mDx81MFKgkCBGHGbh4FnROVseq7DdEHWUDLV8GlQCFtS8ef8I9Ukb-Pnjag09ykmt6EBFusjaJC6DGd4oIcGJLGJH9THY4uR6bLz6~cneB1-qodzl-Ig0SPsMfWUIQaqu9oI-5d~LkOzhwB-PFkjGDz644Z4CWvI6VxYwz0Xw2QCiDTIGGrd5UZtOx5YQe-V7NfagFMMXVdtrm8IXxGmgstkALZiPiv3eSPVKh3TSN3IKHYtOmNg6YmEBceXa-lZzzDOFYrYCyUg__",
   wins: 2,
   isValue: "x",
   setPlayername: (value) => set({ playername: value }),
   setWins: (value) => set({ wins: value }),

setIsValue: (value) => set({ isValue: value }),
setPlayervalue: (isValue) => set(isValue =="o" ? "x": "o")
}))