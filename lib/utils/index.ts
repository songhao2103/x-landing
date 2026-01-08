import { LOCAL_STORAGE_KEY, localStorageUtil } from '@/lib/storage'

export const languageUtils = {
  get(): string | null {
    return localStorageUtil.get<string>(LOCAL_STORAGE_KEY.LANGUAGE)
  },
  is(lang: string) {
    return this.get() === lang
  },
}
