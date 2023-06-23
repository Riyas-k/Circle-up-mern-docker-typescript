// import { CircularProgress } from '@mui/material';
import CircleLoader from "react-spinners/CircleLoader";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

function Loading() {
  return (
    <div style={styles.container}>
      {/* <CircularProgress color="primary" /> */}
      <CircleLoader color="black" />
    </div>
  );
}

export default Loading;
