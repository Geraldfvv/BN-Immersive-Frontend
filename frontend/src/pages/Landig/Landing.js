import { CardLearnMore } from "../../components/Cards/CardLearnMore/CardLearnMore";
import { Hero } from "../../components/Hero/Hero";
export const Landing = () => {
  const block = "landing";

  const services = [
    {
      title: "Credit Cards",
      img: "https://wallpaperaccess.com/full/2666312.jpg",
    },
    {
      title: "Home Loans",
      img: "https://cdn.mozo.com.au/redactor/pictures/9653/home-loan-features_original.jpg",
    },
    {
      title: "Auto Loans",
      img: "https://www1.bac-assets.com/auto-loans/spa-assets/images/assets-images-site-auto-loans-article-engagement-auto-module-How_Car_Loans_Work_640x300-CSX22fe7dc4.jpg",
    },
    {
      title: "Savings",
      img: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/06/pexels-sakchai-ruenkam-6983167-Cropped-scaled.jpg",
    },
  ];

  return (
    <div className={`${block}__root`}>
      <section>
        <Hero></Hero>
      </section>
      
      <section className={`${block}__services-section`}>
        <h2 className={`${block}__title`}>Products & Services</h2>
        <div className={`${block}__services`}>
          {services.map((service) => {
            return (
              <CardLearnMore
                title={service.title}
                img={service.img}
                key={service.title}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
