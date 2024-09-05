import React from "react";
import { Button } from "../../button/Button";
import Router from "next/router";

interface HerocardProps {
  heading1?: string;
  heading2?: string;
  content?: string;
  subcontent?: string;

  image?: any;
  addClass?: string;
  btnClass1?: string;
  btntextLink1?: string;
  btntextLink2?: string;
  btnClass2?: string;
  btntext1?: string;
  btntext2?: string;
}
export const Herocard: React.FC<HerocardProps> = ({
  heading1,
  heading2,
  content,
  image,
  addClass,
  btntext1,
  btntextLink1,
  btntextLink2,
  btntext2,
  btnClass1,
  btnClass2,
  subcontent,
}) => {
  return (
    <section className={`hero_section ${addClass ? addClass : ""}`}>
      <div className="herocard_content_section">
        <span className="card_heading">
          <h1>
            {heading1 && <span className=" text-8xl">{heading1}</span>}
            {heading2 && <span className=" text-8xl">{heading2}</span>}
          </h1>
        </span>
        <p className="herocard_content">{content}</p>
        {subcontent && <p className="herocard_content">{subcontent}</p>}

        <div className="btn_space">
          {btntext1 && (
            <Button
              addclass={btnClass1}
              btntext={btntext1}
              OnClick={() => Router.push(`${btntextLink1}`)}
            />
          )}
          {btntext2 && (
            <Button
              addclass={btnClass2}
              btntext={btntext2}
              OnClick={() => Router.push(`${btntextLink2}`)}
            />
          )}
        </div>
      </div>
      <div className="img_hero">{image}</div>
    </section>
  );
};
