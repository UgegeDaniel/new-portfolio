import './styles/ProximityEffect.css';
import { useEffect, useRef } from 'react'

const ProximityEffect = () => {
    const containerRef = useRef(null)
    const eye1 = useRef(null)
    const eye2 = useRef(null)
    useEffect(() => {
        const ref = containerRef?.current.getBoundingClientRect();

        document.addEventListener("mousemove", (e) => {
            // console.log(e);
            const userX = e.clientX;
            const userY = e.clientY;
            const refX = ref.left + ref.width / 2;
            const refY = ref.top + ref.height / 2;
            const angleDeg = angle(userX, userY, refX, refY)
            console.log(angleDeg)
            eye1.current.style.transform = `rotate(${90 + angleDeg}deg)`
            eye2.current.style.transform = `rotate(${90 + angleDeg}deg)`
        })
        const angle = (cx, cy, ex, ey) => {
            const dy = ey - cy
            const dx = ex - cx
            const rad = Math.atan2(dy, dx);
            const deg = rad * 180 / Math.PI;
            return deg;
        }
        // return () => document.removeEventListener("mousemove", () => { return })
    }, []);

    return (
        <div className='proximity-effect' ref={containerRef}>
            <div className='white' ref={eye1} ><div className="black" ></div></div>
            <div className='white' ref={eye2}><div className="black"></div></div>
        </div>
    )
}
export default ProximityEffect;