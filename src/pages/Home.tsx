import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// images
import hero from "../assets/images/hero.png";
import people from "../assets/images/people.png";
import company from "../assets/images/company.png";
import infoimg from "../assets/images/info.png";
import phone from "../assets/images/phone.png";
import design from "../assets/images/desgin.png";
import company2 from "../assets/images/company2.png";
import programming from "../assets/images/programming.jpeg"

const Home = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="hero">
        <SwiperSlide className="first">
          <img src={hero} alt="" />
          <div>
            <h1>
              Lessons and insights<span>from 8 years</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis
              tempore dolorum ipsa.
            </p>
            <button>Login</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="first">
          <img src={hero} alt="" />
          <div>
            <h1>
              Lessons and insights<span>from 8 years</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis
              tempore dolorum ipsa.
            </p>
            <button>Login</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="first">
          <img src={hero} alt="" />
          <div>
            <h1>
              Lessons and insights<span>from 8 years</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis
              tempore dolorum ipsa.
            </p>
            <button>Login</button>
          </div>
        </SwiperSlide>

      </Swiper>
      <section className="information">
        <h2 style={{ marginTop: "30px" }}>Our Clients</h2>
        <p>Lorem ipsum dolor sit amet 500+ adipisicing.</p>
        <Swiper
          spaceBetween={30}
          slidesPerView={7}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="clients"
        >
          <SwiperSlide className="img" style={{ marginLeft: "40px" }}>
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
          <SwiperSlide className="img">
            <img src={company} alt="" />
          </SwiperSlide>
        </Swiper>

        <h2>
          Manage your entire community <span>in a single system</span>
        </h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="info">
          <div>
            <img src={people} alt="" />
            <h3>Membership Organisations</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident expedita similique earum!
            </p>
          </div>
          <div>
            <img src={people} alt="" />
            <h3>Membership Organisations</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident expedita similique earum!
            </p>
          </div>
          <div>
            <img src={people} alt="" />
            <h3>Membership Organisations</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident expedita similique earum!
            </p>
          </div>
        </div>
        <div className="info2">
          <img src={infoimg} alt="" />
          <div>
            <h2>
              The unseen of spending three <span>years at pixelgrade</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              odio harum. Magni omnis similique nostrum aut sint praesentium
              explicabo, nulla consequatur, accusantium accusamus eius quidem,
              magnam voluptatibus in quia quisquam laboriosam voluptate suscipit
              delectus voluptas numquam. Velit sit asperiores inventore saepe
              aspernatur nesciunt reprehenderit in quos dolore molestias
              assumenda, quo facere. Tenetur ea provident, quia eligendi atque
            </p>
          </div>
        </div>
      </section>
      <Counter />
      <section className="question">
        <img src={phone} alt="" />
        <div>
          <h1>How to design your site footer like we did</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            adipisci earum fugiat, aperiam commodi itaque pariatur, mollitia
            culpa eum laudantium rem maxime natus. Iusto voluptatem
            necessitatibus rem minus aspernatur ad laboriosam quos esse
            veritatis dicta itaque ratione temporibus vitae, asperiores omnis
            quidem, quaerat nam magni fugit natus expedita quasi quae! Esse
            fugiat consectetur officiis totam voluptatem magni eius quae
            excepturi sequi dolorem architecto, minima facere! Unde, earum
            repellendus, officia nemo iusto at odit ut sint provident vitae quae
            ducimus? Sequi.
          </p>
        </div>
      </section>
      <section className="design">
        <img src={design} alt="" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat commodi cumque alias, totam dignissimos numquam minus? Qui rem excepturi modi ex quia eligendi temporibus a ea cum maxime placeat dignissimos necessitatibus, quae facilis asperiores, nostrum commodi incidunt provident enim, eveniet porro harum suscipit. Facilis quam officia distinctio numquam aliquid aut deserunt architecto praesentium enim molestiae, ab vel minus totam accusamus!</p>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div>
            <img src={company2} alt="" />
            <img src={company2} alt="" />
            <img src={company2} alt="" />
            <img src={company2} alt="" />
            <img src={company2} alt="" />
            <Link to="/">Meet all customers &rarr;</Link>
          </div>
        </div>
      </section>
      <section className="programming">
        <div>
          <img src={programming} alt="" />
          <div className="detail">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <Link to="/">Readmore &rarr;</Link>
          </div>
        </div>
        <div>
          <img src={programming} alt="" />
          <div className="detail">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <Link to="/">Readmore &rarr;</Link>
          </div>
        </div>
        <div>
          <img src={programming} alt="" />
          <div className="detail">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <Link to="/">Readmore &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
