import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';


// the diagram model
const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'bilibili', coordinates: [250, 360], },
    { id: 'node-2', content: 'Live', coordinates: [100, 200], },
    { id: 'node-3', content: 'UGC', coordinates: [250, 180], },
    { id: 'node-4', content: 'Gaming', coordinates: [400, 200], },
    { id: 'node-5', content: 'Monetization', coordinates: [100, 500], },
    { id: 'node-6', content: 'ECommerce', coordinates: [250, 520], },
    { id: 'node-7', content: 'Lecture', coordinates: [400, 500], },
    { id: 'node-8', content: 'Personalization', coordinates: [400, 360], },
  ],
  links: [
    { input: 'node-1',  output: 'node-2' },
    { input: 'node-1',  output: 'node-3' },
    { input: 'node-1',  output: 'node-4' },
    { input: 'node-1',  output: 'node-5' },
    { input: 'node-1',  output: 'node-6' },
    { input: 'node-1',  output: 'node-7' },
    { input: 'node-1',  output: 'node-8' },
  ]
});

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div style={{ height: '100.5rem' }}>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default UncontrolledDiagram;
