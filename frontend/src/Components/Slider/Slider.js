import ImageSlider from "./ImageSlider";

const Slider = () => {
    const images = ['https://tse3.mm.bing.net/th?id=OIP.FsuQmAJ5-B9hr1hlhT7k1QHaEK&pid=Api&P=0&h=220'
    ,'https://tse2.mm.bing.net/th?id=OIP.DDKx4zKxGy4fOCJUSsqHEgHaEK&pid=Api&P=0&h=220'
    ,'https://tse4.mm.bing.net/th?id=OIP.5EZRHGR0LgL2IWcQ511TkQHaF5&pid=Api&P=0&h=220'];
  
    return (
      <div>
        <ImageSlider images={images} />
      </div>
    );
  };
  
  export default Slider;
  