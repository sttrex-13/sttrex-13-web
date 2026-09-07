import { useState } from 'react'

import styles from './GalleryImage.module.scss'

type GalleryImageProps = {
  src: string
  alt: string
}

const GalleryImage = ({
  src,
  alt,
}: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={styles.galleryImageWrapper}>
      {!isLoaded && (
        <div
          className={styles.imageSkeleton}
          aria-hidden="true"
        />
      )}

      <img
        src={src}
        alt={alt}
        className={`${styles.galleryImage} ${
          isLoaded ? styles.imageLoaded : ''
        }`}
        loading="lazy"
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        onContextMenu={(event) =>
          event.preventDefault()
        }
      />
    </div>
  )
}

export default GalleryImage