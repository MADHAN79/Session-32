import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from './redux/cartSlice';
import Cart from './components/Cart';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const products = [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFESJpfIlU7uO7dB9-9o30KHuSdXXnw0aE2rVz-kZDDLr34Bv5AkiJFes&s=10",
      },
      {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBKeZqYZN4Tx5FVPylHkKTwU73hdlk2UW8g70TdFdA4shBWRJTVD1Bv3B9f48v9bU3g9OvywG1npOeXhRFRm4RNZyoFtvRAe5wLO-Zb_nr3Wu41wqX8O3Y&usqp=CAc",
      },
      {
        id: 3,
        title: "SamsungUniverse9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC58rgBop8gsmuiGyJMvEIWFyfuTU81ug3GUI9wfss8w&s",
      },
      {
        id: 4,
        title: "OPPO F19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        thumbnail: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2UK1b5765xyavMscwT3eAw9BQLl5xsthSabMRZxjiVVjkDz0E",
      },
      {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        thumbnail: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30-pro/P30Pro_skyblue.png",
      }
    ];

    dispatch(setCartItems(products));
  }, [dispatch]);

  return (
    <div className="App">
      <Cart />
    </div>
  );
};

export default App;
