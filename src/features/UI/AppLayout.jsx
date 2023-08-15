import CvTemplate from "../cv-template/CvTemplate";
import UserForm from "../Form/UserForm";
import Button from "../Form/Button";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function AppLayout() {
  const ref = useRef();

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <div>
      <div className="relative flex flex-col items-center gap-8 p-20">
        <div className="fixed right-12 top-12">
          <Button onClick={() => handlePrint()}>
            <span className="flex items-center gap-2 text-xl font-bold">
              <UilDownloadAlt />
              Download
            </span>
          </Button>
        </div>
        <h1 className="absolute top-6 font-mono text-2xl uppercase">
          Resume Builder
        </h1>
        <div className="sm:h-full sm:w-3/5 md:h-4/5 ">
          <UserForm />
        </div>
        <page
          size="A4"
          className="flex h-full w-full flex-col items-center p-12 shadow-2xl"
          ref={ref}
        >
          <CvTemplate />
        </page>
      </div>
    </div>
  );
}

export default AppLayout;
