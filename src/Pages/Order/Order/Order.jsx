import { useState } from 'react';
import orderImg from '../../../assets/assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['pizza', 'soup', 'dessert', 'salad', 'offered'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === 'dessert');
  const offered = menu.filter((item) => item.category === 'offered');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');

  return (
    <div>
      <Helmet>
        <title>BistroBoss-Order</title>
      </Helmet>
      <Cover img={orderImg} title={'Our Shop'}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
