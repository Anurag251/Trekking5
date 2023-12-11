import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";

const AllPackagePage = () => {
  const { tripDatas } = useContext(AllDataContext);

  console.log(tripDatas)

  return (
    <section className="sec-bg">
      <div className="wrapper">
        <div className="special-package">
          <div className="title-part">
            <div className="name">Our Packages</div>
            <h5>Best Package</h5>
          </div>

          <div className="list">
            {tripDatas &&
              tripDatas.map((data, idx) => (
                <NewPackageCardComponent key={idx} data={data} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPackagePage;
