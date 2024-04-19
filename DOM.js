const listItem = [
    {
        name: "Điện thoại Iphone 15 Promax",
        sale: 14,
        oldprice: 34990000,
        price: 29990000,
        description: 'Thêm vào giỏ hàng',
        avatar: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/309816/TimerThumb/xiaomi-13t-pro-thumbkm.jpg'
    },
    {
        name: "Laptop Lenovo LOQ Gaming 15IAX9",
        price: 21490000,
        description: 'Thêm vào giỏ hàng',
        avatar: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg'
    },
    {
        name: "Đồng hồ ELIO 40 mm Nam EL051-01",
        price: 290000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'https://cdn.tgdd.vn/Products/Images/7264/231786/elio-el051-01-nam-2-1-org.jpg'
    },
    {
        name: "Tai nghe Bluetooth HAVIT H661BT",
        price: 275000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/311187/tai-nghe-bluetooth-chup-tai-havit-h661bt-thumb-600x600.jpg'
    },
    {
        name: "Tai nghe Bluetooth AirPods 3",
        price: 3990000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/290053/tai-nghe-bluetooth-airpods-3-lightning-charge-apple-mpny3-trang-thumb1-600x6001.-600x600.jpeg'
    },
    {
        name: "Chuột Bluetooth Silent Logitech M240",
        price: 340000,
        description: `Thêm vào giỏ hàng`,
        avatar: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/86/311113/chuot-bluetooth-silent-logitech-m240-thumb-600x600.jpg'
    },


];

const listItemEl = document.getElementById("list-item");
listItemEl.style.display = "flex";
listItemEl.style.justifyContent = "center";
listItemEl.style.backgroundColor = "rgb(116 116 116)";

listItem.forEach((el, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.flex = "0 0 calc(33.33% - 30px)";
    item.style.border = "1px solid black";
    item.style.padding = "10px";
    item.style.margin = "15px";
    item.style.maxWidth = "200px";
    item.style.height = "400px";
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.backgroundColor = "white";
    item.style.borderTopLeftRadius = "20px";
    item.style.borderBottomRightRadius = "20px";
    item.style.transition = "transform 0.3s ease";
    item.style.marginBottom = "20px";

    item.addEventListener('mouseenter', function() {
        this.style.transform = "scale(1.05)";
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });

    const avatar = document.createElement('img');
    avatar.src = el.avatar;
    avatar.style.maxWidth = "200px";
    avatar.style.maxHeight = "200px";
    avatar.style.display = "block";
    avatar.style.marginBottom = "10px";

    const h3 = document.createElement('h3');
    h3.textContent = el.name;
    h3.style.textAlign = "center";
    h3.style.height = "30px";

    const priceWrapper = document.createElement('div');
    priceWrapper.style.display = "flex";
    priceWrapper.style.alignItems = "center";
    const priceText = document.createElement('price');
    priceText.textContent = `${el.price.toLocaleString()}đ`;
    priceText.style.fontSize = "20px";
    priceText.style.color = "red";
    priceText.style.fontWeight="bold"
    priceWrapper.appendChild(priceText);

    if (el.sale!== undefined) {
        const saleText = document.createElement('sale');
        saleText.textContent = `-${el.sale.toLocaleString()}%`;
        saleText.style.backgroundColor="red";
        saleText.style.borderRadius="5px";
        saleText.style.fontWeight="bold"
        saleText.style.marginLeft="10px";
        saleText.style.padding="7px"
        saleText.style.color = "white";
        priceWrapper.appendChild(saleText);
    }

    const d = document.createElement('button');
    d.textContent = el.description;
    d.style.width = "100%";
    d.style.textAlign = "center";
    d.style.padding = "10px";
    d.style.border = "none";
    d.style.borderRadius = "5px";
    d.style.marginTop = "auto"; // push button to bottom
    d.style.backgroundColor = "rgb(43 130 82)";
    d.style.color = "white";
    d.style.cursor = "pointer";

    item.appendChild(avatar);
    item.appendChild(h3);
    item.appendChild(priceWrapper);
    if (el.oldprice!== undefined) {
        const oldpriceText = document.createElement('del');
        oldpriceText.textContent = `${el.oldprice.toLocaleString()}đ`;
        item.appendChild(oldpriceText);
    }
    item.appendChild(d);
    listItemEl.appendChild(item);
});