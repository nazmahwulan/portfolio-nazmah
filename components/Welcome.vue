<template>
  <div class="sm:flex justify-between items-center p-8 sm:px-20">
    <div class="text-center pt-8 pb-16 sm:pt-16 sm:pb-0" data-aos="fade-up" data-aos-duration="2000">
      <h1 class="font-bold text-xl sm:text-4xl">
        Hello, I'am <br />
        Nazmah Wulan Rhomadhona <br />
        <span class="text-gray-500 text-lg sm:text-3xl">I'm a Software Engineer</span>
      </h1>
    </div>
    <div data-speed="-2" data-aos="fade-down" data-aos-duration="2000">
      <div class="mx-auto shadow-2xl bg-[#BBD6B8] rounded-[10px] sm:w-[450px] sm:h-[450px]">
        <img class=" mx-auto sm:mx-auto w-[250px] sm:w-[350px] sm:h-[500px]" src="../assets/akuu.png" alt="" />
      </div>
    </div>
  </div>
  <div class="sm:mt-[-140px] text-center sm:mr-[700px]">
    <a href="https://drive.google.com/file/d/1Jw22bRi19WMaqqM7Fri7aUc4a-13nrx7/view?usp=share_link"
      class="rounded-full bg-[#BBD6B8] py-1 px-4 text-white font-bold text-base hover:text-black" target="blank">Download
      CV</a>
  </div>
  <div class="mt-[250px]">
    <div  class="" data-aos="fade-up" data-aos-duration="1000">
      <h1 class="mt-[-200px] text-black font-bold text-4xl text-center sm:pb-[12px] sm:text-center sm:mt-[200px] mt-[-100px]">
        Skills
      </h1>
      <div class="flex justify-center">
        <hr class="border-[#BBD6B8] border-2 w-[100px]">
      </div>
    </div>
    <div class="mt-[50px] sm:flex sm:px-[250px]">
      <div class="mx-auto shadow-2xl bg-[#BBD6B8] rounded-[20px] w-[150px] h-[100px] mb-[10px]" data-aos="fade-down">
        <div class="text-center pt-[17px]">
          <Icon class="hover:text-white text-6xl" name="ic:sharp-html" />
        </div>
      </div>
      <div class="mx-auto shadow-2xl bg-[#BBD6B8] rounded-[20px] w-[150px] h-[100px] mb-[10px]" data-aos="fade-down"
        data-aos-duration="1000">
        <div class="text-center pt-[17px]">
          <Icon class="hover:text-white text-6xl " name="ic:sharp-css" />
        </div>
      </div>
      <div class="mx-auto shadow-2xl bg-[#BBD6B8] rounded-[20px] w-[150px] h-[100px] mb-[10px]" data-aos="fade-down"
        data-aos-duration="1000">
        <div class="text-center pt-[17px]">
          <Icon class="hover:text-white text-6xl" name="ic:sharp-php" />
        </div>
      </div>
      <div class="mx-auto shadow-2xl bg-[#BBD6B8] rounded-[20px] w-[150px] h-[100px] mb-[10px]" data-aos="fade-down"
        data-aos-duration="1000">
        <div class="text-center pt-[17px]">
          <Icon class="hover:text-white text-6xl" name="tabler:brand-nuxt" />
        </div>
      </div>
    </div>
  </div>

  <div class=" mx-auto mt-[150px] mb-[150px] sm:flex sm:justify-between sm:px-[200px] sm:mb-[100px] sm:mt-[-30px]">
    <div class="">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 class="text-black font-bold text-4xl text-center sm:pb-[12px] sm:text-center sm:mt-[200px] mt-[-50px]">
          Education
        </h1>
        <div class="flex justify-center">
          <hr class="border-[#BBD6B8] border-2 w-[200px]">
        </div>
      </div>
      <div class="text-center mt-[50px] sm:text-center sm:mt-[20px]" data-aos="fade-left" data-aos-duration="1000">
        <h2 class="text-black sm:text-xl  font-bold mb-3">University Lampung</h2>
        <p class=" text black sm:text-base">Informatic Engineering</p>
        <p class=" text-slate-600">Sep 2020 - present</p>
        <p class="text-slate-600">Grade: 3.84 / 4.00</p>
        <br /><br />
        <h2 class="text-black sm:text-xl font-bold mb-3">SMAN 3 Kotabumi</h2>
        <p class="text black sm:text-base">Mathematics and Natural Sciences</p>
        <p class="text-slate-600">Aug 2017 - Apr 2020</p>
        <p class="text-slate-600">Grade: 90.00 / 100</p>
      </div>
    </div>
    <div class="text-center"></div>
    <div class="sm:border-l-2 bg-[#BBD6B8] sm:h-[450px] sm:mt-[150px]"></div>
    <div class="">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 class="text-black font-bold text-4xl text-center sm:pb-[12px] sm:text-center sm:mt-[200px] mt-[50px]">
          Experience
        </h1>
        <div class="flex justify-center">
          <hr class="border-[#BBD6B8] border-2 w-[200px]">
        </div>
      </div>
      <div class="text-center mt-[50px] sm:text-center sm:mt-[20px]" data-aos="fade-right" data-aos-duration="1000">
        <h3 class="text-black sm:text-xl font-bold mb-3">PT Zona Edukasi Nusantara</h3>
        <p class="text black sm:text-base">Web Development Independent Studies</p>
        <p class="text-slate-600">Aug 2020 - Dec 2020</p>
        <p class="text-slate-600">Grade: 87.56 / 100</p>
        <br /><br />
        <h3 class="text-black sm:text-xl font-bold mb-3">Himatro</h3>
        <p class="text black sm:text-base">Member of Social and Entrepreneurship
          Department</p>
        <p class="text-slate-600">Sep 2020 - Feb 2023</p>
      </div>
    </div>
  </div>
</template>