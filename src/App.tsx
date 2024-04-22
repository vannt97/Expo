import logo from "/assets/svgs/marvy-group.svg";
import arrow from "/assets/svgs/arrow.svg";
import btnZalo from "/assets/svgs/btn-zalo.svg";
import btnWebAr from "/assets/svgs/btn-web-ar.svg";
import { useMemo } from "react";
import { deviceType } from "./utils/common";
function App() {
  const renderContent = useMemo(() => {
    if (deviceType() == "mobile") {
      return (
        <div className="bg">
          <p className="pt-[28px]"></p>
          <img className="w-[130px] mx-auto mb-[50px]" src={logo} alt="" />
          <div className="uppercase text-center text-[24px] mb-[30px] leading-tight">
            chọn nền tảng
            <span className="block">trải nghiệm</span>
          </div>
          <img className="mx-auto w-[30px] mb-[30px]" src={arrow} alt="" />
          <img
            onClick={() => {
              window.location.href =
                "https://zalo.me/s/4566869252093326007/?env=TESTING&version=1";
            }}
            src={btnZalo}
            className="mx-auto w-[85%] mb-[25px]"
            alt=""
          />
          <img src={btnWebAr} className="mx-auto w-[85%]" alt="" />
        </div>
      );
    } else {
      return <div className="flex items-center justify-center"></div>;
    }
  }, []);
  return <>{renderContent}</>;
}

export default App;
