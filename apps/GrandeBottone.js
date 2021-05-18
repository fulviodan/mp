import { Button } from "@chakra-ui/button";

export function BigButton({ state }) {
  return <Button onClick={(state.number += 1)}>Increment</Button>;
}
