import { useContext } from "react";
import { Context } from "./Context";

function ImageTable() {
  const { urls } = useContext(Context);

  return (
    <table className="show-img">
      <tbody>
        <tr>
          <td>
            <img src={urls[0]} />
          </td>
          <td>
            <img src={urls[1]} />
          </td>
          <td>
            <img src={urls[2]} />
          </td>
          <td>
            <img src={urls[3]} />
          </td>
          <td>
            <img src={urls[4]} />
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>
            <img src={urls[5]} />
          </td>
          <td>
            <img src={urls[6]} />
          </td>
          <td>
            <img src={urls[7]} />
          </td>
          <td>
            <img src={urls[8]} />
          </td>
          <td>
            <img src={urls[9]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ImageTable;
