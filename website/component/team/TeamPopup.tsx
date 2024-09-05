import React, { useState } from "react";
import Image from "next/image";
import { Teamslider } from "../teamSlider/Teamslider";
import Close from "../../asset/image/svg/Close";

interface TeamPopupProps {
  visible: boolean;
  onClose: any;
  teamDetial: any;
  users?: any;
  selectIndex: number;
}

export const TeamPopup: React.FC<TeamPopupProps> = ({
  visible,
  onClose,
  teamDetial,
  users,
  selectIndex,
}) => {
  const [sliderImg, setSliderImg] = useState<any>();
  const handleOnClose = (e: any) => {
    if (e.target.id === "team-container") {
      onClose();
      setSliderImg("");
    }
  };
  const onCloseBtn = () => {
    onClose();
    setSliderImg("");
  };

  if (!visible) return null;

  return (
    <div
      id="team-container"
      onClick={handleOnClose}
      className="team-popup-container"
    >
      <div className="team-popup-wapper popup_img_background">
        <div className="text-end p-2 lg:p-5">
          <button onClick={onCloseBtn}>
            <Close />
          </button>
        </div>
        <div className="popup-text-wapper">
          <Image
            className="popup-img"
            src={sliderImg ? sliderImg.personImage : teamDetial.personImage}
            alt={sliderImg ? sliderImg.name : teamDetial.name}
          />
          <div className=" md:pl-4 lg:pl-12">
            <div>
              <p className=" popup-name">
                {sliderImg ? sliderImg.name : teamDetial.name}
              </p>
              <p className="popup-designation">
                {sliderImg ? sliderImg.designation : teamDetial.designation}
              </p>
            </div>
            <div className=" my-4">
              <p className="popup-detial">
                {sliderImg ? sliderImg.detial : teamDetial.detial}
              </p>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <Teamslider
            currentSlider={selectIndex}
            TeamList={users}
            setSliderImg={setSliderImg}
            teamDetial={teamDetial}
          />
        </div>
      </div>
    </div>
  );
};
