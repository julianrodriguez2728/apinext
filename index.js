const express = require("express")
const app = express()


app.use(express.json())

app.listen(3001,()=>{
    console.log("listen to ", 3001)
})

const tecnology =[
    {
        id:0,
        category:"Keyboard",
        price:15000,
        name:"Keyboard Redragon Fizz Pro K616-RGB ",
        image:[
        "https://redragon.es/content/uploads/2022/04/K616-PNGHQ-1.png",
        "https://www.2io.mx/103722-home_default/teclado-mecanico-60-fizz-pro-k616-rgb-black-8900-0100-.jpg",
        "https://www.2io.mx/103723-home_default/teclado-mecanico-60-fizz-pro-k616-rgb-black-8900-0100-.jpg"
    ],
        color:"black",
        description:`The K616-RGB FIZZ PRO will ensure an ultra-fast response
        1ms in 2.4GHz wireless mode, 0 latency and 0 input lag.
        In addition, it allows connection via Bluetooth 5.0 with a
        transmission speed up to 2 Mbps, always keeping
        losses to a minimum.
        `,
        brand:"redragon"
    },
    {
        id:1,
        category:"Keyboard",
        price:15000,
        name:"Keyboard Redragon Fizz Pro K616-RGB ",
        image:["https://redragon.es/content/uploads/2023/07/K616-RGB-WG-PNGHQ-1.png","https://falabella.scene7.com/is/image/FalabellaPE/gsc_120850372_2826181_1?wid=800&hei=800&qlt=70","https://falabella.scene7.com/is/image/Falabella/gsc_119203461_2260459_4?wid=800&hei=800&qlt=70"],
        color:"white",
        description:`The K616-RGB FIZZ PRO will ensure an ultra-fast response
        1ms in 2.4GHz wireless mode, 0 latency and 0 input lag.
        In addition, it allows connection via Bluetooth 5.0 with a
        transmission speed up to 2 Mbps, always keeping
        losses to a minimum.
        `,
        brand:"redragon"
    },
    {
        id:2,
        category:"Keyboard",
        price:13500,
        name:"Keyboard Redragon Dark Avenger K568",
        image:["https://redragon.es/content/uploads/2021/04/DARK-AVENGER.png","https://aypcomputacion.com/wp-content/uploads/2022/02/tec21-0205d39b31109c56be16022679114921-1024-1024.jpg","https://s3-sa-east-1.amazonaws.com/saasargentina/aczir50fEeE6OD2XeupJ/imagen"],
        color:"black",
        description:`Its reduced size allows you to save space and provide a greater range of movement to the mouse while maintaining full functionality for the game. It also has a wide range of navigation functions and multimedia controls through the Fn key.`,
        brand:"redragon"
    },
    {
        id:3,
        category:"Keyboard",
        price:22000,
        name:"KeyBoard gamer Redragon Kumara K552 ",
        image:["https://redragon.es/content/uploads/2021/05/K552-KR-SPS-KUMARA-RAINBOW-SPAIN1.png","https://mexx-img-2019.s3.amazonaws.com/35357_1.jpeg","https://mexx-img-2019.s3.amazonaws.com/35357_2.jpeg"],
        color:"black",
        description:`The high quality of the Redragon Kumara K552, and its affordable price make it an ideal attraction for you to have fun in front of the screen. Its ergonomics, its non-slip base and its fast response time allow your favorite games to feel closer than ever, within reach of your hands.`,
        brand:"redragon"
    },
    {
        id:4,
        category:"Keyboard",
        price:32790,
        name:"Keyboard Alloy Origins Core",
        image:["https://res.cloudinary.com/dtw0xzty5/image/upload/v1689209803/tecladoFizz_cfwtw7.png","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_jp_3_angled_right_900x.jpg?v=1663701487","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_th_5_led_off_900x.jpg?v=1663701487"],
        color:"black",
        description:`HyperX Alloy Origins Core is an ultra-compact, rugged tenkeyless keyboard featuring custom HyperX mechanical switches that have been engineered to provide gamers with the best combination of performance, reliability, and style.`,
        brand:"hyperx"
    },
    {
        id:5,
        category:"Keyboard",
        price:56820,
        name:"HyperX Alloy MKW100 - Mechanical Gaming Keyboard ",
        image:["https://res.cloudinary.com/dtw0xzty5/image/upload/v1689213012/hyperxteclado2_nogabx.png","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_mkw100_65_english_us_3_angled_right_900x.jpg?v=1663701246","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_mkw100_65_english_us_5_led_off_900x.jpg?v=1663701246"],
        color:"black",
        description:`This US English QWERTY keyboard features TTC Linear Red switches that offer a fast and precise response, improving your performance in each game. In addition, its splash resistant design allows you to enjoy your favorite games without worrying about accidents with liquids.`,
        brand:"hyperx"
    },
    {
        id:6,
        category:"Keyboard",
        price:36820,
        name:"membrana Alloy Core RGB",
        image:["https://res.cloudinary.com/dtw0xzty5/image/upload/v1689213014/teclado3hperx_qnuyk9.png","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_core_rgb_2_jp_left_900x.jpg?v=1664011586","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_core_rgb_4_jp_side_900x.jpg?v=1664011586"],
        color:"black",
        description:`This US English QWERTY keyboard features TTC Linear Red switches that offer a fast and precise response, improving your performance in each game. In addition, its splash resistant design allows you to enjoy your favorite games without worrying about accidents with liquids.`,
        brand:"hyperx"
    },
    {
        id:7,
        category:"Keyboard",
        price:50000,
        name:"Alloy Origins al 60 % ",
        image:["https://cdn.discordapp.com/attachments/1128401978981109784/1128867190456725545/teclado4hx.png","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_60_us_2_angled_left_renamed_7_900x.jpg?v=1666377243","https://row.hyperx.com/cdn/shop/products/hyperx_alloy_origins_60_us_6_accessories_renamed_10_900x.jpg?v=1666377243"],
        color:"black",
        description:`Small format at 60%
        HyperX mechanical switches
        Double-layer PBT keycaps (black)
        Customizable with HyperX NGENUITY software`,
        brand:"hyperx"
    },
    {
        id:8,
        category:"Keyboard",
        price:58890,
        name:"PRO X Clicky mechanical",
        image:["https://logitechar.vtexassets.com/arquivos/ids/157519-800-800?v=637344875559930000&width=800&height=800&aspect=true","https://hard-digital.com.ar/public/files/Teclado%20Mecanico%20Logitech%20Pro%20X%20Clicky%20Switch%20Gx%20Blue/2.jpg","https://hard-digital.com.ar/public/files/Teclado%20Mecanico%20Logitech%20Pro%20X%20Clicky%20Switch%20Gx%20Blue/3.jpg"],
        color:"black",
        description:`Designed in collaboration with esports professionals for the highest levels of performance, compact design, and interchangeable user choice </br> Clicky Version`,
        brand:"logitech"
    },
    {
        id:9,
        category:"Keyboard",
        price:60890,
        name:"MX MECHANICAL",
        image:["https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-mechanical/gallery/mx-mechanical-keyboard-top-view-graphite-us.png?v=1","https://logitechar.vtexassets.com/arquivos/ids/158837-800-800?v=637922852990770000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158843-800-800?v=637922854885970000&width=800&height=800&aspect=true"],
        color:"gray",
        description:`Designed in collaboration with esports professionals for the highest levels of performance, compact design, and interchangeable user choice </br> Clicky Version`,
        brand:"logitech"
    },
    {
        id:10,
        category:"Keyboard",
        price:20890,
        name:"Logitech G PRO Edition League of Legends 2 mechanical keyboard",
        image:["https://logitechar.vtexassets.com/arquivos/ids/158338-800-800?v=637741502044200000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158339-800-800?v=637741502651470000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158341-800-800?v=637741503093070000&width=800&height=800&aspect=true"],
        color:"blue",
        description:`We coated our tournament-proven PRO keyboard in the iconic colors of League of Legends.`,
        brand:"logitech"
    },
    {
        id:11,
        category:"Keyboard",
        price:19890,
        name:"multi-device bluetooth keyboard k380",
        image:["https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/multi-keyboard-k380/gallery/k380-sand-gallery-1-us.png?v=1","https://logitechar.vtexassets.com/arquivos/ids/157332-800-800?v=637197231910830000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/157138-800-800?v=637064255998170000&width=800&height=800&aspect=true"],
        color:"beige",
        description:`Minimalist keyboard for computers, tablets and phones`,
        brand:"logitech"
    },
    {
        id:12,
        category:"Headphones",
        price:48999,
        name:"Headphones A10 Gen 2-Play Station ",
        image:["https://logitechar.vtexassets.com/arquivos/ids/158916-800-800?v=638018093471470000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158917-800-800?v=638018093613970000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158918-800-800?v=638018093759400000&width=800&height=800&aspect=true"],
        color:"black",
        description:`headset with microphone`,
        brand:"astro"  
    }
    ,{
        id:13,
        category:"Headphones",
        price:104200,
        name:"G435 LIGHTSPEED WIRELESS GAMING HEADSET",
        image:["https://logitechar.vtexassets.com/arquivos/ids/158137-1200-1200?v=637672209473970000&width=1200&height=1200&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158139-800-800?v=637672209775670000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/158141-800-800?v=637672210019430000&width=800&height=800&aspect=true"],
        color:"black",
        description:` Lightweight, built-in microphone, 18 hour battery, Dolby Atmos compatible, Bluetooth, PC, PS4, PS5, Mobile.`,
        brand:"logitech" 
    },
    {
        id:14,
        category:"Headphones",
        price:124200,
        name:"G733 WIRELESS GAMING HEADSET,",
        image:["https://logitechar.vtexassets.com/arquivos/ids/157594-1200-1200?v=637358692052400000&width=1200&height=1200&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/157595-800-800?v=637358692210400000&width=800&height=800&aspect=true"],
        color:"white",
        description:`Logitech G733 Wireless Gaming Headset with Suspension Headband, LIGHTSPEED, RGB LIGHTSYNC, Blue VO Microphone Technology! CE and PROG Audio Transducers`,
        brand:"logitech" 
    },
    {
        id:14,
        category:"Headphones",
        price:154200,
        name:"A10 HEADSET FOR PS4/PS5",
        image:["https://logitechar.vtexassets.com/arquivos/ids/156561-1200-1200?v=636973475504900000&width=1200&height=1200&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/156710-800-800?v=636973480034800000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/156942-800-800?v=636973494060500000&width=800&height=800&aspect=true"],
        color:"black",
        description:`Unparalleled audio. Unparalleled comfort and reliability. Meet the Astro A10 headset for PlayStation®`,
        brand:"astro"
    },
    {
        id:15,
        category:"Headphones",
        price:24200,
        name:"Alpha - Naruto Edition - Gaming Headset, Limited Naruto Edition",
        image:["https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_naruto_orange_4_detachable_900x.jpg?v=1688318386HyperX","https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_naruto_orange_3_front_900x.jpg?v=1688318386","https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_naruto_orange_6_accessories_900x.jpg?v=1688318386"],
        color:"black",
        description:`Alpha - Naruto Edition - Gaming Headset, Limited Naruto Edition`,
        brand:"hyperx"
    },
    {
        id:16,
        category:"Headphones",
        price:24200,
        name:"HyperX Cloud Alpha S - Gaming Headset",
        image:["https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_s_black_2_detachable_900x.jpg?v=1688318404","https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_s_black_4_front_900x.jpg?v=1688318404","https://hyperx.com/cdn/shop/files/hyperx_cloud_alpha_s_black_5_bottom_900x.jpg?v=1688318404"],
        color:"black",
        description:`  HyperX Cloud Alpha S-Gaming Headset`,
        brand:"hyperx"
    }, 
    {
        id:17,
        category:"Headphones",
        price:124200,
        name:"HyperX Cloud Flight - Wireless Gaming Headset",
        image:["https://hyperx.com/cdn/shop/files/hyperx_cloud_20flight_3_extended_900x.jpg?v=1689065039","https://hyperx.com/cdn/shop/files/hyperx_cloud_20flight_4_rotated_900x.jpg?v=1689065039","https://hyperx.com/cdn/shop/files/hyperx_cloud_20flight_5_acessories_900x.jpg?v=1689065039"],
        color:"black",
        description:`HyperX Cloud Flight - Wireless Gaming Headset`,
        brand:"hyperx"
    },
    {
        id:18,
        category:"Headphones",
        price:47200,
        name:"HyperX CloudX Stinger Core - Gaming Headset - Xbox",
        image:["https://hyperx.com/cdn/shop/files/hyperx_cloudx_stinger_core_2_main_extended_900x.jpg?v=1688317893","https://hyperx.com/cdn/shop/files/hyperx_cloudx_stinger_core_3_mic_up_900x.jpg?v=1688317893","https://hyperx.com/cdn/shop/files/hyperx_cloudx_stinger_core_6_front_900x.jpg?v=1688317893"],
        color:"black",
        description:`HyperX CloudX Stinger Core - Gaming Headset - Xbox`,
        brand:"hyperx"
    },
    {
        id:19,
        category:"Headphones",
        price:27200,
        name:"Redragon H510 Zeus-X RGB Pink Wired Gaming Headset",
        image:["https://www.redragonzone.com/cdn/shop/products/KawaiiHeadphones_2_450x450.png?v=1648802914","https://www.redragonzone.com/cdn/shop/products/KawaiiHeadphones_1_450x450.png?v=1648802914","https://www.redragonzone.com/cdn/shop/products/KawaiiHeadphones_3_450x450.png?v=1648802909"],
        color:"rose",
        description:`Multi Platforms Headphone - USB Powered for PC/PS4/NS`,
        brand:"redragon"
    },
    {
        id:20, 
        category:"Headphones",
        price:37900,
        name:"Redragon H230 Ajax RGB Wired Gaming Headset, Dynamic RGB Backlight",
        image:["https://www.redragonzone.com/cdn/shop/products/02_390ad28a-f4d7-4ff2-9708-fb5cacc8da6b_450x450.png?v=1621822547","https://www.redragonzone.com/cdn/shop/products/bestgamingheadsetunder50_450x450.png?v=1621822547","https://www.redragonzone.com/cdn/shop/products/rgbcomputergamingheadset_450x450.png?v=1621822548"],
        color:"black",
        description:`Redragon H230 Ajax RGB Wired Gaming Headset, Dynamic RGB Backlight`,
        brand:"redragon"
    },
    {
        id:21,
        category:"Headphones",
        price:10200,
        name:"Redragon ARES H120 GAMING HEADSET",
        image:["https://www.redragonzone.com/cdn/shop/products/H120-1_450x450.png?v=1558492783","https://www.redragonzone.com/cdn/shop/products/H120-2_450x450.png?v=1558492787","https://www.redragonzone.com/cdn/shop/products/H120-6_450x450.png?v=1558492825"],
        color:"black",
        description:`Redragon ARES H120 GAMING HEADSET`,
        brand:"redragon"
    },
    {
        id:22,
        category:"Mouse",
        price:7890,
        name:"Mouse G203",
        image:["https://logitechar.vtexassets.com/arquivos/ids/157541-800-800?v=637345254236100000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/157537-800-800?v=637345253571200000&width=800&height=800&aspect=true",
        "https://logitechar.vtexassets.com/arquivos/ids/157538-800-800?v=637345253763770000&width=800&height=800&aspect=true"],
        color:"lila",
        description:`Get the most out of your game time with the G203 gaming mouse, featuring LIGHTSYNC technology, a gaming sensor, and a classic 6-button layout.`,
        brand:"logitech"
    },
    {
        id:23,
        category:"Mouse",
        price:12200,
        name:"Logitech G PRO X SUPERLIGHT wireless gaming mouse",
        image:["https://logitechar.vtexassets.com/arquivos/ids/157828-800-800?v=637481517811030000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/157831-800-800?v=637481518824600000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/157834-800-800?v=637481519562100000&width=800&height=800&aspect=true"],
        color:"white",
        description:`The new favorite of the best esports professionals weighs less than 63 grams and glides with little friction.  PRO X SUPERLIGHT showcases our ZERØ OPPOSITION design technology, our aim to remove obstacles and create the purest possible connection between player and game.`,
        brand:"logitech"
    },
    {
        id:24,
        category:"Mouse",
        price:32200,
        name:"G502 X Plus Wireless RGB Gaming Mouse",
        image:["https://logitechar.vtexassets.com/arquivos/ids/159082-800-800?v=638198567820900000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/159083-800-800?v=638198568070200000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/159085-800-800?v=638198568872600000&width=800&height=800&aspect=true"],
        color:"white",
        description:`The new favorite of the best esports professionals weighs less than 63 grams and glides with little friction.  PRO X SUPERLIGHT showcases our ZERØ OPPOSITION design technology, our aim to remove obstacles and create the purest possible connection between player and game.`,
        brand:"logitech"
    },
    {
        id:25,
        category:"Mouse",
        price:32200,
        name:"G502 X Plus Wireless RGB Gaming Mouse",
        image:["https://logitechar.vtexassets.com/arquivos/ids/159066-800-800?v=638198543892570000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/159068-800-800?v=638198544933600000&width=800&height=800&aspect=true","https://logitechar.vtexassets.com/arquivos/ids/159070-800-800?v=638198545779130000&width=800&height=800&aspect=true"],
        color:"black",
        description:`The new favorite of the best esports professionals weighs less than 63 grams and glides with little friction.  PRO X SUPERLIGHT showcases our ZERØ OPPOSITION design technology, our aim to remove obstacles and create the purest possible connection between player and game.`,
        brand:"logitech"
    },
    {
        id:25,
        category:"Mouse",
        price:52200,
        name:"Redragon M913",
        image:["https://www.redragonzone.com/cdn/shop/files/M913-1_450x450.png?v=1686365181","https://th.bing.com/th/id/R.099d3bf547ae8ce1a810f5edad36da9b?rik=nTUrmaF2duaelg&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.e35f5e542df91efbc80d61393d4f5ac9?rik=XaiD5%2bmKq67D8A&pid=ImgRaw&r=0"],
        color:"black",
        description:`Impact Elite Wireless Gaming Mouse, 16000 DPI Wired/Wireless RGB Gamer`,
        brand:"redragon"
    },
    {
        id:26,
        category:"Mouse",
        price:12200,
        name:"Redragon M808-N Storm",
        image:["https://www.redragonzone.com/cdn/shop/products/honeycombmouse_1_450x450.png?v=1658310036 ","https://m.media-amazon.com/images/I/61lBQGpED1L.jpg","https://redragonshop.com/cdn/shop/products/honeycombmouse_2_1200x1200.png?v=1658303342"],
        color:"black",
        description:`Lightweight Gaming Mouse, Ultralight Honeycomb Shell - 12,400 DPI Optical Sensor`,
        brand:"redragon"
    },
    {
        id:27,
        category:"Mouse",
        price:42250,
        name:"Redragon M908 IMPACT MMO",
        image:["https://www.redragonzone.com/cdn/shop/products/M908_grande-1_450x450.png?v=1559726657 ","https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F561%2FELECTROHOGAR%2FM908-6_213213100789_5.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=f57e17af1f3178f664b868849db3931d","https://www.venex.com.ar/products_images/1577129129_impactm90817.jpg"],
        color:"black",
        description:`Gaming Mouse up to 12,400 DPI High Precision Mouse for PC`,
        brand:"redragon"
    }
]

app.get("/", (req,res)=>{
    res.send(tecnology)
})

app.get("/product/:id", (req,res)=>{
        const {id} = req.params
        const filtered = tecnology.filter(product=> product.id === +id)
        res.send(filtered) 
})

app.get("/categories", (req,res)=>{
    const {category} = req.body
    const filtered = tecnology.filter(product=> product.category === `${category}`)
    res.send(filtered) 
})

app.get("/colors", (req,res)=>{
    const {color} = req.body
    const filtered = tecnology.filter(product=> product.color === `${color}`)
    res.send(filtered) 
})

app.get("/brand", (req,res)=>{
    const {brand} = req.body
    const filtered = tecnology.filter(product=> product.brand === `${brand}`)
    res.send(filtered) 
})
