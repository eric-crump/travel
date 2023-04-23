import "./css/Guides.css";

function Guides(){
    return(
        <div className="container-fluid bg-dark text-light mb-5">
            <p className="display-4 text-center text-white mb-5 pt-5">Food & Drink</p>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-6 image-tile d-flex" style={{backgroundImage: `url("https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/bltbc3c87f08f8e6167/644521550de4a8509dbb8a22/napa.png")`}}>
                        <p className="mb-1 text-white mt-auto image-label">The Wine Tours of Napa Valley</p>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col image-tile d-flex image-tile-sm mx-3" style={({backgroundImage : `url("https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/blt9f30a1e22fd452cf/64452357398bc14b3cffe54b/pizza.png")`})}>
                                <p className="mb-1 mt-auto image-label">Experience Neopolitan Pizza</p>
                            </div>
                            <div className="col image-tile d-flex image-tile-sm" style={({backgroundImage : `url("https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/blt2887cfe564d1e73f/64452611d0a4771107c6b985/thai.png")`})}>
                                <p className="mb-1 mt-auto image-label">Must Try Dishes of Thailand</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col image-tile d-flex image-tile-sm mx-3" style={({backgroundImage : `url("https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/blt4fa9d03ed414880d/644529027f34014b36bee26f/dubai.png")`})}>
                                <p className="mb-1 mt-auto image-label">Discover Dubai Street Food</p>
                            </div>
                            <div className="col image-tile d-flex image-tile-sm" style={({backgroundImage : `url("https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/bltf5cd1cdcff2089da/64452a8a3543ed4f22c623aa/south_africa.png")`})}>
                                <p className="mb-1 mt-auto image-label">12 Must-Try South African Dishes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guides;