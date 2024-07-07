// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className="p-10 flex flex-col gap-10 overflow-hidden">{children}</div>
  );
};

export default Container;
