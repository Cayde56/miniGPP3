import { useContext, useState } from "react";
import axios from "axios";
import ImageTable from "./ImageTable";
import { Context } from "./Context";

export function ImageVariatiorForm() {
  const [nImages, setNImages] = useState(1);
  const [image, setImage] = useState(undefined);
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUrls } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof image === "undefined") {
      return alert("Carge una imagen primero");
    }
    if (imageName.split(".").pop() !== "png") {
      return alert("Carge una imagen .png");
    }

    setLoading(true);
    var res = {};

    const formData = new FormData();
    formData.append("img", image);
    formData.append("nImages", nImages);
    try {
      res = await axios.post("http://localhost:9000/save-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUrls(res.data.urls.url);
      setLoading(false);
    } catch (error) {
      if (error.code === "ERR_NETWORK") alert("Error de conexión");
      setLoading(false);
      return;
    }
    
    if (typeof res.data.imgInfo === "object") {
      if (res.data.imgInfo.code === "LIMIT_FILE_SIZE")
        return alert("El tamaño de la debe ser menor a 4MB");
      if (res.data.imgInfo.code === "SUCCESS") {
        console.table(res.data.imgInfo);
      }
      console.table(res.data.urls.url);
    }
  };

  const handleChangeImg = (e) => {
    setImageName(e.target.files[0].name);
    setImage(e.target.files[0]);

    // handleUpload(e.target.files[0]);
  };

  const handleInputNImages = (e) => {
    if (e.target.value >= 10) {
      setNImages(10);
      return;
    }
    if (e.target.value <= 1) {
      setNImages(1);
      return;
    }
    setNImages(parseInt(e.target.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="caja">
          <label
            htmlFor="img"
            className="label-img file-input"
            id="file-input-label-id"
          >
            <input
              type="file"
              id="img"
              accept=".png"
              name="img"
              onChange={handleChangeImg}
            />
          </label>
        </div>
        <div className="caja">
          <label className="label-img-name" id="file-name">
            {imageName}
          </label>
        </div>
        <div className="caja">
          <label className="label-number">
            Número de imágenes (1-10):
            <input
              type="number"
              name="nImages"
              min="1"
              max="10"
              value={nImages}
              onInput={handleInputNImages}
            />
          </label>
        </div>
        <div className="caja">
          <input type="submit" value="Crear" className="btn btn-primary" />
        </div>
      </form>
      <ImageTable />
    </>
  );
}
