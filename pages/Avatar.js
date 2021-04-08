import Image from "next/image";

function Avatar() {
  return (
    <Image
      src="../public/images/profile.jpg"
      alt="Fal Nunthawat"
      height={144}
      width={144}
      // width="120"
      // height="120"
    />
  );
}

export default Avatar;
