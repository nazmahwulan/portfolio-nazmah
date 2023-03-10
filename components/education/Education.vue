<template>
  <div class="education-container">
    <div class="edu-title">
      <h1 class="text-black font-bold md:text-2xl sm:text-xl lg:text-4xl">Education & Experience</h1>
    </div>
    <div class="education-wrapper">
      <div class="flex justify-between md:px[100px] md:pb-[100px] md:m-[100px] rounded-[50px] shadow-2xl">
        <div class="edu-content">
          <h2 class="text-black md:text-xl sm:text-xl lg:text-xl font-bold mb-3">Informatic Engineering</h2>
          <p class=" ">2020 - Now</p>
          <p class="">University of Lampung</p>
          <br /><br />
          <h2 class="text-black md:text-xl sm:text-xl lg:text-xl font-bold mb-3">Mathematics and Natural Sciences</h2>
          <p>2017 - 2020</p>
          <p>SMA Negeri 3 Kotabumi</p>
        </div>

        <div class="edu-content">
          <h3 class="text-black md:text-xl sm:text-xl lg:text-xl font-bold mb-3">Web Development Independent Studies</h3>
          <p>PT Zona Edukasi Nusantara</p>
          <p>Create a website project with the theme News Portal, named "Menit.com"</p>
          <br /><br />
          <h3 class="text-black md:text-xl sm:text-xl lg:text-xl font-bold mb-3">Member of Social and Entrepreneurship Department</h3>
          <p>Himpunan Mahasiswa Teknik Elektro (Himatro) University Lampung</p>
          <p>"Treasure in the Entrepreneurship Division 2022"</p>
          <p>"Public Relations Committee of Muayawarah Besar Himatro 2021"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .education-container {
    margin-top: 25vh !important;
  }
  .edu-content {
    margin-top: 10vh !important;
  }
}

@media (min-width: 768px) {
  .education-container {
    margin-top: 15vh;
  }
  .education-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
  }
  .edu-title {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 12px;
    border-bottom: 4px solid #dc2626;
    width: 40%;
  }
  .edu-content {
    margin-top: 5vh;
    padding: 0 36px 0 36px;
  }
}
</style>
