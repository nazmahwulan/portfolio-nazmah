<template>
  <div class="project-container">
    <div class="project-title">
      <h1 class="text-black font-bold text-4xl">Projects</h1>
    </div>
    <div class="project-wrapper">
      <div class="lg:flex">
        <div class="pro-container md:mb-20 w-6/12">
          <div class="w-[500px] h-[400px] bg-white-600 lg:mt-[100px]">
            <img class="shadow-2xl w-[400px] h-[200px] rounded-[7px] ml-[48px] mt-[30px] mb-[30px]" src="~/assets/project1.jpeg" alt="" />
            <h5 class="text-black font-bold md:text-2xl sm:text-xl lg:text-3xl ml-[180px]">Menit.com</h5>
            <br />
            <p class="text-justify">
              This website is one of my independent study projects "Web Development" at PT Zona Edukasi Nusantara.This website was built using HTML, CSS, PHP and My SQL as the database and uses the php mpdf library to generate reports in
              pdf format, but this website is still on the localhost server.
            </p>
          </div>
          <br>
          <a class="text-black font-bold" href="https://github.com/nazmahwulan/project.git">https://github.com/nazmahwulan/project.git</a>
        </div>

        <div class="pro-container md:mb-20 w-6/12">
          <div class="w-[500px] h-[400px] bg-white-600 lg:mt-[100px]">
            <img class="shadow-2xl w-[400px] h-[200px] rounded-[7px] ml-[48px] mt-[30px] mb-[30px]" src="~/assets/project2.jpeg" alt="" />
            <h5 class="text-black font-bold md:text-2xl sm:text-xl lg:text-3xl ml-[200px]">Cleany</h5>
            <br />
            <p class="text-justify">This website is one of my campus group projects on Human and Computer Interaction Class. This website was created using HTML, CSS, and JavaScript</p>
            <br>
            <a class="text-black font-bold" href="https://nessaaqila02.github.io/">https://nessaaqila02.github.io/</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .project-container {
    height: 70vh !important;
    margin-top: 25vh !important;
  }
  .project-wrapper {
    flex-direction: row !important;
  }
  .pro-container {
    border: none !important;
  }
}

@media (min-width: 768px) {
  .project-container {
    margin-top: 15vh;
    height: 100vh;
  }
  .project-title {
    display: flex;
    justify-content: center;
    margin: 0 auto 16px auto;
    padding-bottom: 12px;
    border-bottom: 4px solid #dc2626;
    width: 30%;
  }

  .project-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
  }

  .pro-container {
    width: 100%;
    border-radius: 4px;
    padding: 24px;
    border: 1px solid #282828;
  }
}
</style>