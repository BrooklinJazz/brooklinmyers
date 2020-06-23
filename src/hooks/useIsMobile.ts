import { useWindowDimensions } from "./useWindowDimensions"
import {isMobile} from 'react-device-detect';


export const useIsMobile = () => {
    const {width} = useWindowDimensions()
    console.warn(width)
    return width < 450 || isMobile
}