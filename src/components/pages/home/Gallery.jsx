
import{ useState } from 'react'
import gallery  from '../../data/gallery'
import './Gallery.css'


function Gallery () {
    const [startIndex, setStartIndex] = useState(0);

    const visibleImages = gallery.slice(startIndex, startIndex + 6)

    const nextImages = () => {
        if (startIndex < gallery.length - 6) {
            setStartIndex(startIndex + 1);
        }
    }

    const previousImages = () => {
        if(startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    }

    return (
        <div className="gallery-box">

            <button className="gallery-btn" onClick={previousImages}>
                ◀
            </button>
            <div className="gallery-row">
                {visibleImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.image}
                        alt={image.title}
                    />
                ))}
                
            </div>
            <button className="gallery-btn" onClick={nextImages}>
                ▶
            </button>
        </div>
    );
}


export default Gallery