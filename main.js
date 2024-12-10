const data = [
    {
        order: 1,
        infor: 'MO231 - Pomeranian Trắng',
        gender: 1,
        age: '02',
        price: '6.900.000'
    },
    {
        order: 2,
        infor: 'MO502 - Poodle Tiny Vàng',
        gender: 0,
        age: '02',
        price: '3.900.000'
    },
    {
        order: 3,
        infor: 'MO102 - Poodle Tiny Sepia',
        gender: 0,
        age: '02',
        price: '4.000.000'
    },
    {
        order: 4,
        infor: 'MO512 - Alaskan Malamute ',
        gender: 1,
        age: '02',
        price: '8.900.000'
    },
    {
        order: 5,
        infor: 'MO231 - Pembroke Corgi',
        gender: 1,
        age: '03',
        price: '6.500.000'
    },
    {
        order: 6,
        infor: 'MO502 - Pembroke Corgi',
        gender: 1,
        age: '02',
        price: '5.900.000'
    },
    {
        order: 7,
        infor: 'MO231 - Pomeranian Trắng',
        gender: 0,
        age: '02',
        price: '6.900.000'
    },
    {
        order: 8,
        infor: 'MO102 - Poodle Tiny',
        gender: 1,
        age: '03',
        price: '7.900.000'
    }
];
const data2 = [
    {
        order: 1,
        title: "Pomeranian là gì? Cách nhận biết chó Pomeranian",
        intro: "Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiế.."
    },
    {
        order: 2,
        title: "Chế độ ăn cho chó bạn cần biết",
        intro: "Việc chia khẩu phần ăn cho chó thoạt nghe có vẻ đơn giản nhưng có một số quy tắc bạn nên biết để chó cưng dễ dàng hấp thụ các chất.."
    },
    {
        order: 3,
        title: "Tại sao chó cắn phá đồ đạc và cách phòng ngừa hiệu quả",
        intro: "Chó cắn là hiện tượng phổ biến trong quá trình phát triển. Tuy nhiên, không ai muốn thấy đồ đạc, vật dụng quang trọng của mình bị chó cắn."
    }
];

const item = data.map((item) => {
    let genderShow = (item.gender)? 'Đực' : 'Cái';

    return `
        <ul class="temp2_list_item">
            <img src="../dog/dog${item.order}.png" alt="">
            <div class="temp2_content"> 
                <div class="name">
                    <strong>${item.infor}</strong>
                </div>
                <div class="gender">
                    Giống: <strong>${genderShow}</strong>
                </div>
                <div class="age">
                    Tuổi: <strong>${item.age} tháng</strong>
                </div>
                <div class="price">
                    <strong>${item.price} VND</strong>
                </div>
            </div>
        </ul>
    `;
});
document.querySelector('.temp2_list').innerHTML += item.join('');

const item2 = data2.map((item) => {
    return `
        <div class="list_item">
            <div class="temp4_img">
                <img src="../dog/dogs${item.order}.png" class="img_4">
            </div>
            <div class="temp4_content">
                <button class="box">
                    <strong style=" color: white">Kiến thức thú cưng</strong>
                </button>
                <div class="temp4_title">
                    <strong>${item.title}</strong>

                </div>
                <div class="temp4_intro">
                    <p>${item.intro}</p>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.temp4_list').innerHTML += item2.join('');
