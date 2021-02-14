import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({ title, coverImage, slug, height, width }) {
  const { src, external, name, externalSrc } = coverImage;

  const image = (
    <figure>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-sm', {
          'hover:shadow-md transition-shadow duration-200': slug,
        })}
        layout="responsive"
        width={width}
        height={height}
      />
      {external && (
        <figcaption className="text-sm">
          Image by{' '}
          <a href={externalSrc} target="_blank">
            <span className="underline hover:text-success duration-200 transition-colors">
              {name}
            </span>
          </a>
        </figcaption>
      )}
    </figure>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
