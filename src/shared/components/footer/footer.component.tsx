import LogoSvg from "@/src/shared/svgs/logo.svg";
import Disclaimer from "./elements/disclaimer.component";
import LinksList from "./elements/links-list.component";
import RightsNote from "./elements/rights.component";

export default async function Footer() {
  return (
    <>
      <footer className="border-y border-gray-eve py-8 max-md:px-4">
        <div className="grid grid-col-1 md:grid-cols-[1fr_3.5fr] gap-x-8">
          <LogoSvg className="max-md:mx-auto" />
          <div className="flex flex-col gap-6 max-xl:pt-6 max-xl:mt-6 border-t border-t-transparent max-xl:border-t-gray-eve!">
            <LinksList />
            <Disclaimer />
          </div>
        </div>
      </footer>
      <RightsNote />
    </>
  );
}
