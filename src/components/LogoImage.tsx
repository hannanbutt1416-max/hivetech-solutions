import logoImage from 'figma:asset/468aa9b0a5c7655ca4ff559abe5fcfdc42ac5232.png';

export function LogoImage({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="Hive Tech Solutions - Digital Marketing & Web Development Agency"
      className={className}
      loading="eager"
    />
  );
}
