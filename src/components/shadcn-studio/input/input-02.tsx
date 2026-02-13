import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputLabelDemoProps {
  Title: string;
  Placeholder: string;
}
const InputLabelDemo = ({ Title, Placeholder }: InputLabelDemoProps) => {
  const id = useId();

  return (
    <div className="flex justify-center items-center gap-2 w-full max-w-xs space-y-2">
      <Label htmlFor={id}>{Title}</Label>
      <Input id={id} type="email" placeholder={Placeholder} />
    </div>
  );
};

export default InputLabelDemo;
