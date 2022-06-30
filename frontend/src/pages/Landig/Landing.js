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
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Auto Loans",
      img: "https://wallpaperaccess.com/full/2666312.jpg",
    },
    {
      title: "Savings",
      img: "https://www.suomenpankki.fi/globalassets/fi/suomen_pankki/vastuullisuus/kuvat/vastuullisuus-vastuullinen-sijoittaminen-saastaminen-1920x1080.jpg",
    },
  ];

  return (
    <div className={`${block}__root`}>
      <Hero></Hero>

      <section className={`${block}__services-section`}>
        <h2 className={`${block}__title`}>Products & Services</h2>
        <div className={`${block}__services`}>
          {services.map((service) => {
            return <CardLearnMore title={service.title} img={service.img} />;
          })}
        </div>
      </section>
    </div>
  );
};
