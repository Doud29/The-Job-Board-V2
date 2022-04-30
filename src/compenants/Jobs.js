import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container-app">
      <Job
        className="red"
        titre="full Times Sales associate"
        description="CDI - Sidney - Australie"
      />
      <Job
        className="green"
        titre="Agent de sécurité-PAntin"
        description="CDI - France - Pantin"
      />
      <Job
        className="yellow"
        titre="Responsable d'Atelier (H/F)"
        description="CDI-France-Pantin"
      />
      <Job
        className="bleu"
        titre="Chefs de Projets"
        description="CDD - France - Paris"
      />
      <Job
        className="red"
        titre="Développeur React.js"
        description="CDI - France - Paris"
      />
      <Job
        className="green"
        titre="Sales Asscoiate Stockholm"
        description="CDI - Suède - Stockolm"
      />
      <Job
        className="rose"
        titre="Vendeur/se-Crans Montana"
        description="CDD - Suisse - Crans Montana"
      />
      <Job
        className="yellow"
        titre="CRM et Data Quality Analyst"
        description="CDI - USA - New-york"
      />
      <Job
        className="bleu"
        titre="CRM et Data Quality Analyst"
        description="CDI - Pantin - France"
      />
    </div>
  );
};

export default Jobs;
