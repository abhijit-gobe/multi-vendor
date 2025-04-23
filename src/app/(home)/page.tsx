import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <div>
        <Input type="text" placeholder="Enter your name" />
      </div>
      <div>
        <Button variant={"elevated"}>Click me</Button>
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="Enter your name" />
      </div>
    </div>
  );
}
