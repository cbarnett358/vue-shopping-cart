const { ref } = Vue


const app = Vue.createApp({

    setup () {
            let item = Vue.ref([]);
            let shop = Vue.ref([]);
            let cart = Vue.ref([]);
            let total = Vue.ref(0.00);
            const dialog = ref(false)
            const position = ref('top')
            shop.value = [{
                "name": "Heckin' Canned",
                "cost": 18.00,
                "qty": 1,
                "description":"Tasty canned dog food that your little buddy will keep coming back to!",
                "inception": ref(false),
                "secondDialog": ref(false),
                "id": 1
            },
                {
                    "name": "Heckin' Kibble",
                    "cost": 34.00,
                    "qty": 1,
                    "description": "Our Heckin' Delicious Kibble made with real lamb and sweet potato!",
                    "inception": ref(false),
                    "secondDialog": ref(false),
                    "id": 2
                },
                {
                    "name": "Heckin' Treats",
                    "cost": 10.00,
                    "qty": 1,
                    "description": "Heckin' Treats your dog will love!",
                    "inception": ref(false),
                    "secondDialog": ref(false),
                    "id": 3
                },

                {"name":"Heckin' Bone",
                    "id":4,
                    "cost":13.00,
                    "qty":1,
                    "image": 'https://cbarnett4.bitlampsites.com/js2/heckinimages/heckincan.png',
                    "description":"A Heckin' Big Bone.",
                    "inception": ref(false),
                    "secondDialog": ref(false),



                }];

            function addToCart(item) {
                let newItem = {...item};
                let targ = cart.value.find(x=>{ return x.id == newItem.id });


                if(targ) {
                    cart.value.map((x)=>{
                        if(x.id == newItem.id) {
                            x.qty++;
                            x.cost += newItem.cost;
                            return x;
                        }
                    });
                }
                else {
                    cart.value.push(newItem);
                }

                //checks if item is in the cart

                updateCost();
            }

            function removeFromCart(item) {
                cart.value = cart.value.filter((x) => { if(x !== item) return item});
                updateCost();
            }

            function updateCost() {
                let sum = 0;
                cart.value.forEach(x => {
                    sum += x.cost;
                });
                total.value = sum;
            }



            return {
                item,
                shop,
                cart,
                addToCart,
                removeFromCart,
                total,
                drawerRight: ref(false),
                inception: ref(false),
                medium: ref(false),
                dialog,
                position,

                open (pos) {
                    position.value = pos
                    dialog.value = true
                }

            }
        }
    })
