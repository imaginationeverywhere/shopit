import React from "react";
import DashboardButton from "../common/components/DashboardButton";
import ModalWrapComp from "../common/components/ModalWrapComp";
import CutIcon from "../common/components/PriceInput/CutIcon";

const ConfirmModal = ({ closeModal, onSubmit, loading }) => {
  return (
    <ModalWrapComp closeModal={closeModal}>
      <div className="confirm-modal">
        <div onClick={closeModal} className="cut-icon">
          <CutIcon width="12" height="12" />
        </div>
        <h5>Confirm Delete</h5>
        <h6>Are you sure you want to Delete?</h6>
        <div className="buttons">
          <DashboardButton name="Cancel" onClick={closeModal} />
          <DashboardButton
            loadingColor="#fff"
            name="Confirm"
            loading={loading}
            disabled={loading}
            colored
            onClick={onSubmit}
          />
        </div>
      </div>
    </ModalWrapComp>
  );
};

export default ConfirmModal;
