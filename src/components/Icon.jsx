const Icon = ({ link, src, alt }) => {
  return (
    <button className="m-3 transition duration-500 hover:scale-110">
      <a href={link}>
        <img src={src} alt={alt} className="h-10 w-10" />
      </a>
    </button>
  );
};

export default Icon;
