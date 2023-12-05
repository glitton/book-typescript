type BookProps = {
  image: { src: string; alt: string };
  title: string;
  author: string;
};

export default function Book({ title, author, image }: BookProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img {...image} />
      </div>
    </article>
  );
}
