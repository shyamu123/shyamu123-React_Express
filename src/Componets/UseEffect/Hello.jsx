import React, { useState } from 'react'

const Hello = () => {
  const [name , setname]=useState();
  const [name1, setname1]=useState();
  
  function Inputtype(e){
    setname(e.target.value)
  }

  let imggg=[
    {
      img:"https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?resize=768,574",
      type:"Mountain"
    },
    {
      img:"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
      type:"Mountain"
    },
    {
      img:"https://ichef.bbci.co.uk/images/ic/640x360/p05ccrb2.jpg",
      type:"Mountain"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvv3vtHwBkVgwU5E1uiJITd7LYho-LvY2Y9LL0tKVmI9cx8-slGt0D8uQ3anLJ_Msv8I&usqp=CAU",
      type:"Mountain"
    },
    {
      img:"https://admin.ntb.gov.np/image-cache/everest_mp_adventure-1624442562.jpeg?p=main&s=c54f9af8bc62aefc7bc971ec88ead590",
      type:"Mountain"
    },
    {
      img:"https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
      type:"Food"
    },
    {
      img:"https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200",
      type:"Food"
    },
    {
      img:"https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Junk-Food-More-Harm-and-Lesser-Well-being.jpeg",
      type:"Food"
    },
    {
      img:"https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2018/10/Unhealthy-Food-Chart.jpg",
      type:"Food"
    },
    {
      img:"https://colleenchristensennutrition.com/wp-content/uploads/2020/12/a-mix-of-22junk22-foods..jpg",
      type:"Food"
    },
    {
      img:"https://i.natgeofe.com/n/d472dd3c-8d38-4eed-ae62-7472a12a17de/secretary-bird-thumbnail-nationalgeographic_2331336_3x2.jpg",
      type:"Bird"
    },
    {
      img:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
      type:"Bird"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg",
      type:"Bird"
    },
    {
      img:"https://static.independent.co.uk/2023/05/31/14/18a5b05255b0896ec89711d45aed0f89Y29udGVudHNlYXJjaGFwaSwxNjg1NjA4NDI5-2.72432985.jpg?quality=50&width=640&auto=webp",
      type:"Bird"
    },
    {
      img:"https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg",
      type:"Bird"
    },
    {
      img:"https://images.indianexpress.com/2022/02/Beach-1200.jpg",
      type:"Beaches"
    },
    {
      img:"https://d.newsweek.com/en/full/1310267/best-hawaii-beaches.jpg",
      type:"Beaches"
    },
    {
      img:"https://cdn1.matadornetwork.com/blogs/1/2017/11/Lanikai-Beach-Oahu-Hawaii.jpeg",
      type:"Beaches"
    },
    {
      img:"https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1600451103837-FZVA1EW2KGFTGCCYQE93/lanikaibeach-unsplash.jpg",
      type:"Beaches"
    },
    {
      img:"https://e0.pxfuel.com/wallpapers/36/712/desktop-wallpaper-dawn-in-kailua-kona-hawaii-and-kona-hawaii-background-kailua-beach.jpg",
      type:"Beaches"
    },
  ]
  return (
    <>
    <h1 className='text-center text-5xl'>Search Name</h1>
    <div className='flex justify-evenly mt-4'>
      <p>Mountain</p>
      <p>Food</p>
      <p>Bird</p>
      <p>Beaches</p>
    </div>
    <div className='flex items-center'>
      <input type="text" onChange={Inputtype} value={name} class="block w-[300px] mt-5 ms-5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl p-1 ps-5 pe-5 mt-[50px]' onClick={()=>setname1(name)}>Clike</button>
    </div>

    <div>
      {imggg.filter((el)=>{return name1===el.type}).map((el)=>{
        return(
          <div className='inline-block p-2'>
            <img src={el.img} className='h-[300px] w-[400px]' alt='NOt Show'></img>
          </div>
        )
      })}

      {name1 === "" && imggg.map((el)=>{
        return(
          <div className='m-auto p-2 inline-block'>
            <img src={el.img} className='h-[300px] w-[400px]' alt='NOt Show'></img>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Hello


