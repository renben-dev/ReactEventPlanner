import { createSlice } from "@reduxjs/toolkit";


export const addOnsSlice = createSlice({
    name: "addons",
    initialState: [
        [
            {
              img: "https://cdn.pixabay.com/photo/2016/03/16/21/23/microphone-1261793_1280.jpg",
              name: "Microphone",
              cost: 50,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
              name: "Projector",
              cost: 150,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2017/04/11/22/56/stage-2223130_960_720.jpg",
              name: "StageLighting",
              cost: 200,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2016/11/01/16/07/president-1788706_1280.jpg",
              name: "Podium",
              cost: 100,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2024/07/15/11/37/ai-generated-8896413_1280.jpg",
              name: "StageRiser",
              cost: 300,
              quantity: 0,
            },
           {
              img: "https://cdn.pixabay.com/photo/2020/06/01/04/47/ticket-booth-5245106_1280.png",
              name: "Booth",
              cost: 400,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2024/12/10/23/36/generated-9258826_960_720.png",
              name: "LoungeFurniture",
              cost: 350,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2021/11/06/16/56/meeting-point-6773800_1280.png",
              name: "Signage",
              cost: 80,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2013/03/29/13/38/contact-97574_1280.png",
              name: "NameBadge",
              cost: 5,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2012/04/11/17/19/router-29021_1280.png",
              name: "WiFiRouter",
              cost: 120,
              quantity: 0,
            },
            {
              img: "https://m.media-amazon.com/images/I/71OKzkhIs3L._AC_SL1500_.jpg",
              name: "ChargingStation",
              cost: 60,
              quantity: 0,
            },
            {
              img: "https://www.kioskgroup.com/cdn/shop/products/standalone-front-angle_800x.jpg?v=1622731942",
              name: "TabletKiosk",
              cost: 180,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2014/08/16/11/55/marquee-419284_960_720.jpg",
              name: "Tent",
              cost: 500,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2018/04/16/09/39/heat-3324060_1280.png",
              name: "Heater",
              cost: 70,
              quantity: 0,
            },
            {
              img: "https://www.norkan.com/Norkan_Store/images/Axxis%20PNG%20Blue.png",
              name: "PortableRestroom",
              cost: 150,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2016/03/31/15/17/aluminum-1293139_1280.png",
              name: "CrowdControlBarrier",
              cost: 40,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2012/04/26/14/08/handheld-42565_1280.png",
              name: "WalkieTalkie",
              cost: 30,
              quantity: 0,
            },
            {
              img: "https://iprobesolutions.com/img/DSC02197-cropped.jpg",
              name: "InterpreterBooth",
              cost: 400,
              quantity: 0,
            },
            {
              img: "https://cdn.pixabay.com/photo/2014/03/25/16/35/whiteboard-297484_1280.png",
              name: "Whiteboard",
              cost: 25,
              quantity: 0,
            }
          ]
          
    ],
    reducers: {
        incrementAddOnQuantity: (state, action) => {
            const item = state[action.payload];

            if(item) {
                item.quantity++;
            }
          },
          decrementAddOnQuantity: (state, action) => {
            const item = state[action.payload];

            if(item && item.quantity>0) {
                item.quantity--;
            }
          },
    }
});


export const { incrementAddOnQuantity, decrementAddOnQuantity } = addOnsSlice.actions;

export default addOnsSlice.reducer;