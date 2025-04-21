import { useState, useEffect, useRef, useMemo } from "react"
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../Input/Input";
import Alert from "../../Alert/Alert";
import axios from "axios";
import Loading from "../../Loading/Loading";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function ArticleModal({ closeModal, type, tempArticle, getArticles }) {
    const [data, setData] = useState({
        title: "",
        content: "",
        photo: "",
        enabled: true
    });
    const [alert, setAlert] = useState({
        color: "",
        msg: "",
        status: false
    })
    const [photo, setPhoto] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef(null);
    const fileLimitMsg = useRef(null);
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    useEffect(() => {
        if (type === "create") {
            fileInputRef.current.value = "";
            setPhoto("");
            const defaultData = {
                title: "",
                content: "",
                photo: "",
                enabled: true,
              };
              setData(defaultData);
              reset(defaultData);
        } else if (type === "edit") {
            setData(tempArticle);
            setPhoto(tempArticle.photo);
            reset(tempArticle);
        }
    }, [type, tempArticle]);

    

    const handleDeletePhoto = () => {
        setPhoto("");
        fileInputRef.current.value = "";
    };

    const modules = useMemo(() => ({
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            [{ font: [] }],
            [{ 'color': [] }, { 'background': [] }],
            [
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "link",
                { align: [] },
            ],

        ]
    }), []);


    const handleChange = (e) => {
        const { name, value, checked, files } = e.target;
        if (name == "enabled") {
            setData({
                ...data,
                [name]: checked
            })
        } else if (name == "articlePhoto") {
            const file = files[0];
            const maxSize = 2 * 1024 * 1024;
            if (file.size > maxSize) {
                fileInputRef.current.value = "";
                setPhoto("");
                //照片大小超過限制，顯示文字
                fileLimitMsg.current.classList.remove("d-none");       
                //console.log("超過大小");
            } else {
                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result;
                    setPhoto(result);
                    const base64String = result.split(',')[1]
                    setData({ ...data, photo: base64String });
                };
                fileLimitMsg.current.classList.add("d-none");
                reader.readAsDataURL(file);
            }
        } else {
            setData({ ...data, [name]: value })
        }

    }

    const onSubmit = () => {
        if (type === "create") {
            //console.log("create", data);
            try {
                setIsLoading(true);
                axios.post("https://localhost:7095/api/articles", data).then((res) => {
                    //console.log(res.data.message);
                    setAlert({
                        color: "success",
                        msg: res.data.message,
                        status: true
                    })
                    getArticles();
                    setTimeout(() => {
                        setAlert({
                            ...alert,
                            status: false
                        })
                    }, 2000);
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err)
                    setIsLoading(false);
                });
                
            } catch (error) {
                console.log(error)
            }
        } else {
            const updateData = { ...data };
            if (photo === tempArticle.photo) {
                //未更新照片，沿用舊的照片去除base64照片去除base64
                updateData.photo = updateData.photo.split(',')[1]
            } else {
                //更新照片
                updateData.photo = photo.split(',')[1]
            }
            //console.log("update", updateData);
            
            try {
                setIsLoading(true);
                axios.put(`https://localhost:7095/api/articles/${data.articleId}`, updateData).then((res) => {
                    //console.log(res.data.message);
                    setAlert({
                        color: "success",
                        msg: res.data.message,
                        status: true
                    })
                    getArticles();
                    setTimeout(() => {
                        setAlert({
                            ...alert,
                            status: false
                        })
                    }, 2000);
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err);
                    setIsLoading(false)
                });

            } catch (error) {
                console.log(error)
            }
            
        }
        closeModal();
    }
    return (
        <>
            <Loading isLoading={isLoading} />
            <Alert alertTxt={alert.msg} color={alert.color} status={alert.status} />
            <div className="modal fade" id='articleModal' data-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5" >{type === 'create' ? '建立新文章' : `編輯文章`}</h1>
                            <button type="button" className="btn-close" aria-label="Close"
                                onClick={() => { closeModal(); reset() }}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    type='text'
                                    id='title'
                                    lableName='文章標題'
                                    placeholder='請輸入文章標題'
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        required: '請輸入文章標題'
                                    }}
                                    //value={data.title || ''}
                                    onChange={handleChange}
                                ></Input>
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">文章內容</label>
                                    {/* <textarea className="form-control" name="content" id="content" value={data.content || ''}
                                        onChange={handleChange}
                                    ></textarea> */}
                                    <Controller
                                        name="content"
                                        control={control}
                                        defaultValue={data.content} // 初始值判斷  
                                        render={({ field }) => (
                                            <ReactQuill theme="snow" modules={modules} value={data.content}  
                                                onChange={                                    
                                                    (content) => {setData({...data,content:content});
                                                    field.onChange(content)}
                                                }
                                            />
                                        )}
                                    />
                                </div>
                                <div className="mb-3">
                                    <h3 className="text-center mb-3">上傳文章圖片</h3>
                                    <div className="mb-3">
                                        <div className="mb-4 px-3">
                                            <div className="position-relative" >
                                                {photo ? (<>
                                                    <img src={photo} alt="" className="object-cover articlePhoto w-100" style={{ height: "300px" }} />
                                                    <button type="button" className="btn rounded-circle btn-delete position-absolute top-0 start-100 translate-middle"
                                                        //style={{ width: "40px", height: "40px" }}
                                                        onClick={handleDeletePhoto}
                                                    >
                                                        <i className="bi bi-x-circle-fill text-danger fs-3"></i>
                                                    </button>
                                                </>) : (
                                                    <>
                                                        <label type="button" htmlFor="articlePhoto" className="text-center py-5 w-100 rounded" style={{ border: "1px dashed gray" }}>
                                                            <i className="fa fa-plus text-light" aria-hidden="true" style={{ fontSize: '50px' }}></i>
                                                            <p className="text-light">新增文章圖片</p>
                                                        </label>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <input type="file" accept="image/*" id="articlePhoto" name="articlePhoto"
                                            ref={(e) => {
                                                fileInputRef.current = e;
                                                //register("articlePhoto").ref(e);
                                                register("articlePhoto", { required: type === "create" || !tempArticle.photo ? '請上傳圖片' : false }).ref(e);
                                            }}
                                            className={`d-none ${errors["articlePhoto"] && 'is-invalid'}`}
                                            onChange={handleChange}
                                        />

                                        {errors["articlePhoto"] && (
                                            <div className="invalid-feedback">{errors["articlePhoto"]?.message}</div>
                                        )}
                                        <small>最大檔案大小：2MB</small>
                                        <small className="ms-2 text-danger d-none" ref={fileLimitMsg}>** 圖片大小超過2MB，請從新上傳照片**</small>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className='form-check-label' htmlFor='enabled'>
                                        <input
                                            className='form-check-input me-2'
                                            type='checkbox'
                                            id='enabled'
                                            name='enabled'
                                            checked={Boolean(data.enabled)}
                                            onChange={handleChange}
                                        />
                                        是否上架
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary">送出</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}