import PropTypes from 'prop-types';
import Loader from 'components/shared/Loader/Loader';
import { useGetReviewOwnQuery } from 'store/reviews/reviewsApi';

import FeedbackForm from './FeedbackForm';
export default function FormWrapper({ onClose }) {
  const { data: reviews, isLoading } = useGetReviewOwnQuery();

  let action = 'add';
  if (!isLoading && reviews) {
    if (reviews.length > 0) {
      action = 'view';
    }
  }

  return isLoading ? (
    <Loader />
  ) : (
    <FeedbackForm onClose={onClose} action={action} reviewToEdit={reviews ? reviews[0] : {}} />
  );
}

FormWrapper.propTypes = {
  onClose: PropTypes.func.isRequired
};
