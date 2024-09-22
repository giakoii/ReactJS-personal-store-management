import React from 'react'
import slider1 from '../../image/mit.png'
import slider2 from '../../image/mit_ruot_do2.png'
import slider3 from '../../image/mit_ruot_do.png'
import slider4 from '../../image/mittrainon.png'
import slider5 from '../../image/yen_cam_tay.png'
import slider6 from '../../image/yen_hop.png'
import SliderComponent from "../../components/SliderComponent/SliderComponent";

const HomePage = () => {
    return <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 relative z-10">
            <div>
                <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose">
                        Vựa mít - yến Khoa
                    </h1>
                    <p className="text-2xl tracking-wide">
                        Chuyên thu mua các loại mít thái
                    </p>
                    <p className="text-gray-500">
                        Ngoài ra, cung cấp các loại yến sào dinh dưỡng, tinh khiết, mang lại giá trị sức khỏe tuyệt vời
                        cho người tiêu dùng.
                    </p>
                    <p>
                        Sản phẩm yến sào của chúng tôi không chỉ giúp tăng cường sức khỏe, làm đẹp da, mà còn hỗ trợ
                        phục hồi sức khỏe sau bệnh tật, tăng cường hệ miễn dịch và mang lại sự thư giãn, cải thiện giấc
                        ngủ. Đó là lý do vì sao yến sào trở thành món quà ý nghĩa dành cho gia đình và người thân.
                    </p>
                    <div className="justify-center flex md: justify-start">
                        <button className="primary-btn">
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
            {/*    image*/}
            <div className="flex justify-center items-center">
               <SliderComponent arrSliders={[slider1, slider2, slider3, slider4, slider6]} />
               </div>
        </div>

    </section>
}

export default HomePage;

