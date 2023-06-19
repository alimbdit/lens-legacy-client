import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import img1 from '../../../assets/images/FQA.jpg'

const FQA = () => {
  return (
    <div className="lg:px-20 lg:pt-20 pt-5 lg:pb-28 dark:text-white flex flex-col items-center gap-10 lg:flex-row w-full">
      <div className="w-full">
      <h3 className="dark:text-white text-4xl font-boldZ text-gray-800 text-center ">
        FREQUENTLY <br />
        ASK QUESTION
      </h3>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full  rounded-2xl bg-white p-2">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-info bg-opacity-10 px-4 py-2 text-left text-xl font-medium uppercase text-gray-800 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-info focus-visible:ring-opacity-75">
                  <span>Who is the Lens Legacy suitable for?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Our photography summer camp is suitable for aspiring photographers of all skill levels, ranging from beginners with no prior experience to intermediate and advanced photographers looking to further enhance their skills and creativity.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-info bg-opacity-10 px-4 py-2 text-left text-xl font-medium uppercase text-gray-800 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-info focus-visible:ring-opacity-75">
                  <span>What equipment do campers need to bring?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Campers are required to bring their own digital cameras or DSLRs along with any additional lenses, memory cards, and batteries. A laptop or computer for editing purposes is also recommended, although not mandatory.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-info bg-opacity-10 px-4 py-2 text-left text-xl font-medium uppercase text-gray-800 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-info focus-visible:ring-opacity-75">
                  <span> Is there any final exhibition or showcase of camper&apos;s work?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Yes, at the end of the photography summer camp, we organize a final exhibition or showcase where campers have the opportunity to display their best photographs. It&apos;s a celebration of their achievements and a chance for them to share their creative visions with family, friends, and the community.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-info bg-opacity-10 px-4 py-2 text-left text-xl font-medium uppercase text-gray-800 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-info focus-visible:ring-opacity-75">
                  <span> Will there be any opportunities to learn about editing and post-processing?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Absolutely! Our photography summer camp includes dedicated sessions on editing and post-processing techniques using popular software programs such as Adobe Lightroom and Photoshop. Campers will learn how to enhance their photographs and bring out the best in their images through digital editing.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-info bg-opacity-10 px-4 py-2 text-left text-xl font-medium uppercase text-gray-800 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-info focus-visible:ring-opacity-75">
                  <span> What age groups are eligible to participate?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Our photography summer camp welcomes campers aged 12-18 years old. However, exceptions may be made on a case-by-case basis, so please reach out to us for further information.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-info bg-opacity-10 px-4 py-2 text-left text-xl font-medium uppercase text-gray-800 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-info focus-visible:ring-opacity-75">
                  <span>Are there any opportunities for outdoor photography excursions?</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Yes! We organize outdoor photography excursions to scenic locations where campers can practice their skills, experiment with composition, and capture stunning images amidst the beauty of nature. These excursions offer unique opportunities for creative exploration and learning.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      </div>
      <div className="w-full px-5">
        <img src={img1} alt="" className="" />
      <h3 className="dark:text-white text-3xl font-bold my-10 text-gray-800">
      WE ARE VERY <br />
      EXPERIENCED & PROFESSIONALS
      </h3>
 
        <div className="space-y-3 ">
        <div>
          <p className="text-xl font-bold py-1">SUPPORT TIPS</p>
        <input type="range" min={0} max="100" value="90" className="range range-warning range-xs" />
        </div>
        <div>
          <p className="text-xl font-bold py-1 uppercase">Workshops</p>
        <input type="range" min={0} max="100" value="85" className="range range-warning  range-xs" />
        </div>
        <div>
          <p className="text-xl font-bold py-1 uppercase">Community Engagement</p>
        <input type="range" min={0} max="100" value="93" className="range range-warning  range-xs" />
        </div>
        <div>
          <p className="text-xl font-bold py-1 uppercase">Alumni Support</p>
        <input type="range" min={0} max="100" value="95" className="range range-warning  range-xs" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default FQA;
