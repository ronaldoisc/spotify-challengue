
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";



export const Loader = ({ loading }) => {

  const override = css`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
  `;
  return (<BeatLoader color='gray' loading={loading} css={override} size={15} margin={2} />)
}
