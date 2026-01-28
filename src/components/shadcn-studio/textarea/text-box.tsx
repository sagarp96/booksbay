import { useId } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
type TitleBoxProps = {
  labeltext: string;
};
const TitleBox = ({ labeltext }: TitleBoxProps) => {
  const id = useId();
  return (
    <div className="flex justify-around gap-2 w-full max-w-xs space-y-2">
      <Label htmlFor={id}>{labeltext}</Label>
      <Textarea
        className="bg-muted border-transparent shadow-none"
        placeholder={labeltext}
        id={id}
      />
    </div>
  );
};

export default TitleBox;
