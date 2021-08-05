import App from './component/App.js';
import { attach } from "./js/store.js";

attach(document.getElementById('root'), App)
console.log(attach);


/*
1. Them bot san pham -> OK
2. Thanh toan -> OK

3. Dang nhap -> CHUA XONG -- Khi submit thi wed no render luon, khoong giua duoc du lieu trong input
4. Xu li Slide auto -> 
        CHUA smooth duoc
        CHUA co y tuong de auto

*/

