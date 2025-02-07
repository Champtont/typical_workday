//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => ({
    proxyId: [],
    hashId: [],
    inName: null,
    firewall: null,
    numCh: null,
    numActCh: null,
    prefix: null,
    allChInf: [],
    ChannelSetup: [],
    isDisplayed: false,
  }),
})
