export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="text-primary">{sampleTextProp}</div>;
};

export default BaseTemplate;
