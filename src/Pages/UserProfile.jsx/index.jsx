import { useState } from "react";
import Navbar from "../../components/navigation";
import Breadcrumbs from "./components/Breadcrumbs";
import Profile from "./components/Profile";
import Achievements from './components/Achievements'
import AboutSection from "./components/AboutSection";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Products from "./components/Products";
import ReviewSection from "./components/Reviews";
import Footer from "./components/Footer";
const INITIAL_USER_DATA = {
  name: 'John Powell',
  role: 'Product Manager',
  rating: 3.0,
  reviewCount: 1,
  location: 'Los Angeles',
  birthdate: 'November 10, 1996',
  profileImageUrl:
    'https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/5-150x150.jpg',
};

const PRODUCT_DATA = [
  {
    title: "Developers drop the framework folder into a new parent",
    category: "Design & Creative",
    imageSrc: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service11-495x370.jpg",
    author: {
      name: "John Powell",
      imageSrc: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/5-150x150.jpg"
    },
    rating: 4.5,
    reviews: 2,
    price: 128
  },
  {
    title: "Full Service host that will do most of the work for you",
    category: "Design & Creative",
    imageSrc: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service2-495x370.jpg",
    author: {
      name: "John Powell",
      imageSrc: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/5-150x150.jpg"
    },
    rating: 3.0,
    reviews: 1,
    price: 79,
  }
];
const UserProfile = () => {

  const [userData] = useState(INITIAL_USER_DATA);
  return (
    <div className="bg-white min-h-screen w-screen ">
      <Navbar />
      <div className="container mx-auto">
        <Breadcrumbs />
        <Profile userData={userData} />
        <div className="gutter-space-padding flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <Achievements />
            <AboutSection />
            <Education />
            <Experience />
            <Awards />
            <Products products={PRODUCT_DATA} />
            <ReviewSection />
            <Footer />
          </div>
          <div className="md:w-1/4 ">
            <p>this is test</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserProfile;
