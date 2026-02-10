const HeadingBadge = ({
  text = "BADGE",
  className = "",
}) => {
  return (
    <span
      className={`inline-block bg-black text-white text-xs px-4 py-1 rounded-full tracking-widest ${className}`}
    >
      {text}
    </span>
  );
};

export default HeadingBadge;
