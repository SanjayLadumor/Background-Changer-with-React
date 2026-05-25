import '../App.css'
import '../index.css'

export default function Textdisplay({ Playtext }) {
    if (Playtext === 0) {
        return <>
            <div className="texthere text-white absolute top-70 text-[70px] cursor-default font-bold left-5 max-sm:text-6xl max-sm:left-3 max-sm:overflow-visible max-sm:top-140">Drive the green revolution.</div>
        </>
    }
    else if (Playtext === 1) {
        return <>
            <div className="texthere text-white absolute top-70 text-[80px] cursor-default font-bold left-5 max-sm:text-6xl max-sm:left-3 max-sm:overflow-visible max-sm:top-140">Powering a cleaner tomorrow.</div>
        </>
    }
    else if (Playtext === 2) {
        return <>
            <div className="texthere text-white absolute top-70 text-[80px] cursor-default font-bold left-5 max-sm:text-6xl max-sm:left-3 max-sm:overflow-visible max-sm:top-140">Electrify your journey.</div>
        </>
    }
}