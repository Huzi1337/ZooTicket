import "./SectionTitle.scss";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <>
      <h2 className="sectionTitle__text">{title}</h2>
      <hr className="sectionTitle__underline"></hr>
    </>
  );
};

export default SectionTitle;
