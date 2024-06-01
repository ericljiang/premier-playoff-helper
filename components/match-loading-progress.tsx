import { Progress } from "@nextui-org/react";

export function MatchLoadingProgress(props: {
  loaded: number,
  expected: number,
  errors: number;
}) {
  const label = props.errors
    ? `Loaded ${props.loaded}/${props.expected} matches. ⚠️ Failed to load ${props.errors}.`
    : `Loaded ${props.loaded}/${props.expected} matches.`;
  return (
    <Progress
      size="sm"
      value={props.loaded + props.errors}
      maxValue={props.expected}
      label={label}
    />
  );
}
