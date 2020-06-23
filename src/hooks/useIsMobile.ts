import { useWindowDimensions } from "./useWindowDimensions"

// consider adding device detect
export const useIsMobile = () => {
    const {width} = useWindowDimensions()
    console.warn(width)
    return width < 500
}