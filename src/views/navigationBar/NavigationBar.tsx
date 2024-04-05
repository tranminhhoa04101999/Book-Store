import NavigationBarItem from "@/components/NavigationBarItem/NavigationBarItem";

const NavigationBar = () => {
  return (
    <div className="flex flex-row justify-center py-10">
      <NavigationBarItem title="Home" icon={""} />
      <NavigationBarItem title="Shop" icon="home" />
      <NavigationBarItem title="Blog" icon={""} />
      <NavigationBarItem title="About Us" icon={""} />
      <NavigationBarItem title="Contact Us" icon={""} />
    </div>
  );
};

export default NavigationBar;
