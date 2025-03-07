import Milk from "@/assets/images/desktop/image-gallery-milkbottles.jpg";
import OrangeBowl from "@/assets/images/desktop/image-gallery-orange.jpg";
import Cone from "@/assets/images/desktop/image-gallery-cone.jpg";
import Sugar from "@/assets/images/desktop/image-gallery-sugarcubes.jpg";

const Food = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2">
      <img src={Milk} alt="Three Milk Bottles" />
      <img src={OrangeBowl} alt="Orange in bowl" />
      <img src={Cone} alt="IceCream Cone" />
      <img src={Sugar} alt="Sugar Cubes" />
    </div>
  );
};

export default Food;
