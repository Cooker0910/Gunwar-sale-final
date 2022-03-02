import React, { useState } from "react";

import { RANGESTEP, MINVALUE, MAXVALUE } from '../../constants/constant';

import ConfirmModal from '../../components/modal/ConfirmModal';
import "./Home.scss";
import ProgressBar from "../../components/elements/ProgressBar";
import { Button } from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Wave } from "react-animated-text";

const Home = (props) => {
  const [busdAmount, setBusdAmount] = useState(1600);
  const [animation, setAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false);
  }

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setAnimation(true),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="align-items-center mb-4 background-border border border-double border-12 container d-flex flex-column justify-content-center">
      <div className="fs-3p0 white fw-600 token-title">
        <Wave
          text="$GUNW Tokens Private Sale"
          effect="stretch"
          effectChange={2.0}
          effectDuration={0.5}
          paused={animation}
        />
      </div>

      <div className="fs-2p25 white fw-600">
        <span>Start Time: 2022-01-26 02:00PM UTC</span>
      </div>
      <div className="fs-2p0 white fw-600">
        Total Allocations: 270,000 BUSD | 67,500,000 $GUNW
      </div>
      <div className="w-100 d-flex justify-content-center">
        <ProgressBar progress={props.progress} height={30} />
      </div>
      <div className="d-flex justify-content-center mt-3 w-100">
        <div>
          <Button
            onClick={() => {
              setBusdAmount(200);
            }}
            className="range-button"
          >
            Min
          </Button>
        </div>
        <div style={{ minWidth: "300px", padding: "0 30px", width: "40%" }}>
          <InputRange
            step={RANGESTEP}
            maxValue={MAXVALUE}
            minValue={MINVALUE}
            value={busdAmount}
            onChange={(value) => {
              setBusdAmount(value);
            }}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              setBusdAmount(3000);
            }}
            className="range-button"
          >
            Max
          </Button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {props.onClick(busdAmount);}}
        className="fw-600 fs-0p875 px-3 mx-2 px-lg-4 mx-lg-3 buy mt-4 custom-button mb-4"
      >
        Buy
      </button>
      <ConfirmModal
        open={showModal}
        onClose={onCloseModal}
        title="Alert"
        text={`You selected ${busdAmount} NFT.`}
        primaryButton="OK"
        onPrimaryClick={() => {setShowModal(false)}}
      />
    </div>
  );
};

export default Home;
