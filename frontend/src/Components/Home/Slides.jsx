
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../Constants/data";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const Slides = () => {
    return (
        <div>
            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                keyBoardControl={true}
                autoPlaySpeed={500}
                autoPlay={true}
                infinite={true}
                swipeable={false}
                draggable={false}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
                {bannerData.map((item, index) => (
                    <div key={index} className="block justify-center carousel-item cursor-pointer">
                        <img src={item.url} alt={item.title} className="w-[80%] h-[80%] py-4 rounded-2xl"/>
                        <p>{item.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slides;
