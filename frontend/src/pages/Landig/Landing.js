import { Hero } from "../../components/Hero/Hero";
export const Landing = () => {
  const block = "landing";
  return (
    <div className={`${block}__root`}>
      <Hero></Hero>
    </div>
  );
};
