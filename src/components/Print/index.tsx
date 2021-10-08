import { Ref, useRef } from "react";
import { FiPrinter } from "react-icons/fi";
import ReactToPrint from "react-to-print";
import { useRep } from "../../hooks/useRep";

import { Button } from "../Button";

interface PrintProps {
  id: string;
}

export function Print({ id }: PrintProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const { rep, repRepairHistory } = useRep(id);

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