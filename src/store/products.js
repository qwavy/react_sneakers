import { makeAutoObservable } from "mobx";

import iphone_13 from '../images/products/iphone-13.png'

import smart_watch from '../images/products/smart-watch.png'
import samsung_galaxy_tab_8 from '../images/products/samsung-galaxy-tab-8.png'
import inalsa_air_fryer_fry from '../images/products/inalsa-air-fryer-fry.png'
import koda_mini_shot_yellow from '../images/products/Koda-Mini-Shot-Yellow.png'
import oneplus_bullets_z2_bluetooth from '../images/products/Oneplus-Bullets Z2-Bluetooth.png'
import uhud_crafts_beautiful_antique from '../images/products/UHUD-CRAFTS Beautiful-Antique.png'
import sketch_book from '../images/products/sketch-book.png'
import sakura_pigma_micron_pigment from '../images/products/Sakura-Pigma Micron-Pigment Fineliner-Pens.png'
import pcs_artist_paint_brush from '../images/products/15 Pcs Artist Paint Brush Set Holder Acrylic.png'
import hoodie from '../images/products/hoodie.png'
import cap from '../images/products/cap.png'
import pullover from '../images/products/pullover.png'
import table from '../images/products/table.png'
import single_seater from '../images/products/single-seater.png'
import tea_table from '../images/products/tea_table.png'
import sofa from '../images/products/sofa.png'
import adidas_shoes from '../images/products/adidas_shoes.jpg'

class Products {
    constructor(){
        makeAutoObservable(this)
    }
    products = [
        {id:1,title:"Apple iphone 13 (1 tb) - green",price:749,description:"As part of our efforts to reach carbon neutrality by 2030, iPhone 13 and iPhone 13 Pro do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports charging and is compatible with USB-C power adapters and computer ports.",category:"technique",image:iphone_13,rating:{rate:4.8,count:49}, favourite:false,  isCart:false,discount:5},
        {id:2,title:"New Fastrack Reflex Play|AMOLED Display",price:99,description:"[Large AMOLED Display] An immersive 1.3-inch AMOLED display that brings an awesome optical quality. Case Length(6H-12H) 44.5 mm. Case Width(3H-9H) 44.5 mm;[Built-in Games] Built-in games for the player in you.",category:"technique",image:smart_watch,rating:{rate:4.6,count:89}, favourite:false, isCart:false, discount:15},
        {id:3,title:"Samsung Galaxy Tab S8+ - Wifi Only, Graphite",price:799,description:"More than just space. The largest Samsung Galaxy Tab S is designed so you can create like a pro. Shoot with our first ultra wide front camera in a tablet and edit on the largest screen in the Samsung Galaxy Tab S. Get it all in a graphite finish that goes with everything.3",category:"technique",image:samsung_galaxy_tab_8,rating:{rate:4.2,count:66}, favourite:false,  isCart:false,discount:25},
        {id:4,title:"Inalsa Air Fryer Fry-Light-1400W",price:59,description:"Fulfil Instant Cravings, with 1400w of power, this air fryer heats up in 2-3 minutes and cooks food faster than a conventional oven so you can save money at the same time as cutting down the calories",category:"technique",image:inalsa_air_fryer_fry,rating:{rate:4.3,count:33}, favourite:false, isCart:false, discount:15},
        {id:5,title:"Kodak Mini Shot 3 Retro - Yellow, Bluetooth",price:99,description:"INSTANT CAMERA + PHOTO PRINTER - After taking fabulous shots with your KODAK Mini Shot 3 Retro, you have the choice to print or cancel, unlike other polaroid cameras. This instant camera can also connect to any mobile device through Bluetooth to print straight from the photo gallery",category:"technique",image:koda_mini_shot_yellow,rating:{rate:4.8,count:44},favourite:false , isCart:false,discount:10},
        {id:6,title:"Oneplus Bullets Z2 Bluetooth Wireless",price:119,description:"A quick 10-minute charge delivers up to 20 hours of immersive audio playback.The flagship-level battery life delivers up to 30 hours of non-stop music on a single charge.",category:"technique",image:oneplus_bullets_z2_bluetooth,rating:{rate:4.3,count:61}, favourite:false, discount:45},
        {id:7,title:"UHUD CRAFTS Beautiful Antique Wooden",price:7,description:"Antique Foldable table, easy to carry anywhere. A perfect gift item for you.This multipurpose table can be used for any showpiece on it , plant stand and more.",category:"furniture",image:uhud_crafts_beautiful_antique,rating:{rate:4.9,count:8}, favourite:false, isCart:false, discount:45},
        {id:8,title:"Sketch Book Talens Art Creation",price:9,description:"High quality book protected by a hardback black casing with an elasticated strapSketch with pencil, charcoal, chalk, graphite, crayon, ink or watercolor",category:"office tools",image:sketch_book,rating:{rate:4.5,count:29}, favourite:false,  discount:50 , isCart:false,},
        {id:9,title:"Sakura Pigma Micron Pigment Fineliner Pens",price:19,description:"Single Black Pigma Fineliner Pen from Sakura.The durable 0.1mm porous-point nib delivers a consistent line as well as superb colour transferal.Sakura's unique PIGMA Ink is the first in the world to combine both water-based and pigment inks.",category:"office tools",image:sakura_pigma_micron_pigment,rating:{rate:4.9,count:44}, favourite:false, discount:60 , isCart:false},
        {id:10,title:"15 Pcs Artist Paint Brush Set Holder Acrylic",price:14,description:"5PC ACRYLIC PIANT BRUSHES: Acrylic artist professional painting brushes contains 7 kinds of shapes (15pcs )in the package. they are flat, angular, filbert, round, fan, liner, comb. No matter for broad coloring, shaping, or detail delineating",category:"office tools",image:pcs_artist_paint_brush,rating:{rate:3.9,count:31}, favourite:false,  isCart:false, discount:45} ,
        {id:11,title:"I Paused My Game to Be Here",price:29,description:"Gift ideas for birthday, Christmas or a present for any occasion; makes a nice present for your gamer husband, brother, nephew, grandson, friend or teenage son. A fun way to celebrate this special day",category:"clothes",image:hoodie,rating:{rate:4.7,count:88}, favourite:false, discount:10 , isCart:false},
        {id:12,title:"Twitch Embroidered Glitch Snapback Grey",price:19,description:"Hand Wash OnlyGrey snapback with Twitch's classic Glitch logo. Sized traditionally with adjustable snap strap to fit all heads.",category:"clothes",image:cap,rating:{rate:4.5,count:12}, favourite:false, discount:5 , isCart:false},
        {id:13,title:"Gesean Men's Novelty Color Block Pullover",price:29,description:"Occasion: Considerable for daily wear; Party; sports; lounging; hang-out; home wear. suitable for women/men/girls/boys/teens, comfortable and fashion.",category:"clothes",image:pullover,rating:{rate:4.3,count:33}, favourite:false, discount:10 , isCart:false},
        {id:14,title:"STAR WORK C Shaped End Table",price:49,description:"Small Side Table for Living Room?With simple stylish design, the C shaped end table works well As beside desk, laptop table, sofa side table, under couch table, chairside table, TV tray for eating ,suitable for any decor of your room",category:"furniture",image:table,rating:{rate:4.1,count:32}, favourite:false, discount:10 , isCart:false},
        {id:15,title:"Furniture Kart wrought iron Single",price:199,description:"High-quality swing: hanging basket Swing Chair adds a fun lounge vibe to your Outdoor space. Constructed with durable black-brown faux Ratan Wicker and a sturdy iron frame, its easy to care for and built to last",category:"furniture",image:single_seater,rating:{rate:4.5,count:17}, favourite:false, discount:5 , isCart:false},
        {id:16,title:"Lukzer Engineered Wood Coffee Center",price:99,description:"Made of particle board sheet, it is environmentally friendly, has strong texture and is not easy to be deformed, easy to clean, scratch resistant. Beautiful appearance, easy to install and use.",category:"furniture",image:tea_table,rating:{rate:4.4,count:31}, favourite:false, discount:10 , isCart:false},
        {id:17,title:"Kusum Handicrafts Wooden 6 Seater",price:399,description:"Brand-Kusum HandicraftsMaterial: Sheesham WoodStyle: ModernSleek Contemporary Styling, This Sofa Set Features Clean Lines Which Will Make It An Elegant Addition To Any Existing Living Room, Office, Or Bedroom Decor.",category:"furniture",image:sofa,rating:{rate:4.0,count:20},favourite:false,discount:5 , isCart:false},
        // {id:18,title:"Adidas Originals Unisex-Adult Stan Smith",price:99,description:"'ve always thought of [the Stan Smith] like a canvas. The designers at a and you can always recognize it from a long way away — Stan Smith",category:"exclusive",image:adidas_shoes,rating:{rate:4.9,count:49},favourite:false,isCart:false,discount:10}
    ]

    test = 123

    user = null

    cart=[]
    cart_total = 0

    favouritesProducts = []

    orderInformation = []
}
export default new Products()
