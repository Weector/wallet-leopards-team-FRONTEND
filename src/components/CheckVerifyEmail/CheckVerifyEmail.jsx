import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSelectors';
import s from '../CheckVerifyEmail/CheckVerifyEmail.module.scss';
import { ReactComponent as SuccessIcon } from '../../assets/Images/login/success.svg';
import { ReactComponent as ErrorIcon } from '../../assets/Images/login/error.svg';
import PageWrapper from 'components/PageWrapper/PageWrapper';

const CheckVerifyEmail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const verificationToken = param.verificationToken;
  const isLoading = useSelector(authSelectors.isLoading);
  const isVerified = useSelector(authSelectors.isVerified);

  useEffect(() => {
    dispatch(authOperations.verifyEmail({ verificationToken }));
  }, [dispatch, verificationToken]);

  return (
    <>
      <PageWrapper>
        {isVerified && !isLoading && (
          <div className={s.containerCheck}>
            <SuccessIcon className={s.successIcon} />
            <div className={s.wrapper}>
              <h1 className={s.textMsg}>Email verified successfully</h1>
              <Link to="/login" className={s.link}>
                LOGIN
              </Link>
            </div>
          </div>
        )}
        {!isVerified && !isLoading && (
          <div className={s.containerCheck}>
            <ErrorIcon className={s.successIcon} />
            <div className={s.wrapper}>
              <h1 className={s.textMsg}>404 Not Found</h1>
              <Link to="/login" className={s.link}>
                LOGIN
              </Link>
            </div>
  
          </div>
        )}
      </PageWrapper>
    </>
  )
}

export default CheckVerifyEmail;
