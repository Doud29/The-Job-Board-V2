const Job = ({ className, titre, description }) => {
  return (
    <div className={`bloc ${className}`}>
      <p>{titre}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Job;
