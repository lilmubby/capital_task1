import "./Image.css"
import uploadImg from "../../assets/image 308.png"
import { useAppDispatch, useAppSelector } from '../../hooks'
import type { RootState } from '../../store'
import { uploadImage, deleteImage } from '../../store/imageRdeucer'

const Image = () => {

  const dispatch = useAppDispatch()
  const { source } = useAppSelector((state: RootState) => state.imageReducer)

  const imageUploadHandler = (e: any) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(uploadImage(reader.result))
    }
  }
  const deleteImageHandler = () => {
    dispatch(deleteImage())
  }

  return (
    <div className='img_container'>
      {
        source ? (
          <div className="source_wrapper">
            <img src={source} alt='' />
            <a onClick={deleteImageHandler}>
              Delete & re-upload
            </a>
          </div>
        ) :
          <>
            <div className="img_heading">
              <h3>
                Upload cover image
              </h3>
            </div>
            <div className="upload_container">
              <input
                type="file"
                name="image"
                id="name"
                accept="image/jpeg,image/png,application/pdf"
                onChange={(e) => imageUploadHandler(e)}
              />
              <img src={uploadImg} alt="" />
              <label htmlFor="image">
                Upload cover image
              </label>
              <span>
                16:9 ratio is recommended. Max image size 1mb
              </span>
            </div>
          </>
      }
    </div>
  )
}

export default Image