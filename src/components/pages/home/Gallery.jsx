
import{ useState } from 'react'
import gallery  from '../../data/gallery'
import './Gallery.css'


function Gallery () {
    
    const imageWidth = 250;
    const imageGap = 15;

    


    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [showLightbox, setShowLightbox] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

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

            <button className="gallery-btn" onClick={previousImages} disabled={startIndex === 0}>
                ◀
            </button>
            <div className="gallery-window" >
                <div className="gallery-row" style={{transform: `translateX(-${startIndex * (imageWidth + imageGap)}px)`}}>
                    {gallery.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.image}
                            alt={image.title}
                            onClick = {() => {
                                setSelectedImageIndex(index);
                                setShowLightbox(true);
                            }}
                        />
                    ))}
                    
                </div>
            </div>
            <button className="gallery-btn" onClick={nextImages} disabled={startIndex >= gallery.length - 6}>
                ▶
            </button>
            { showLightbox && (
                <div className="lightbox-overlay" onClick={() => setShowLightbox(false)}>
                    <div className="lightbox" onClick={(event) => event.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setShowLightbox(false)}>✕</button>
                       <div className="full-gallery-container">
                            <button className="lightbox-arrow-left" onClick={() => setSelectedImageIndex(
                                (selectedImageIndex - 1 + gallery.length) % gallery.length)}
                            >
                                ◀
                            </button>
                            <img
                                src={gallery[selectedImageIndex].image}
                                alt={gallery[selectedImageIndex].title}
                            />
                            <button className="lightbox-arrow-right" onClick={() => setSelectedImageIndex(
                                selectedImageIndex + 1) % gallery.length}
                            >
                                ▶
                            </button>
                       </div>
                    </div>
                </div>    
            )}
        </div>
    );
}


export default Gallery