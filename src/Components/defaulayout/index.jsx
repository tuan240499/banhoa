
import Headers from "../Headers/Headers"
import Footer from "../Footer/Footer"
import { memo } from 'react'
 function DefauLayout({ page }) {
  
    return (
        <>
            <Headers />
            <div className="content">
                {page}
            </div>
            <Footer />
        </>
    )
}
export default memo(DefauLayout)