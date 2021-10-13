import { useRef } from "react";
import { FiPrinter } from "react-icons/fi";
import ReactToPrint from "react-to-print";

import { Button } from "../Button";

interface PrintProps {
  id: string;
}

export function Print({ id }: PrintProps) {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReactToPrint
        trigger={() => {
          return (
            <Button>
              <FiPrinter />
              Imprimir
            </Button>
          );
        }}
        content={() => componentRef.current}
      />
    </>
  );
}