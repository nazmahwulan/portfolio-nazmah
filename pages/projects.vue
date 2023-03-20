<template>
  <NavBar />
  <div class="sm:mt-[-100px] mt-[80px] overflow-hidden">
    <h1 class="text-black font-bold text-4xl text-center sm:pb-[12px] sm:text-center sm:mt-[150px]">
      PROJECT
    </h1>
    <div class="flex justify-center">
      <hr class="border-[#BBD6B8] border-2 w-[200px]">
    </div>
    <div class=" lg:flex sm:mt-[80px] mt-[50px] sm:mb-[100px]">
      <div class="mx-auto drop-shadow-2xl rounded-[20px] sm:w-[450px] sm:h-[450px]" data-aos="flip-left">
        <img class=" px-[50px] sm:px-[20px] sm:py-[20px] " src="~/assets/project1.jpeg" alt="">
        <h1 class="text-black font-bold text-center text-xl sm:mt-[10px] mb-[20px] mt-[20px]">Menit.com</h1>
        <p class="mx-auto text-black text-justify text-base sm:mt-[10px] sm:px-[20px] sm:mb-[20px] px-[50px]">This website
          is one of my
          independent study projects "Web Development" at PT Zona Edukasi Nusantara.This website
          was built using HTML, CSS, PHP and My SQL as the database and uses the php mpdf library to generate reports in
          pdf format, but this website is still on the localhost server.</p>
        <div class="text-center mt-[20px] mb-[50px] ">
          <a class="rounded-full bg-[#BBD6B8] sm:py-1 sm:px-4 py-1 px-4 text-white  font-bold text-base hover:text-black"
            target="blank" href="https://github.com/nazmahwulan/project.git">Details</a>
        </div>
      </div>
      <div class="mx-auto drop-shadow-2xl rounded-[20px] sm:w-[480px] sm:h-[450px] sm:mt-[100px] lg:mt-[0px]" data-aos="flip-left">
        <img class="px-[50px]  sm:px-[20px] sm:py-[20px]" src="~/assets/project2.jpeg" alt="">
        <h1 class="text-black font-bold text-center text-xl sm:mt-[10px] mb-[20px] mt-[20px]">Cleany</h1>
        <p class="text-black text-justify text-base sm:mt-[10px] sm:px-[20px] sm:mb-[20px] px-[50px]">This website is one
          of my
          campus
          group projects on Human and Computer Interaction Class.
          This website was created using HTML, CSS, and JavaScript</p>
        <div class="text-center mt-[20px] mb-[50px]">
          <a class="rounded-full bg-[#BBD6B8] sm:py-1 sm:px-4 py-1 px-4 text-white font-bold text-base text hover:text-black"
            target="blank" href="https://nessaaqila02.github.io/">Details</a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>