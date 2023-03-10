<template>
  <div class="home-container">
    <div class="wrapper">
      <div class="home-title">
        <h1 class="text-black font-bold text-4xl font-general-semibold text-3xl md:text-2xl xl:text-3xl md:text-center lg:text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase md:mt-20">
          Hello, I'am <br />
          Nazmah Wulan Rhomadhona <br />
          <span class="home-p">I'm a Software Engineer</span>
        </h1>
        <button class="btn"></button>
      </div>
    </div>

    <div class="img">
      <img src="../assets/pp.png" alt="" />
    </div>
  </div>

  <footer class="footer"><p>Copyright &copy by Nazmah Wulan Rhomadhona</p></footer>
</template>

<style>
@media (min-width: 1024px) {
  .home-container {
    display: grid !important;
    grid-template-columns: auto auto auto !important;
    margin-top: 15vh !important;
  }
  .img img {
    width: 500px !important;
    height: 500px !important;
  }
  .home-title {
    grid-column: 1/2 !important;
  }
  .img {
    margin-top: 10vh !important;
    grid-column: 3/4 !important;
  }
  .footer p {
    margin-top: 65vh;
    padding-bottom: 10px;
  }
}
@media (min-width: 768px) {
  .home-container {
    margin-top: 10vh;
  }
  .home-p {
    font-weight: normal;
    font-size: 20px;
  }
  .home-container > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-title {
    grid-column: 1/2;
  }
  .img {
    margin-top: 5vh;
    grid-column: 3/4;
  }
  .img img {
    width: 500px;
    height: 500px;
  }

  .btn {
    width: 70%;
    background-color: hsla(160, 100%, 37%, 1);
    border: none;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer p {
    margin-top: 5vh;
    padding-bottom: 10px;
  }
}
</style>
