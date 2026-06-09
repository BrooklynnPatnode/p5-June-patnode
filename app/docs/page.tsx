import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Pinocchio Facts!!</h1>

      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className="text-2xl mr-2">
          How many of these did you already know?
        </span>{" "}
        <img
          alt="jiminy cricket"
          src="https://imgblog.interestingfacts.com/2023/01/GettyImages-1137302098.jpg"
          width="40%"
        />
      </div>
      <p>
        In Carlo Collodis 1883 book Pinocchio, from which the movie was adapted,
        Jiminy was smashed to death early on by an angry Pinocchio, who himself
        was also a much different and more mischievous character.
      </p>
      <br />
      <p>
        Pinocchio initially struggled to earn its money back upon its debut in
        February 1940. The ongoing global conflict of World War II prevented the
        film from being released in European and Asian markets. Thankfully,
        things improved from there: Beginning with its first re-release in 1945,
        after the war ended, Pinocchio went on to net $164 million at the box
        office, making a large profit in the end.
      </p>
      <br />
      <p>
        Figaro, the cat originally staring in Pinocchio, was loved so much by
        Walt Disney that he became Minnie Mouses official pet. Figaro also ended
        up staring 6 other films in the disney universe after this!
      </p>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <img
          alt="figaro the cat"
          src="https://imgblog.interestingfacts.com/2023/01/GettyImages-1137301037.jpg"
          width="40%"
        />
      </div>
    </div>
  );
}
