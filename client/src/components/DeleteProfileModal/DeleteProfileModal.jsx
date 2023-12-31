import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { delUser } from 'store/auth/authOps';
import Modal from 'components/shared/Modal/Modal';
import DeleteProfileForm from 'components/Forms/ProfileForm/DeleteProfileForm/DeleteProfileForm';

import { DeleteProfileBtn } from './DeleteProfileModal.styled';

export default function DeleteProfileModal() {
  const dispatch = useDispatch();
  const callBack = (data) => {
    dispatch(delUser(data));
  };
  const { t } = useTranslation();

  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);

  const openDeleteProfileModal = () => {
    setShowDeleteProfileModal(true);
  };

  const closeDeleteProfileModal = () => {
    setShowDeleteProfileModal(false);
  };

  return (
    <>
      {showDeleteProfileModal && (
        <Modal isOpen={showDeleteProfileModal} onClose={closeDeleteProfileModal}>
          {<DeleteProfileForm onClose={closeDeleteProfileModal} callBack={callBack} />}
        </Modal>
      )}
      <DeleteProfileBtn type="button" onClick={openDeleteProfileModal}>
        {t('DeleteProfile')}
      </DeleteProfileBtn>
    </>
  );
}
