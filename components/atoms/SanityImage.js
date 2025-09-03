'use client';

import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '@/lib/sanity';

const SanityImage = ({ image, alt, className }) => {
    // Usa o hook para gerar as props da imagem
    const imageProps = useNextSanityImage(client, image);

    if (!imageProps) return null;

    return (
        <Image
            {...imageProps}
            alt={alt}
            sizes="(max-width: 800px) 100vw, 800px"
            className={className}
        />
    );
};

export default SanityImage;