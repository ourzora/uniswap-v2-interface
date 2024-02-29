import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'disclaimersAccepted'

export default function useDisclaimers() {
  const [disclaimersAccepted, setDisclaimersAccepted] = useState(false)

  useEffect(() => {
    if (!disclaimersAccepted) {
      const hasPreviouslyAccepted = !!localStorage.getItem(STORAGE_KEY)
      if (hasPreviouslyAccepted) {
        setDisclaimersAccepted(true)
      }
    }
  }, [disclaimersAccepted])

  const acceptDisclaimers = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setDisclaimersAccepted(true)
  }, [setDisclaimersAccepted])

  return {
    disclaimersAccepted,
    acceptDisclaimers
  }
}
