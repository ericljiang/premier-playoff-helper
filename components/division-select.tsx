import { PremierConferences } from "@/valorant-api";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";

type Inputs = {
  conference: PremierConferences;
  division: number;
};

export type DivisionSelectProps = {
  onSelect: (selection: Inputs) => void;
};

export function DivisionSelect({ onSelect }: DivisionSelectProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSelect)} className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Conference"
        {...register("conference", { required: true })}
      >
        {Object.values(PremierConferences)
          .map(conference => (
            <SelectItem key={conference} value={conference}>
              {conference}
            </SelectItem>
          ))}
      </Select>
      <Select
        label="Division"
        {...register("division", { required: true })}
      >
        {Array.from(Array(20).keys())
          .map(i => i + 1)
          .map(division => (
            <SelectItem key={division} value={division}>
              {division.toString()}
            </SelectItem>
          ))}
      </Select>
      <Button
        size="lg"
        color="primary"
        type="submit"
        isDisabled={!isValid}
      >
        Next
      </Button>
    </form>
  );
}
