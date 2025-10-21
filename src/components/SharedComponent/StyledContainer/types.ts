import { RefObject } from "react";

export interface StyledContainerProps {
   children: React.ReactNode;
   testId: string;
   className?: string;
   ref?: RefObject<HTMLDivElement | null>;
}