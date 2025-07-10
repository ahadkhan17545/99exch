import { useSelector, useDispatch } from 'react-redux';

const Helper = () => {
  const userInfoString = useSelector((state) => state?.userInfo?.userdata?.value); // get login user details
  const userInfo = userInfoString ? userInfoString : null;
  // const userInfoString = localStorage.getItem("userdata");
  // const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  return userInfo;
};

export default Helper;
