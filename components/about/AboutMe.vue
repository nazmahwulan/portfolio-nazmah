<template>
  <div class="about-container">
    <div class="about-title">
      <h1 class="text-black font-bold text-4xl">About Me</h1>
    </div>
    <div class="about-wrapper">
      <div class="about-main flex mt-20">
        <div class="about-img lg:w-6/12 md:w-6/12 aspect-square xl:ml-[100px]">
          <img src="~/assets/lp.jpeg" class="rounded-lg lg:w-96 md:w-80" alt="" />
        </div>
        <div class="about-content mr-[300px]">
          <p class=" text-lg xl:mt-16 lg:mt-5 text-justify lg:ml-[20px] md:w-6/12 lg:w-9/12 xl:w-9/12">
            I am an informatics engineering student who is interested in learning more about software development with thorough, structured, and agile abilities. I am ambitious and driven to constantly develop my skills.
          </p>
          <br />
          <a href="https://drive.google.com/file/d/1Jw22bRi19WMaqqM7Fri7aUc4a-13nrx7/view?usp=share_link" class="btn1 xl:ml-[50px] rounded-full bg-red-600 text-white text-center">Download CV</a>
        </div>
      </div>
      <div class="skill-container">
        <div class="skill-title">
          <h1 class="text-black font-bold text-4xl">Skills</h1>
        </div>
        <div class="skill-wrapper">
          <div class="icon-container">
            <Icon class="icon" name="ic:sharp-html" />
            <Icon class="icon" name="ic:sharp-php" />
            <Icon class="icon" name="ic:sharp-css" />
            <Icon class="icon" name="tabler:brand-nuxt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1200px) {
  .about-main {
    display: flex;
    flex-direction: row !important;
  }
  .skill-container {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto !important;
    width: 100% !important;
  }
}

@media (min-width: 1024px) {
  .about-container {
    margin-top: 25vh !important;
  }
  .about-main {
    display: flex;
    flex-direction: row !important;
    width: 100% !important;
  }
  .btn1 {
    width: 150px !important;
  }
  .skill-container {
    margin: 200px auto auto 100px !important;
  }
  .icon {
    justify-content: space-between !important;
  }
}

@media (min-width: 768px) {
  .about-container {
    margin-top: 10vh;
  }
  .about-title {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 12px;
    border-bottom: 4px solid #dc2626;
    width: 30%;
  }
  .about-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .about-img img {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 20px;
    z-index: -1;
  }

  .about-content {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
  }

  .btn1 {
    width: 25%;
    padding: 15px;
    font-size: 15px;
  }

  .btn1:hover {
    border: 1px solid black;
    background-color: white;
    color: #dc2626;
    transition: all ease-in-out 0.3s;
  }

  .skill-container {
    display: flex;
    justify-content: center;
    margin: 200px auto auto 100px;
  }

  .skill-title {
    margin-top: -150px;
  }
  .skill-title h1 {
    border-bottom: 4px solid #dc2626;
    width: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .icon-container {
    margin-top: -100px;
    margin-left: -170px;
  }

  .icon {
    font-size: 50px;
    justify-content: center;
    margin: 0 10px 0 10px;
  }

  .icon:hover {
    color: #dc2626;
    transition: all ease-in-out 0.3s;
  }
}
</style>