import { CardLearnMore } from "../../components/Cards/CardLearnMore/CardLearnMore";
import { Hero } from "../../components/Hero/Hero";
import { useGoToSection } from "../../utils/hooks/useGoToSection";
import { landingServices } from "../../utils/constants";

export const Landing = () => {
  const block = "landing";
  useGoToSection();

  return (
    <div className={`${block}__root`}>
      <section>
        <Hero></Hero>
      </section>

      <section className={`${block}__services-section`} id='products'>
        <h2 className={`${block}__title`}>Products & Services</h2>
        <div className={`${block}__services`}>
          {landingServices.map((service) => {
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
