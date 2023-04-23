import "./css/HeaderRegion.css";

function HeaderRegion(props){
    let image1, image2, image3, label1, label2, label3, desc;

    if(props.region == "North America"){
        image1 = "https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/bltaf65d14eb319cb66/644422d7df452f0942b2c3de/liberty.png"
        image2 = "https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/bltaf982d7ab1e45a68/64442a30398bc14b3cffe504/canada.png";
        image3 = "https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/bltc1d58682c5c1bc78/64442bedc5646c7d86ea6b00/mexico.png";
        desc = "Traveling in North America can be a thrilling experience, with diverse landscapes and cultures to explore. From the towering mountains and vast forests of Canada to the sun-kissed beaches and bustling cities of the United States, there is no shortage of activities";
        label1 = "USA";
        label2 = "Canada";
        label3 = "Mexico";
    }
    else if(props.region == "Europe"){
        image1 = "https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/bltcc1b49a5d2384504/64443603c5646c7d86ea6b10/paris.png";
        image2 = "https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/blt513d6421de6e9c41/644436e07fbb1e0c982fc6e5/amsterdam.png";
        image3 = "https://images.contentstack.io/v3/assets/blt07ba89b1c6044a17/blt84dc01b5bb5e9f68/644437c8bf65b70c99bd9f5c/rome.png";
        desc = "Traveling in Europe offers a diverse range of destinations, cultures, and cuisines. From historic cities to natural landscapes, there's something for everyone. With endless opportunities to explore by foot or train, Europe is a melting pot of languages, traditions, customs. Indulge in fine dining, art, architecture, or simply soak up the vibrant city energy.";
        label1 = "France";
        label2 = "Netherlands";
        label3 = "Italy";
    }
    else if(props.region == "Africa"){
        image1 = "";
        image2 = "";
        image3 = "";
        desc = "";
        label1 = "";
        label2 = "";
        label3 = "";
    }

     return(
        <div className="mt-2 ms-3">
            <h4>{props.region}</h4>
            <div className="hstack border-bottom mt-3">
                <div className="text-center me-3">
                    <img height="120" width="120" className="border border-1 border-light-subtle" src={image1} />
                    <p className="img-label mt-1">{label1}</p>
                </div>
                <div className=" text-center me-3">
                    <img height="120" width="120" className="border border-1 border-light-subtle" src={image2} />
                    <p className="img-label mt-1">{label2}</p>
                </div>
                <div className=" text-center">
                    <img height="120" width="120" className="border border-1 border-light-subtle" src={image3} />
                    <p className="img-label mt-1">{label3}</p>
                </div>
                <div className="d-flex h-100">
                <p className="ms-3 region-description">{desc}</p>
                </div>
                
            </div>
            <p className="mt-2 mb-0">All Destinations {'>>'}</p>
        </div>
    )
}

export default HeaderRegion;