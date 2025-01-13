import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  image: GalleryImage;
}

const Gallery: React.FC<GalleryProps> = ({ image }) => (
  <Image 
    src={image.src}
    alt={image.alt}
    width={400}
    height={300}
    className="rounded-lg shadow-lg"
  />
); 