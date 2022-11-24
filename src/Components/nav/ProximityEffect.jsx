import './styles/ProximityEffect.css';
import { useEffect, useRef } from 'react'

const ProximityEffect = ({ titleRef }) => {
    const containerRef = useRef(null)
    const eye1 = useRef(null)
    const eye2 = useRef(null)
    useEffect(() => {
        const ref = containerRef?.current.getBoundingClientRect();
        const refX = ref.left + ref.width / 2;
        const refY = ref.top + ref.height / 2;
        document.addEventListener("mousemove", (e) => {
            const userX = e.clientX;
            const userY = e.clientY;
            const angleDeg = angle(userX, userY, refX, refY)
            eye1.current.style.transform = `rotate(${90 + angleDeg}deg)`
            eye2.current.style.transform = `rotate(${90 + angleDeg}deg)`
            titleRef.current.firstChild.style.color = `hsl(${angleDeg}, 70%, 60%)`
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