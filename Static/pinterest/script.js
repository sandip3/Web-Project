var arr = [
    {
        name: "a person using a laptop computer on a table",
        img: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "a red building sitting on the side of a body of water",
        img: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "an empty train car with stairs leading-up to it",
        img: "https://images.unsplash.com/photo-1724768061345-65c3111f7acb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "a person sitting at a table with a laptop and a mouse",
        img: "https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "a road with trees on either side",
        img: "https://plus.unsplash.com/premium_photo-1669842613532-1f0947aa6fa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "A large body of water next to a rocky cliff",
        img: "https://plus.unsplash.com/premium_photo-1724765852136-254de61a0a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "high-rise buildings at nighttime",
        img: "https://images.unsplash.com/photo-1535391879778-3bae11d29a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "white and brown city buildings during daytime",
        img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
                        <img src="${obj.img}" alt="${obj.name}">
                        <div class="caption"></div>
                    </div>`;
    })
    document.querySelector(".container").innerHTML = clutter;
}



function handleSearch() {

    var searchInput = document.querySelector('#searchinput');

    searchInput.addEventListener('focus', function () {
        document.querySelector('.overlay').style.display = "block";
        // document.querySelector('.overlay').classList.remove('hidden');
        // document.querySelector('.overlay').classList.add('block');

        document.querySelector('.searchdata').style.display = 'block';
    })

    searchInput.addEventListener('blur', function () {
        document.querySelector('.overlay').style.display = "none";
        // document.querySelector('.overlay').classList.remove('block');
        // document.querySelector('.overlay').classList.add('none');

        document.querySelector('.searchdata').style.display = 'none';

    })

    searchInput.addEventListener('input', function () {
        // if (searchInput.value === "") {
        //     document.querySelector('.searchdata').style.display = 'none';
        // }


        const input = searchInput.value.toLowerCase();
        // const resultList = document.getElementById('resultList');
        // resultList.innerHTML = ''; // Clear previous results

        const filteredArray = arr.filter(item => item.name.toLowerCase().includes(input));

        var clutter = '';
        filteredArray.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mt-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`
        })
        document.querySelector('.searchdata').innerHTML = clutter;

    })

}

showTheCards();
handleSearch();
