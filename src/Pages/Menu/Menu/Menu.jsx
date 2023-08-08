import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import offerImg from '../../../assets/assets/menu/banner3.jpg';
import img from '../../../assets/assets/menu/salad-bg.jpg';
import saladImg from '../../../assets/assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/assets/menu/soup-bg.jpg';
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/assets/menu/dessert-bg.jpeg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === 'dessert');
  const offered = menu.filter((item) => item.category === 'offered');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  return (
    <div>
      <Helmet>
        <title>BistroBoss-Menu</title>
      </Helmet>
      <Cover img={img} title="Our Menu" />
      {/* Main Menu */}
      <SectionTitle
        subHeading={"Don't Miss Out"}
        heading={'Todays Offer'}
      ></SectionTitle>

      {/* Offered */}
      <MenuCategory
        items={offered}
        title={'offered'}
        img={offerImg}
      ></MenuCategory>

      {/* dessert */}
      <MenuCategory
        items={dessert}
        title={'dessert'}
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
      {/* salad */}
      <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
      {/* sOUP */}
      <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
