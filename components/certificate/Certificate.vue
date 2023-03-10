<template>
  <div class="certificate-container">
    <div class="certificate-title">
      <h1 class="text-black font-bold md:text-2xl sm:text-xl lg:text-4xl">Certificate</h1>
    </div>
    <div class="certificate-wrapper">
      <div class="certificate-content">
        <img class="shadow-2xl md:w-[400px] md:h-[250px] rounded-[7px] mt-[30px] mb-[30px] sm:w-[300px] sm:h-[1500px]" src="~/assets/sertif1.jpeg" alt="" />
        <h5 class="text-black font-bold md:text-2xl sm:text-xl lg:text-xl">Internet Of Things</h5>
        <br />
      </div>

      <div class="certificate-content">
        <img class="shadow-2xl md:w-[400px] md:h-[250px] rounded-[7px] mt-[30px] mb-[30px]" src="~/assets/sertif2.jpeg" alt="" />
        <h5 class="text-black font-bold md:text-2xl sm:text-xl lg:text-xl">Web Development</h5>
        <br />
      </div>
      <div class="certificate-content">
        <img class="shadow-2xl md:w-[400px] md:h-[250px] rounded-[7px] mt-[30px] mb-[30px]" src="~/assets/sertif3.jpeg" alt="" />
        <h5 class="text-black font-bold md:text-2xl sm:text-xl lg:text-xl">Responsive Web Design</h5>
        <br />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .certificate-container {
    margin-top: 25vh;
  }
  .certificate-wrapper {
    flex-direction: row !important;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .certificate-container {
    margin-top: 20vh;
  }
  .certificate-title {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 12px;
    border-bottom: 4px solid #dc2626;
    width: 30%;
  }

  .certificate-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 24px;
    width: 100%;
  }

  .certificate-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px 0 24px;
  }
}
</style>