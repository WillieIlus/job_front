<template>
  <div class="main-content">
    <div class="page-content">
      <!-- start home -->
      <section
        class="relative py-64 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 group-data-[mode=dark]:bg-neutral-900 ">
        <div class="inset-0 absolute bg-[url('../images/home/img-01.png')] bg-center"></div>
        <div class="container relative mx-auto">
          <div class="grid items-center grid-cols-12 rtl:gap-10">
            <div class="col-span-12 col-start-2">
              <div class="mb-3 text-center ltr:mr-14 rtl:ml-14">
                <h1 class="mb-3 text-5xl leading-tight text-white fw-semibold">Search Between More Then
                  <br><span class="text-yellow-500 fw-bold">10,000+</span>
                  Open Jobs.
                </h1>
                <p class="text-white text-17">Find jobs, create trackable resumes and enrich your
                  applications.</p>
              </div>
              <!-- search form -->
              <Search />
              <!-- end search form -->
            </div>
          </div>
        </div>
        <img src="assets/images/bg-shape.png" alt="" class="absolute block -bottom-5 dark:hidden">
        <img src="assets/images/bg-shape-dark.png" alt="" class="absolute hidden -bottom-5 dark:block">
      </section>
      <TopCategories />
      <TopJobs />
    </div>
  </div>
</template>