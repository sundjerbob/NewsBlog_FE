import {computed, ref} from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 15
export const SIDEBAR_WIDTH_COLLAPSED = 4
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}vw`
)