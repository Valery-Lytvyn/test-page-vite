import "./App.css";
import LazyImage from "./components/LazyImage";
import Image_1 from "./assets/about_bg.png";
import Image_2 from "./assets/blog_pic.png";

function App() {
  return (
    <main>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="flex justify-center items-center flex-1 relative min-h-80">
            <LazyImage src={Image_1} alt="test" />
          </div>
          <div className="flex justify-center items-center flex-1 relative min-h-80">
            <LazyImage src={Image_2} alt="test" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          odio at nobis ullam incidunt similique tenetur nisi tempore quos
          laudantium eveniet quas, dignissimos nemo provident nihil ipsa tempora
          pariatur minus. Eaque ducimus impedit non nihil atque est architecto
          vel fugit iure, suscipit quis veniam tempora aspernatur exercitationem
          optio soluta asperiores reprehenderit fuga aliquid officiis voluptate
          voluptas sed harum dolore. Non. Hic dolorem optio dolorum. Quidem,
          blanditiis? Voluptates dolorem tenetur mollitia soluta cupiditate ipsa
          perferendis. Aut nostrum sint, magnam quasi aliquid iure repellat
          corrupti delectus voluptatem vero numquam obcaecati eveniet ipsam?
          Tempore nam est impedit blanditiis enim pariatur dolorem quod mollitia
          nesciunt doloribus, laudantium voluptatum fuga repudiandae, inventore
          earum quidem similique illum eum laborum! Eligendi velit quae magni,
          suscipit placeat voluptatibus. Vitae officia accusamus, eveniet est
          minus at, natus neque a id ipsa impedit autem corporis molestiae odio
          totam non eos! Sapiente aperiam cumque a natus nostrum? Dignissimos
          voluptatibus tempora distinctio? Ipsum eveniet ipsa vero minima
          voluptates quo quasi in voluptatibus nam neque odio fugit aperiam
          blanditiis, earum qui repellendus magni tempora nobis placeat tenetur
          sit voluptatum. Voluptatibus esse itaque voluptates. Laborum
          blanditiis doloremque ut? Laudantium dolorum dicta nulla illo et optio
          eveniet iste non. Temporibus beatae praesentium eligendi officia
          ratione unde consectetur optio. Ea reiciendis voluptatem quo libero,
          dolorem voluptatum! Maiores, maxime, assumenda saepe ratione et esse
          autem optio itaque nostrum minima minus reiciendis, perspiciatis
          facere illo mollitia voluptate animi beatae cumque repudiandae! Odio
          similique hic nemo iste tempora ad! Sunt repellendus asperiores, amet
          eius velit architecto cupiditate magni enim corporis nobis rerum a
          ipsum repudiandae dolor ad voluptatem iste nesciunt accusantium maxime
          minus! Eveniet quod ipsum exercitationem hic obcaecati. Laborum cumque
          debitis temporibus adipisci eum? Fugit sint inventore repellat,
          nesciunt nam eos? Esse saepe tempore at obcaecati. Ad autem eveniet
          architecto optio sequi iste minus, illo dicta commodi quia? Ipsum illo
          accusantium odit in, quae atque dolorum repellat adipisci
          exercitationem ipsam tempora incidunt molestiae voluptatem optio
          numquam rem minus necessitatibus iusto sed possimus accusamus,
          recusandae officia ratione aperiam? Ut. Ab, commodi? In eos sint magni
          quam animi doloribus dignissimos delectus velit maiores culpa
          architecto autem repudiandae eveniet, consectetur molestiae libero
          suscipit officiis molestias dicta nobis nemo quaerat nam veniam. Rerum
          facilis quia perspiciatis reprehenderit error itaque esse deleniti,
          blanditiis nesciunt eaque nisi fugit expedita autem? Distinctio
          aspernatur eveniet assumenda odit obcaecati facere porro dicta,
          delectus, voluptatem debitis error harum? Temporibus minus optio
          nostrum ab molestias est accusamus, eligendi ducimus minima iste
          voluptatem, sed, sapiente necessitatibus magni? Necessitatibus
          voluptate adipisci debitis repudiandae nam totam fugiat quo,
          voluptates iusto, aliquam labore! Provident, non rem, ducimus tempora
          suscipit nihil illo at sapiente quasi nisi corporis harum atque
          dolorem in aperiam ab animi exercitationem consectetur iste a, esse
          recusandae dicta. Necessitatibus, iste quam. Ipsa aut at accusantium
          vitae praesentium adipisci quibusdam fugit laboriosam, neque possimus
          ut facilis tempora porro omnis facere? Minima, cumque modi ducimus
          molestiae sed deserunt corrupti mollitia quaerat laborum beatae! Vitae
          nesciunt rerum quia nemo reprehenderit aliquid quos tempore quaerat
          dolores dolorum est nam commodi cum hic recusandae praesentium culpa,
          deleniti possimus odit! Iste incidunt magnam libero, excepturi ea
          atque. Exercitationem doloremque quia dignissimos, beatae iste
          consectetur. Illum ipsum vero inventore voluptate incidunt ea, nisi
          sit eos laudantium officiis explicabo! Possimus molestias iste error
          accusamus et. Eum soluta tempora impedit! Perferendis, voluptates.
          Repellendus, similique quis! Saepe, molestiae aliquid repellat
          obcaecati asperiores deserunt dicta consequuntur esse quo voluptates
          laudantium ab aut ut nobis culpa velit facilis rerum voluptas incidunt
          repudiandae. Eveniet. Ullam, qui optio temporibus eius iste porro illo
          vitae rerum, sint voluptatum cumque. Culpa quis nemo, laborum
          dignissimos aspernatur hic, autem dicta architecto expedita blanditiis
          deserunt delectus facilis, soluta distinctio.
        </p>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex justify-center items-center flex-1 relative min-h-80">
          <LazyImage src={Image_1} alt="test" />
        </div>
        <div className="flex justify-center items-center flex-1 relative min-h-80">
          <LazyImage src={Image_2} alt="test" />
        </div>
      </div>
    </main>
  );
}

export default App;
