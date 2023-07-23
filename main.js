// 1-misol array malumot va map function
const arrPerson=[
    {name:'Salim',years:1998,gender:'man'},
    {name:'Shahlo',years:2020,gender:'woman'},
    {name:'Ibrohim',years:2000,gender:'man'},
    {name:'Marjona',years:1997,gender:'woman'},
    {name:'Ruxshona',years:1996,gender:'woman'},
    {name:'Yusuf',years:1998,gender:'man'},
    {name:'Mustafo',years:1998,gender:'man'},
    {name:'Atxam',years:2012,gender:'man'},
    {name:'Hushnoza',years:2005,gender:'woman'},
    {name:'Shoxrux',years:1998,gender:'man'},
    {name:'Bobur',years:2003,gender:'woman'},
    {name:'Zoir',years:1996,gender:'man'},
    {name:'Muyassar',years:2009,gender:'woman'},
    {name:'Cahros',years:2020,gender:'woman'},
    {name:'Muhsin',years:2011,gender:'man'},
    {name:'Mahliyo',years:2010,gender:'woman'},
    {name:'Jamol',years:1995,gender:'man'},
    {name:'Sohib',years:1999,gender:'man'},
    {name:'Maftuna',years:2004,gender:'woman'},
    {name:'Donyor',years:2014,gender:'man'},
    {name:'Saboxat',years:2006,gender:'woman'},
    {name:'Muslima',years:2000,gender:'woman'},
    {name:'Botir',years:1997,gender:'man'},
 ]

const person=()=>{
    arrPerson.map((arrPerson)=>{
        if(arrPerson.years>2010){
            console.log(arrPerson.name);
        }
    })
}
const btn=document.getElementById('btn');
btn.addEventListener('click',person)

// 2-misol array malumot va  map function
const arrCom=[
    {name:'Aser',core:'i7',model:'Acer A3 A315-510P-3652 i3-N305(13G)4/256 GB SSD 15.6" FHD ',sum:'4 800 000 so\'m'},
    {name:'Lenova',core:'i5',model:'Lenovo IdeaPad 3 15IGL05 N4020 4/256GB SSD 15.6" FHD',sum:'2 900 000 so\'m'},
    {name:'HP',core:'i5',model:'HP 255 G9 R3-5425U 4/256GB SSD 15.6" FHD',sum:'5 200 000 so\'m'},
    {name:'Asus',core:'i9', model:'Asus K513EQ-BN649W i7-1165G7 16 GB 1TB SSD 2GB MX350 15.6 FHD',sum:'12 300 000 so\'m'},
    {name:'Razer Blade',core:'i9',model:' Razer Blade 14 RZ09-0427 R9-6900HX 16 GB 1TB SSD RTX3060 6G 14" FHD',sum:'19 400 000 so\'m'}
]
const btn2=document.getElementById('knopka');
btn2.addEventListener('click',com=()=>{
    arrCom.filter((arrCom)=>{
        if(arrCom.core>='i7'){
        }
    })
    console.log(arrCom.name);

})


