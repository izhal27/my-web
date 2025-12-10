import Image from "next/image";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Image
        src="/images/under-construction.png"
        alt="Under Construction"
        width={500}
        height={345.7}
        className="max-w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
