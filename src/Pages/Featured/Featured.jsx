import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featuredImg from '../../assets/assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-item pt-10 my-20">
      <SectionTitle
        heading={'Check it Out '}
        subHeading={'From Oue Menu'}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 pt-12 px-36 bg-slate-500 bg-opacity-50">
        <div>
          <img src={featuredImg} alt="featured-image" />
        </div>
        <div className="md:ml-10">
          <p className="text-black text-3xl">September 15, 2023</p>
          <p className="text-black uppercase">Where i can get some food?</p>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quod sit et esse! Tempora amet delectus architecto
            fuga dignissimos nobis ab dolores assumenda. Omnis distinctio
            repellat officia nulla reiciendis sequi ut in quam, consequatur
            numquam praesentium voluptate deleniti eaque, obcaecati ex
            assumenda. Quaerat, sunt commodi!{' '}
          </p>
          <button className="btn btn-outline text-black mt-5 border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
