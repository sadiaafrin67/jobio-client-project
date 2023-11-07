import Marquee from "react-fast-marquee";

const Sopnsor = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="mb-20">
      <h1 className="text-center my-5 md:text-3xl text-4xl font-bold text-black">
        <span className="text-[#1e3c72] font-bold md:text-4xl text-3xl">
          Sponsor
        </span>{" "}
        Companies
      </h1>
      <p className="text-center text-base font-medium text-gray-600 mb-6">
        Sponsor Companies that working with us..And most demandable companies
        who hires candidates.
      </p>

      <Marquee speed={130}>
        <div className="w-[300px] mx-4  flex gap-4">
          <img
            className="lg:w-50 md:w-30 "
            src="https://i.ibb.co/6X83Z8m/com-2.jpg"
            alt=""
          />

          <img
            className="lg:w-50 md:w-30 "
            src="https://i.ibb.co/2F2rJ0Y/abstract-initial-letter-t-and-e-in-black-and-blue-color-isolated-in-white-background-applied-for-dig.jpg"
            alt=""
          />

          <img
            className="lg:w-50 md:w-30 "
            src="https://i.ibb.co/S05X6G0/development-logo-template-concept-vector-30961369.jpg"
            alt=""
          />

          <img
            className="lg:w-50 md:w-30 "
            src="https://i.ibb.co/h21fsNL/eef5addc3bf3c9a386ddf4d352c60272.jpg"
            alt=""
          />

        
        </div>

        <div className="w-[300px] mx-4  flex gap-4">
        <img
            className="lg:w-50 md:w-30 "
            src="https://i.ibb.co/2kzJSMj/attachment-72483714.jpg"
            alt=""
          />

          <img
            className="lg:w-50 md:w-30 "
            src="https://i.ibb.co/NrpmRsk/company-name-logo-design-for-illustration-design-pen-graphic-draw-purple-and-yellow-brand-name-desig.jpg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Sopnsor;
