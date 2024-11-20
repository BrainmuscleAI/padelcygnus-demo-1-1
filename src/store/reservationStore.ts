import { create } from 'zustand'

interface ReservationState {
  showCourtModal: boolean
  showClassModal: boolean
  setShowCourtModal: (show: boolean) => void
  setShowClassModal: (show: boolean) => void
}

export const useReservationStore = create<ReservationState>((set) => ({
  showCourtModal: false,
  showClassModal: false,
  setShowCourtModal: (show) => set({ showCourtModal: show }),
  setShowClassModal: (show) => set({ showClassModal: show }),
}))