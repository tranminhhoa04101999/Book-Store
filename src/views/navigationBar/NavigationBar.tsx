import NavigationBarItem from "@/components/NavigationBarItem/NavigationBarItem";

const NavigationBar = () => {
  return (
    <div className="flex flex-row justify-center py-10">
      <NavigationBarItem title="Home" />
      <NavigationBarItem title="Shop" icon="home" />
      <NavigationBarItem title="Blog" />
      <NavigationBarItem title="About Us" />
      <NavigationBarItem title="Contact Us" />
    </div>
  );
};

export default NavigationBar;
