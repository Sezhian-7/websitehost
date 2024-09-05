import React, { useState } from "react";
import Image from "next/image";
import Iconarrow from "../../asset/image/svg/Arrow";
import { TeamPopup } from "./TeamPopup";

type Props = {
  teamData: any;
};

export const Team = (props: Props) => {
  const { teamData } = props;

  const [showMyModal, setShowMyModal] = useState(false);
  const [userData, setUserData] = useState<any>([]);
  const [selectIndex, setSelectIndex] = useState<any>();

  const handleOnClose = () => setShowMyModal(false);
  return (
    <>
      {teamData &&
        teamData.map((item: any, idx: number) => {
          return (
            <>
              <div className="team-container" key={`team-item-${idx}`}>
                <div className="group team-wapper">
                  <div className="card">
                    <div
                      className="card-wapper"
                      onClick={() => {
                        console.log(item, "-----item");
                        setShowMyModal(true);
                        setSelectIndex(idx);
                        setUserData(item);
                      }}
                    >
                      <div
                        className={`card-inner ${
                          item.id === 1
                            ? "hover:bg-cardline-100"
                            : item.id === 2
                            ? "hover:bg-cardline-200"
                            : item.id === 3
                            ? "hover:bg-cardline-300"
                            : item.id === 4
                            ? "hover:bg-cardline-400"
                            : item.id === 5
                            ? "hover:bg-cardline-500"
                            : item.id === 6
                            ? "hover:bg-cardline-600"
                            : "hover:bg-cardline-700"
                        }`}
                      >
                        <div className="card-img-container">
                          <Image
                            className="card-image"
                            src={item.personImage}
                            alt={item.name}
                          />
                        </div>

                        <div className="card-context">
                          <p className="card-context-name">{item.name}</p>
                          <p className=" card-context-designation">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`card-flip-container cursor-pointer ${
                        item.id === 1
                          ? "bg-cardline-100"
                          : item.id === 2
                          ? "bg-cardline-200"
                          : item.id === 3
                          ? "bg-cardline-300"
                          : item.id === 4
                          ? "bg-cardline-400"
                          : item.id === 5
                          ? "bg-cardline-500"
                          : item.id === 6
                          ? "bg-cardline-600"
                          : "bg-cardline-700"
                      }`}
                    >
                      <div
                        className="card-flip-text"
                        onClick={() => {
                          console.log(item, "-----item");
                          setShowMyModal(true);
                          setSelectIndex(idx);
                          setUserData(item);
                        }}
                      >
                        <p
                          className={`${
                            item.skill.length > 80 && item.skill.length < 120
                              ? " text-4xl"
                              : item.skill.length >= 120
                              ? "text-2xl"
                              : "text-6xl"
                          }`}
                        >
                          {item.skill}
                        </p>
                        <button>
                          <svg
                            width="26"
                            height="16"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.49892 0.289695C8.66537 0.115807 8.90797 0.0109696 9.16745 0.000834131C9.42694 -0.00945985 9.67953 0.0759013 9.86324 0.236009C10.0468 0.396117 10.1449 0.616089 10.1331 0.842232C10.1213 1.06854 10.001 1.27996 9.80146 1.42486L3.15572 7.22315L25.1216 7.22315C25.4409 7.23804 25.7289 7.39498 25.8837 7.63871C26.0388 7.88228 26.0388 8.17828 25.8837 8.42198C25.7289 8.6657 25.4409 8.82264 25.1216 8.83737L3.15572 8.83737L9.81169 14.6292C9.97923 14.7822 10.0726 14.9853 10.0726 15.1968C10.0726 15.4082 9.97923 15.6115 9.81169 15.7643C9.63906 15.9153 9.40483 16 9.16042 16C8.91601 16 8.6816 15.9153 8.50915 15.7643L0.277117 8.59006V8.59022C0.100124 8.44167 0 8.23675 0 8.02264C0 7.80836 0.100124 7.60343 0.277117 7.45505L8.49892 0.289695Z"
                              fill="#00A973"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <TeamPopup
        selectIndex={selectIndex}
        visible={showMyModal}
        onClose={handleOnClose}
        teamDetial={userData}
        users={teamData}
      />
    </>
  );
};
