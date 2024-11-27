const ComponentPage = ({params}) => {
  const component = params.group;
  
  return (
    <div className="min-h-[100vh]">
      <h1>This page is for each single component: {component}</h1>
    </div>
  );
};

export default ComponentPage;