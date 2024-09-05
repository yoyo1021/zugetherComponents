export function ArticleModal({closeModal}) {
    return (
        <>
            <div className="modal fade" id='articleModal' data-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="btn-close" aria-label="Close" 
                                onClick={closeModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                        

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}