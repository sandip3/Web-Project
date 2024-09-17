// show real Product 

var products = [
    {
        Name: "Chiar",
        headline: "White and black chair",
        img: "https://images.unsplash.com/photo-1581348223832-0e9ffb7ddcb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWFyfGVufDB8fDB8fHww",
        price: 5000
    },
    {
        Name: "Sofa (Green couch sofa)",
        headline: "Cool green couch sofa",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80000
    }, {
        Name: "Table and Chair",
        headline: "Glass Table and Chair",
        img: "https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40000
    },
    {
        Name: "Cool Lemp",
        headline: "A lamp that is on a wall",
        img: "https://plus.unsplash.com/premium_photo-1668005190411-1042cd38522e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000
    },
    {
        Name: "Black Chiar",
        headline: "Black Chiar",
        img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 10000
    }
];

var popular = [

    {
        Name: "Shofa ",
        headline: "sofa chair",
        img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70000
    },
    {
        Name: "Black Chiar",
        headline: "Black Chiar",
        img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 10000
    }
];

var cart = [];

function addProduct() {
    var clutter = '';
    products.forEach(function (obj, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${obj.img}" alt="${obj.Name}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.Name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="text-wrap font-semibold opacity-20">${obj.headline}</h3>
                            <h4 class="font-semibold mt-2">₹ ${obj.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class=" add ri-add-line"></i>
                        </button>
                    </div>
                </div>
            </div>`;

    })

    document.querySelector('.products').innerHTML = clutter;

}

function addPopularProducts() {
    var clutter = '';
    popular.forEach(function (obj) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${obj.img}"
                            alt="${obj.Name}">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${obj.Name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">₹ ${obj.price}</h4>
                    </div>
                </div>`;
    });

    document.querySelector('.populars').innerHTML = clutter;

}

function addItemCart() {
    var cluster = '';

    document.querySelector('.products').addEventListener('click', function (data) {
        if (data.target.classList.contains('add')) {
            cart.push(products[data.target.dataset.index])
        }
    })
}

function ShowCart() {
    document.querySelector(".carticon").addEventListener('click', function (data) {
        document.querySelector(".cartexpnd").style.display="block";

        var cluster = '';
        cart.forEach(function (obj,index) { 

            cluster += `<div class = "flex gap-2 bg-white rounded-lg my-3">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden">
                <img class="w-full h-full object-cover" src="${obj.img}"/>

            </div>
            <div>
                <h3 class="font-semibold">${obj.Name}</h3>
                <h5 class="text-sm font-semibold opacity-80">₹  ${obj.price}</h3>
            </div>
            </div>`;

        })
        document.querySelector(".cartexpnd").innerHTML = cluster;

    });
}

ShowCart()
addProduct()
addPopularProducts()
addItemCart()

// show real popular Product 
// on click of product add button add it to cart
