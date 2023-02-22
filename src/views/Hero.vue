<template>
    <section class="p-4 relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
            <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
                src="assets/bike_ride.jpg" alt="" />
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="text-center md:w-2/3 lg:w-1/3 xl:w-1/3 md:text-left">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Lets Take a Ride
                </h2>

                    
                <p class="mt-4 text-base text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>

                    <button type="submit"
                            class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-5 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                            Explore
                        </button>

                <!-- <form action="#" method="POST" class="mt-8 lg:mt-12">
                    <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                        <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                            <div class="relative text-gray-400 focus-within:text-gray-600">
                                <label for="email" class="sr-only"></label>
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input type="email" name="email" id="email" placeholder="Enter email address"
                                    class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                    required />
                            </div>
                        </div>

                        <button type="submit"
                            class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                            Get instant access
                        </button>
                    </div>
                </form> -->
            </div>
        </div>
    </section>
    <section class="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <slot name="title">

<img class="inline-block text-green-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bicycle-icon.svg/2459px-Bicycle-icon.svg.png" height="30" width="40"/>

Helsinki City Bikes</slot>

                    <p class="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                    
                </div>

                <div>
                    <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Features</p>

                    <ul class="mt-6 space-y-4">
                        <li>
                            <a href="#" title=""
                                class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Map </a>
                        </li>

                        <li>
                            <a href="#" title=""
                                class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Anaytics </a>
                        </li>

                        
                    </ul>
                </div>

                <div>
                    <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                    <ul class="mt-6 space-y-4">
                        <li>
                            <a href="#" title=""
                                class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Customer Support </a>
                        </li>

                        <li>
                            <a href="#" title=""
                                class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Delivery Details </a>
                        </li>

                        <li>
                            <a href="#" title=""
                                class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="#" title=""
                                class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                            Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum ea eos quo, assumenda soluta autem eligendi dolor ullam labore, voluptatem odit, consectetur aperiam totam! Quisquam, deserunt nulla! Deserunt, rem!</p>
              

                
            </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">© Copyright 2023, All Rights Reserved</p>
    </div>
</section></template>