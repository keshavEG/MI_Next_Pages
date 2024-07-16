// components/SolutionComponent.tsx
import Image from 'next/image';

const SolutionComponent = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <Image src={image} alt={title} width={500} height={300} className="mb-4" />
      <p className="text-base leading-7">{description}</p>
    </div>
  );
};

export default SolutionComponent;
