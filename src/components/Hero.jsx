import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marketing from "/marketing.jpg";
import Response from "/responsive.jpg";

// grid images
import Image1 from "/image1.jpg";
import Image2 from "/image2.jpg";
import Image3 from "/33years.jpg";
import Image4 from "/strategy.jpg";
import Image5 from "/tablet.jpg";
import Image6 from "/sites.jpg";
import Image7 from "/luxury.jpg";
import Image8 from "/global.jpg";
import state1 from "/state1.jpg";
import state2 from "/state2.jpg";
import state3 from "/state3.jpg";

import services from "/services.png";
import mockup from "/mockup.png";
import realtor from "/realtor.png";
import housing from "/housing.png";
import serenoMini from "/sereno-logo-mini.png";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#faf6ec] overflow-hidden">
      <h1 className="lg:text-6xl text-5xl text-[#83735B] text-center my-7">
        Comprehensive Marketing Plan
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-around p-10 lg:space-x-10">
        <img
          src={Response}
          className="w-full lg:w-6/12"
          alt="Responsive Photo"
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="font-semibold text-6xl text-[#83735B]">Responsive</h2>
          <p className="text-2xl font-karla text-[#83735B]">
            I am always available via phone, text, or email.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around p-10 lg:space-x-10">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="font-semibold text-6xl text-[#83735B]">Syndication</h2>
          <p className="text-2xl font-karla text-[#83735B]">
            I market your property locally, nationally, and internationally
          </p>
        </div>
        <img
          src={Marketing}
          className="w-full lg:w-6/12"
          alt="Marketing Photo"
        />
      </div>
      {/* 2 grids */}
      <section className="flex flex-col lg:flex-row items-center justify-evenly my-20">
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#83735B"
            className="size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h2 className="font-semibold text-3xl font-playfair text-[#83735B] mb-2">
            Virtual Tour
          </h2>
          <p className="text-lg font-karla text-[#83735B] text-center">
            Let&apos;s make your home stand out with a high quality virtual
            tour.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#83735B"
            className="size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <h2 className="font-semibold font-playfair text-3xl text-[#83735B] mb-2">
            Photography
          </h2>
          <p className="text-lg font-karla text-[#83735B] text-center">
            Beatiful, high-end photography <br /> is a central part of our
            marketing plan for your property.
          </p>
        </div>
      </section>
      {/* grids images */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="z-30"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="bg-[#737057] w-full h-full p-4 flex items-center justify-center">
          <h1 className="text-5xl text-[#faf6ec]">Decor Guidance</h1>
        </div>
        <img
          src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025"
          className="w-full h-full"
          alt=""
        />
        <div className="bg-[#faf6ec] w-full h-full p-4 flex flex-col justify-around items-center">
          <h1 className="text-5xl text-[#737057]">My Staging Expertise</h1>
          <ul className="text-[#737057] text-xl space-y-3">
            <li className="">Uncluitter and organize your home</li>
            <li>Neatly arrange drawers and cabinets</li>
            <li>Keep pets outdoors or off premises</li>
            <li>Play soft music</li>
          </ul>
        </div>
        <img
          src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023"
          alt=""
          className="w-full h-full"
        />
        <div className="bg-[#faf6ec] w-full h-full p-4 flex items-center justify-center">
          <h1 className="text-5xl text-[#737057]">Intentional Layout</h1>
        </div>
        <img
          src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024"
          alt=""
          className="w-full h-full"
        />
      </Carousel>
      <div className="grid grid-cols-1 grid-rows-1 lg:gap-4 gap-24 my-20">
        <div className="relative">
          <img
            src={Image1}
            alt="image1"
            className="w-full lg:h-full h-screen  brightness-50"
          />
          <div className="absolute inset-0 flex flex-col space-y-10 items-center justify-center">
            <p className="text-white text-5xl text-center font-bold">
              The Selling Process
            </p>
            <div className="grid grid-cols-3 font-karla grid-rows-2 gap-4 p-4 text-center">
              <div className="text-white flex flex-col">
                <span className="text-5xl text-center pb-2">1</span>
                <h1>Initial Consultation and Planning</h1>
              </div>
              <div className="text-white flex flex-col">
                <span className="text-5xl text-center pb-2">2</span>
                <h1>Devise Execute &amp; Marketing Plan</h1>
              </div>
              <div className="text-white flex flex-col">
                <span className="text-5xl text-center pb-2">3</span>
                <h1>Review offers &amp; reach agreement with buyer</h1>
              </div>
              <div className="text-white flex flex-col">
                <span className="text-5xl text-center pb-2">4</span>
                <h1>Complete Transaction Process</h1>
              </div>
              <div className="text-white flex flex-col">
                <span className="text-5xl text-center pb-2">5</span>
                <h1>After Sale Services</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 with text overlay */}
        <div className="relative">
          <img
            src={Image2}
            alt="image2"
            className="w-full lg:h-full h-screen brightness-50"
          />
          <div className="absolute inset-0 flex flex-col space-y-10 items-center justify-center overflow-hidden">
            <p className="text-white text-5xl font-bold text-center">
              The Buying Process
            </p>
            <ul className="relative flex w-full ml-2 lg:ml-36 gap-x-2 p-4 font-karla">
              <li className="group flex-1 shrink basis-0">
                <div className="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
                  <span className="border border-neutral-200 text-white size-7.5 flex flex-shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    1
                  </span>
                  <div className="bg-white ms-2 h-px w-full flex-1 group-last:hidden"></div>
                </div>
                <div className="mt-2.5">
                  <span className="text-white block">
                    Initial Consultation &amp; Planning
                  </span>
                </div>
              </li>

              <li className="group flex-1 shrink basis-0">
                <div className="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
                  <span className="border border-neutral-200 text-white size-7.5 flex flex-shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    2
                  </span>
                  <div className="bg-white ms-2 h-px w-full flex-1 group-last:hidden"></div>
                </div>
                <div className="mt-2.5">
                  <span className="text-white block">
                    Search for a Home &amp; Get Pre-Approved
                  </span>
                </div>
              </li>

              <li className="group flex-1 shrink basis-0">
                <div className="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
                  <span className="border border-neutral-200 text-white size-7.5 flex flex-shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    3
                  </span>
                  <div className="bg-white ms-2 h-px w-full flex-1 group-last:hidden"></div>
                </div>
                <div className="mt-2.5">
                  <span className="text-white block">Submit an Offer</span>
                </div>
              </li>

              <li className="group flex-1 shrink basis-0">
                <div className="min-h-7.5 min-w-7.5 inline-flex w-full items-center align-middle text-sm">
                  <span className="border border-neutral-200 text-white size-7.5 flex flex-shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    4
                  </span>
                  <div className="bg-neutral/20 ms-2 h-px w-full flex-1 group-last:hidden"></div>
                </div>
                <div className="mt-2.5">
                  <span className="text-white block">
                    Complete Settlement Process
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around p-10 lg:space-x-10">
          <img src={Image3} className="lg:w-6/12" alt="Responsive Photo" />
          <div className="flex flex-col items-center justify-center space-y-10">
            <h2 className="font-semibold text-4xl lg:text-6xl text-[#83735B]">
              Over 33 Years of Real Estate Success
            </h2>
            <p className="text-xl font-karla text-[#83735B]">
              We provide every one of our clients with a level of service they
              won’t find anywhere else. We give them what they need, often
              before they know they need it. In real estate, almost everything
              can be negotiated. When you choose Hansen Partners It is
              experience is 100% nonnegotiable. And it’s an experience like no
              other.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around p-10 lg:space-x-10">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h2 className="font-semibold lg:text-6xl text-4xl text-[#83735B]">
              We Want To Create An Unforgettable Experience For You
            </h2>
            <p className="text-xl font-karla text-[#83735B] pb-4 lg:pb-0">
              We combine data gained from your home’s Comparative Market
              Analysis with local market research to create a marketing plan
              designed to help you meet your selling goals. Your home’s
              carefully designed plan will include a range of online, print, and
              other marketing tools targeted to the best-qualified pool of
              buyers. Successfully marketing a home in today’s real estate
              environment requires a firm with experience and flexibility.
              Hansen Partners provides both.
            </p>
          </div>
          <img src={Image4} className="lg:w-6/12" alt="Strategy Photo" />
        </div>

        <img
          src={Image5}
          className="w-10/12 mx-auto my-5"
          alt="Strategy Photo"
        />
        <div className="flex items-center bg-[#737057] justify-around lg:p-10 space-x-10">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h2 className="font-semibold text-5xl text-center lg:text-6xl text-[#fffdf7]">
              The Hansen Partners Communications Tablet
            </h2>
            <p className="text-xl p-4 font-karla text-[#fffdf7]">
              We combine data gained from your home’s Comparative Market
              Analysis with local market research to create a marketing plan
              designed to help you meet your selling goals. Your home’s
              carefully designed plan will include a range of online, print, and
              other marketing tools targeted to the best-qualified pool of
              buyers. Successfully marketing a home in today’s real estate
              environment requires a firm with experience and flexibility.
              Hansen Partners provides both.
            </p>
          </div>
        </div>

        <section className="my-5">
          <h1 className="text-6xl text-[#83735B] text-center">Benefits</h1>
          <ul className="list-outside list-disc ms-4 text-lg px-10 lg:px-32 font-karla my-7">
            <li className="mb-2 text-[#83735B]">
              Review all documents and sign in the comfort of your home or
              anywhere.
            </li>
            <li className="mb-2 text-[#83735B]">
              Stay up to date on all marketing activities, review materials,
              photos, etc. in real time.
            </li>
            <li className="mb-2 text-[#83735B]">
              Meet with us face to face on our Gotomeeting.com platform to go
              over and discuss the events of the week.
            </li>

            <li className="mb-2 text-[#83735B]">
              You have your own email assigned just for you and your common
              space to quickly write a note, or quickly send a video message to
              us for fast communication using our Bomb bomb video messaging
              system.
            </li>
          </ul>

          <blockquote className="relative p-10 bg-[#737057]">
            <span className="icon-[tabler--quote] text-[#fffdf7] absolute -start-1 -top-3 size-16 rotate-180 rtl:rotate-0 "></span>
            <div className="relative z-[1]">
              <p className="text-[#fffdf7] text-lg">
                <em>
                  We believe that transparency and guiding you and your family
                  through the process is key to having the best experience.
                  During these uncertain times. It is a good feeling to know you
                  have some one with a proven track record you can count on. We
                  will be here to handle your needs during the Real Estate
                  process. We think of it before a need even arises. Because,
                  that is just what we do. Who you work with does matter!
                </em>
              </p>
            </div>
          </blockquote>
        </section>

        <section className="my-5">
          <h1 className="text-5xl text-[#737057] text-center font-semibold">
            We Market Your Home to World
          </h1>
          <div className="font-karla text-[#737057] flex flex-col my-10 items-center justify-center">
            <h1 className="text-2xl">Our Online Marketing Strategy </h1>
            <p className="text-lg px-10 py-4 text-center">
              The Bay Area remains one of the world&apos;s most sought-after
              regions to live in, and when looking to sell, it is vital that
              your home be marketed online to audiences locally, nationally, and
              internationally.
            </p>
          </div>
          <section className="flex flex-col lg:flex-row lg:p-10 p-12 lg:space-x-5 space-y-10 lg:space-y-0">
            <div className="space-y-5 lg:w-6/12">
              <h4 className="text-3xl text-center">Local Exposure</h4>
              <p className="text-lg font-karla">
                Through our partnership with Nextdoor, the private online social
                network now used in over 80% of U.S. neighborhoods and virtually
                all Bay Area neighborhoods, we make sure your home receives
                targeted local exposure. When you list your home with Hansen
                Partners it will automatically appear on Nextdoor in your
                neighborhood.
              </p>
            </div>
            <div className="space-y-5 lg:w-6/12">
              <h4 className="text-3xl text-center">National Exposure</h4>
              <p className="text-lg font-karla">
                We secure strategic positioning and enhancement on Realtor.com,
                Trulia, and Zillow, driving more consumers to your home and
                increasing exposure. We will receive every inquiry about your
                property directly.
              </p>
            </div>
            <div className="space-y-5 lg:w-6/12">
              <h4 className="text-3xl text-center">International Exposure</h4>
              <p className="text-lg font-karla">
                We secure strategic positioning and enhancement on Realtor.com,
                Trulia, and Zillow, driving more consumers to your home and
                increasing exposure. We will receive every inquiry about your
                property directly.
              </p>
            </div>
          </section>
          <div className="flex items-center justify-center">
            <img src={Image6} alt="sites" className="w-56" />
          </div>
        </section>

        {/* State Partners Section */}
        <section className="flex flex-col lg:flex-row w-full justify-around">
          <div>
            <div className="flex flex-col lg:flex-row items-center justify-evenly w-full my-6">
              <img src={state1} className="w-44" alt="" />
              <img src={state2} className="w-44" alt="" />
              <img src={state3} className="w-44" alt="" />
            </div>
            <h2 className="text-xl font-karla p-5 mt-10 text-center">
              Leading Real Estate Companies of The World® &amp; Luxury
              Portfolio International
            </h2>
            <p className="first-letter:text-[#83735B] text-justify first-letter:float-left first-letter:me-2 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest p-10">
              JRockcliff is a founding member of Luxury Portfolio
              International®, the luxury division of Leading Real Estate
              Companies of the World®. With more than 500 member firms around
              the world, Our luxury listings are exposed to a vast global
              audience and reach potential buyers and investors in over 50
              countries.
            </p>

            <h2 className="text-center text-lg lg:mt-15">
              Who&apos;s Who in Luxury Real Estate
            </h2>
            <p className="text-center font-karla lg:mt-20 mb-10 lg:mb-0">
              Who&apos;s Who in Luxury Real Estate is a global collection of
              luxury real estate brokers.
            </p>
          </div>
          <img src={Image7} alt="luxury photo" className="lg:w-5/12" />
        </section>

        {/* State section 2 */}

        <section className="flex w-full justify-around">
          <div>
            <div className="flex flex-col lg:flex-row items-center justify-evenly w-full ">
              <img src={Image8} alt="luxury photo" className="lg:w-5/12" />
              <div className="flex my-5">
                <img src={state1} className="w-32 lg:w-44" alt="" />
                <img src={state2} className="w-32 lg:w-44" alt="" />
                <img src={state3} className="w-32 lg:w-44" alt="" />
              </div>
            </div>

            <p className="p-10 text-lg">
              Through our international affiliations, we have a strong presence
              in over 50 countries. Our luxury listings are sent to prominent
              international real estate sites, reaching over 70 million
              potential buyers and investors worldwide through our relationships
              with:
            </p>

            <p className="p-5 text-lg text-center">
              We also have several well-positioned affiliate offices in China,
              providing our clients with access to buyers in Hong Kong,
              Shanghai, and Beijing.
            </p>
          </div>
        </section>
      </div>

      {/* mockup */}
      <section className="p-5 mb-10">
        <div className="mockup-window border lg:p-10 bg-base-300">
          <div className="flex justify-center h-full">
            <img
              className="w-full object-cover"
              src={mockup}
              alt="window background"
            />
          </div>
        </div>
      </section>

      <div className="relative">
        <img
          src={services}
          alt="services"
          className="w-full h-screen brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-[#faf6ec] text-5xl  font-bold">Work with Us</h1>
          <p className="text-center text-[#faf6ec] text-lg w-6/12 lg:my-3 my-6 font-karla">
            With decades of experience in luxurious Tri Valley real estate, our
            team is here to ensure that your dreams are a reality. Let us guide
            you through your home buying journey, contact us today!
          </p>
          <button className="btn btn-primary btn-lg glass hover:bg-[#737057] hover:text-[#faf6ec]">
            Contact Us
          </button>
        </div>
      </div>

      {/* footer */}
      <section className="w-full lg:h-[500px] bg-[#737057]">
        <div className="text-[#faf6ec]">
          <div className="p-10 flex flex-col items-center space-y-9 justify-center">
            <h1 className="text-5xl font-medium text-center">
              Julie Hansen Partnership
            </h1>
            <p className="font-karla text-lg lg:w-5/12">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-evenly mt-10 space-y-5">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-xl font-semibold uppercase">Address</h2>
              <p className="text-lg text-center font-karla">
                4733 Chabot Drive #100 Pleasanton <br /> CA 94588 Julie
                Hansen-Orvis | CA DRE# 00934447
              </p>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-xl font-semibold uppercase">
                Contact Information
              </h2>
              <p className="text-lg font-karla">
                (925) 553-6707 <br /> luxuryhomesinwc@icloud.com
              </p>
            </div>
            <section className="space-x-2 space-y-2 lg:space-y-0 py-3 lg:py-0">
              <button
                className="btn btn-circle btn-gradient bg-[#f3efe4]"
                aria-label="Circle Gradient Icon Button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#737057"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              <button
                className="btn btn-circle btn-gradient bg-[#f3efe4]"
                aria-label="Circle Gradient Icon Button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#737057"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
            </section>
          </div>
        </div>
      </section>

      {/* footer 2 */}
      <section className="w-full flex items-center justify-center lg:h-[500px] bg-[#faf6ec]">
        <div className="text-[#737057] h-full flex flex-col space-y-5 items-center justify-center">
          <div className="py-5 px-10 flex flex-col items-center space-y-4 justify-center">
            <h1 className="text-5xl font-medium text-center">Newsletter</h1>
            <p className="font-karla text-lg">
              Subscribe to our Newsletter for latest news and updates. Stay
              tuned!
            </p>
          </div>
          <label className="form-control flex gap-2 w-6/12">
            <input type="checkbox" className="checkbox" />
            <span className="label -mt-1 cursor-pointer flex items-center justify-center pt-0">
              <span className="label-text-alt font-karla">
                By providing Julie Hansen Partnership your contact information,
                you acknowledge and agree to our Privacy Policy and consent to
                receiving marketing communications, including through automated
                calls, texts, and emails, some of which may use artificial or
                prerecorded voices. This consent isn’t necessary for purchasing
                any products or services and you may opt out at any time. To opt
                out from texts, you can reply, ‘stop’ at any time. To opt out
                from emails, you can click on the unsubscribe link in the
                emails. Message and data rates may apply.
              </span>
            </span>
          </label>
          <button className="btn btn-lg waves waves-light bg-[#737057] hover:bg-[#faf6ec] text-[#faf6ec] hover:text-[#737057]">
            Subscribe
          </button>
          <div className="flex items-center justify-center space-x-10 py-7">
            <img src={realtor} alt="realtor" className="w-10" />
            <img src={housing} alt="housing" className="w-10" />
            <img src={serenoMini} alt="serenoMini" className="w-10" />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <h2 className="text-lg text-center">
              Website Designed & Developed by Luxury Presence
            </h2>
            <h2 className="text-lg">Copyright &copy;2024 | Privacy Policy </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
