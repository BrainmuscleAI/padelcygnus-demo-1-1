import { create } from 'zustand'

interface MembershipState {
  showMembershipModal: boolean
  showPaymentModal: boolean
  selectedPlan: 'basic' | 'premium' | null
  setShowMembershipModal: (show: boolean) => void
  setShowPaymentModal: (show: boolean) => void
  setSelectedPlan: (plan: 'basic' | 'premium' | null) => void
}

export const useMembershipStore = create<MembershipState>((set) => ({
  showMembershipModal: false,
  showPaymentModal: false,
  selectedPlan: null,
  setShowMembershipModal: (show) => set({ showMembershipModal: show }),
  setShowPaymentModal: (show) => set({ showPaymentModal: show }),
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
}))