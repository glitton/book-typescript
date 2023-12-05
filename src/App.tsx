import Book from "./components/Book";
import authorImg from "./assets/mPerry.jpeg";

export default function App() {
  return (
    <main>
      <Book
        title='Friends, Lovers, and the Big Terrible Thing'
        author='Matthew Perry'
        image={{ src: authorImg, alt: "Matthew Perry" }}
      />
    </main>
  );
}
