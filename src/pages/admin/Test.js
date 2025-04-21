import { useState, useRef, useEffect } from "react"
import { useController, useForm } from "react-hook-form";

export default function Test() {
    const [photo, setPhoto] = useState();
    const fileInputRef = useRef(null);
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });
    const { field } = useController({
        name: "articlePhoto",
        control,
        rules: { required: '請上傳圖片' },
    });

    useEffect(() => {
        console.log(field.ref)
    }, []);

    const addPhoto = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    }

    const handleDeletePhoto = () => {
        setPhoto("");
    }

    const onSubmit = () => {
        console.log(1)
    }

    return (
        <>
            <div className='p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <h3 className="text-center mb-3">上傳文章圖片</h3>
                        <div className="mb-3">
                            <div className="mb-4 px-3">
                                <div className="position-relative" >
                                    {photo ? (<>
                                        <img src={photo} alt="" className="object-cover articlePhoto w-100" style={{ height: "300px" }} />
                                        <button type="button" className="btn btn-danger rounded-circle btn-delete position-absolute top-0 start-100 translate-middle"
                                            style={{ width: "40px", height: "40px" }}
                                            onClick={handleDeletePhoto}
                                        ><i className="bi bi-x" style={{ fontSize: "16px" }}></i></button></>) : (<></>)}
                                </div>
                            </div>

                            <input type="file" accept="image/*" ref={field.ref} id="articlePhoto" name="articlePhoto" multiple="multiple"
                                className={`d-none ${errors["articlePhoto"] && 'is-invalid'}`}
                                {...register("articlePhoto", {
                                    required: '請上傳圖片'
                                })}
                                onChange={(e) => { addPhoto(e); }}
                            />
                            <label type="button" htmlFor="articlePhoto" className="text-center py-5 w-100 mb-3 rounded" style={{ border: "1px dashed gray" }}>
                                <i className="fa fa-plus text-light" aria-hidden="true" style={{ fontSize: '50px' }}></i>
                                <p className="text-light">新增文章圖片</p>
                            </label>
                            {errors["articlePhoto"] && (
                                <div className="invalid-feedback">{errors["articlePhoto"]?.message}</div>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">送出</button>
                </form>

            </div>
        </>
    )
}