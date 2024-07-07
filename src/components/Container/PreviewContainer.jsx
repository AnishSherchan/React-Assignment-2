const PreviewContainer = ({ children }) => {
  return (
    <main className="counter rounded-lg overflow-hidden border border-gray-400 p-4 flex flex-col gap-5">
      {children}
    </main>
  );
};

export default PreviewContainer;
