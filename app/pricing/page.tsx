"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Lets check if you are a true Zootopia fan!!!!",
      description:
        "Question #1. Finnick----------------------Question #2. Officer Ben Clawhauser----Question #3. Dawn Bellwether.-----------",
    });
  };

  return (
    <div>
      <h1 className={title()}>Character Quiz</h1>

      <p>Lets see how well you know the animals of zootropolis.</p>

      <section className="mt-5">
        <h2 className="text-center font-bold">
          Make your guess, then click the button below to find out the correct
          answer!
        </h2>
        <div className="flex justify-center gap-8 mt-4">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="flex flex-col items-center justify-center py-8 md:py-2">
                <img
                  alt="finnick"
                  src="https://ami.animecharactersdatabase.com/uploads/chars/59631-350615011.png"
                  width="100%"
                />
              </div>
            </CardHeader>
            <CardBody>
              <ol className="list-disc pl-5 text-xl">
                <li>Chief Bogo</li>
                <li>Judy Hopps</li>
                <li>Finnick</li>
                <li>Nick Wilde</li>
              </ol>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Answer
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="flex flex-col items-center justify-center py-8 md:py-2">
                <img
                  alt="clawhauser"
                  src="https://vignette.wikia.nocookie.net/zootopia/images/8/8e/ClawhauserRender.png/revision/latest?cb=20160407155911"
                  width="100%"
                />
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>Officer Benjamin Clawhauser</li>
                <li>Chief Bogo</li>
                <li>Dawn Bellwether</li>
                <li>Douglas Ramses</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Answer
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="flex flex-col items-center justify-center py-8 md:py-2">
                <img
                  alt="dawn bellweather"
                  src="https://tse4.mm.bing.net/th/id/OIP.OJ7j9GWFR83_7I86IO-VdAHaI0?rs=1&pid=ImgDetMain&o=7&rm=3"
                  width="100%"
                />
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>Nick Wilde</li>
                <li>Judy Hopps</li>
                <li>Finnick</li>
                <li>Dawn Bellwether</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Answer
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
