import YandexMap from "./YandexMap";

export default function Footer() {
  return (
    <footer>
      <div className=" mt-20">
        <YandexMap />
      </div>
      <div className="  bg-gray-100 ">
        <div className="pt-7 px-5 pb-4 md:w-200 lg:w-220 xl:w-[1170px] mx-auto">
          <div className="lg:flex lg:justify-between lg:flex-row-reverse">
            <div className=" pb-5">
              <p className=" text-gray-500">Technical support</p>
              <a className=" text-2xl text-blue-700" href="tel:8 800 600-03-38">
                8 888 888-88-88
              </a>
            </div>
            <hr className=" mt-5 mb-5 lg:hidden" />
            <div>
              <a className=" mr-8 mb-4 inline-block cursor-pointer hover:underline">
                Requisites
              </a>
              <a className=" mr-8 mb-4 inline-block cursor-pointer hover:underline">
                Terms of use
              </a>
              <a className="mb-4 inline-block cursor-pointer hover:underline">
                Privacy Policy
              </a>
              <div className=" mt-3 flex">
                <a className="cursor-pointer">
                  <img className=" h-11 mr-5 mb-6" src="/app-store.webp" />
                </a>
                <a className="cursor-pointer">
                  <img className=" h-11 mr-5 mb-6" src="/google-play.webp" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <hr className=" mb-4" />
            <p className=" mb-4 text-gray-400">
              We use the information recorded{" "}
              <a
                className=" text-blue-700 cursor-pointer hover:underline"
                href=""
              >
                in cookies
              </a>
              , in particular for advertising and statistical purposes, and to
              tailor our websites to the individual needs of Users. You can
              change the settings regarding cookies in your browser. Changing
              settings may limit the functionality of the site.
            </p>
            <hr className=" mb-4" />
            <p className=" text-gray-400">© 2013-2025, Ltd. "Capital"</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
