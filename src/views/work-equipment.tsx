import ButtonDesktop from "../components/ButtonDesktopD2";
import ButtonDesktopD3 from "../components/ButtonDesktopD3";
import ButtonDesktopD4 from "../components/ButtonDesktopD4";
import ButtonLaptop from "../components/ButtonLaptop";
import Header from "../components/Header";
import "./../App.css";

function AddEquipment() {
  return (
    <>
      <Header bannerSrc="/Banner_RCA.png" goBack={true} />
      <div className="centrar">
        <div className="datos">
          <ButtonDesktop />
          <ButtonDesktopD3 />
          <ButtonDesktopD4 />
          <ButtonLaptop />
        </div>
      </div>
    </>
  );
}

export default AddEquipment;
